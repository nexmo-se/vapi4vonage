'use strict'
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const expressWs = require('express-ws')(app);
const Vonage = require('@vonage/server-sdk');
const { promisify } = require('util');
var fs = require('fs');
var okValues = new RegExp("yes|yeah|ok|sure|fine|yep|affirmative|submit|done", "i");
const aclPaths = {
    "paths": {
        "/*/users/**": {},
        "/*/conversations/**": {},
        "/*/sessions/**": {},
        "/*/devices/**": {},
        "/*/image/**": {},
        "/*/media/**": {},
        "/*/applications/**": {},
        "/*/push/**": {},
        "/*/knocking/**": {},
        "/*/legs/**": {}
    }
}

app.use(bodyParser.json());
app.use('/', express.static(__dirname));

app.use(function (req, res, next) {
    //console.log("in server...")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "OPTIONS,GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
});

const apiKey = process.env.NEXMO_API_KEY;
const apiSecret = process.env.NEXMO_API_SECRET;
const applicationId = process.env.NEXMO_APPLICATION_ID;
const privateKey = fs.readFileSync(process.env.NEXMO_APPLICATION_PRIVATE_KEY_PATH);
const server_url = process.env.SERVER;
var vonage;
var users = [];
const fields = [
    {
        id: 0,
        name: 'first',
        phrase: 'Please say your First Name'
    },
    {
        id: 1,
        name: 'last',
        phrase: 'Please say your Last Name'
    },
    {
        id: 2,
        name: 'company',
        phrase: 'Please say your Company Name'
    },
    {
        id: 3,
        name: 'phone',
        phrase: 'Please say your Phone Number, including the country code'
    },
    {
        id: 4,
        name: 'developer',
        phrase: 'Are you a developer?'
    },
    {
        id: 5,
        name: 'privacy',
        phrase: 'We will treat your data in accordance with our privacy policy. If you agree to be contacted via phone and email regarding your interest in our products and services please say Yes.'
    },
    {
        id: 6,
        name: 'done',
        phrase: 'If needed, edit the form on the screen, and press the Submit button. Otherwise, if everything looks right, simply say Yes.'
    },
];
function startup() {
    try {
        console.log("Private key: " + privateKey)
        vonage = new Vonage({
            apiKey: apiKey,
            apiSecret: apiSecret,
            applicationId: applicationId,
            privateKey: privateKey
        });
        console.log("Vonage Object initialized");
    } catch (err) {
        console.log("Vonage Object init error: ", err);
        return false;
    }
    vonage.applications.update(applicationId, {
        name: "VAPI4VONAGE",
        capabilities: {
            voice: {
                webhooks: {
                    answer_url: {
                        address: server_url + "/answer",
                        http_method: "GET"
                    },
                    event_url: {
                        address: server_url + "/event",
                        http_method: "POST"
                    }
                },
            },
            messages: {
                webhooks: {
                    inbound_url: {
                        address: server_url + "/inbound",
                        http_method: "POST"
                    },
                    status_url: {
                        address: server_url + "/status",
                        http_method: "POST"
                    }
                }
            },
        }
    }, (error, result) => {
        if (error) {
            console.error(error);
        }
        else {
            console.log(result.capabilities.voice);
        }
    });
    console.log("Vonage webhooks set to base: " + server_url);
    return true;
}
function getJwt(name) {
    const expiry = (new Date().getTime()) + (10 * 60000); // JWT good for 10 minutes
    let opts = {
        application_id: applicationId,
        sub: name,
        exp: expiry,
        acl: aclPaths
    };
    console.log(opts)
    const njwt = Vonage.generateJwt(privateKey, opts);
    console.log("JWT length: ", njwt.length);
    return njwt;
}
async function conAdd(name, object, type) {
    if (!users[name] || !users[name].conId) {
        console.log("Invalid conversation, cannot send message for " + name);
        return;
    }
    vonage.conversations.events.create(users[name].conId,
        { "type": type, "from": name, "body": object },
        (error, result) => {
            if (error) {
                console.error(error);
            }
            else {
                console.log("Conversation event created for convo " + users[name].conId);
                console.log(result);
            }
        }
    );
}

function addPhrase(phrase) {
    let obj = {
        action: "talk",
        text: phrase,
        style: 10,
        language: "en-US",
        premium: true
    }
    return obj;
}
function getInput(user) {
    let obj = {
        action: 'input',
        type: ['speech'],
        eventUrl: [server_url + '/asr?user=' + user],
        speech: {
            endOnSilence: 1,
            language: "en-US",
            uuid: [users[user].uuid]
        }
    }
    return obj;
}
app.get("/answer", (req, res) => {
    console.log("Got answer!!!!", req.query);
    var ncco = [{
        action: "talk",
        text: "Unexpected call.  Goodbye",
        voiceName: "Kimberly"
    }];
    if (!req.query.from_user || !req.query.to.startsWith('v4vid:')) {
        return res.status(200).json(ncco);
    }
    let user = req.query.from_user
    if (!req.query.from_user) {
        user = req.query.from
    }
    if (!users[user]) {
        console.log("Creating user record for " + user);
        users[user] = {
            user: user
        }
    } else {
        console.log("Got users[user]: ", users[user]);
    }
    users[user].uuid = req.query.uuid;
    users[user].state = 0;
    users[user].answers = [];

    ncco = [];
    ncco.push(addPhrase("Welcome to the Vahnuhj Vahpee Form Filler."));
    ncco.push(addPhrase(users[user].fields[0].phrase));
    ncco.push(getInput(user));
    console.log("Answer ncco: ", ncco)
    return res.status(200).json(ncco);
})
app.post("/event", (req, res) => {
    console.log("Got event!!!!", req.body);
    return res.status(200).end();
})
app.post("/inbound", (req, res) => {
    console.log("Got inbound!!!!", req.body);
    return res.status(200).end();
})
app.post("/status", (req, res) => {
    console.log("Got status!!!!", req.body);
    return res.status(200).end();
})
app.post("/asr", (req, res) => {
    var ncco = [];
    if (req.body.speech.results) {
        console.log("Got asr!!!!", req.body.speech.results);
        if (!req.body.speech.results[0]) {
            console.log("Got asr!!!!", req.body.speech);
            ncco.push(addPhrase("Thank you"));
            return res.status(200).json(ncco);
        }
    } else {
        console.log("Something wrong with ASR: ", req.body)
        let user = req.query.user;
        if (!users[user] || users[user].errors > 2) {
            ncco.push(addPhrase("Thank you"));
        } else {
            ncco.push(addPhrase("I'm sorry, I didn't catch that"));
            ncco.push(addPhrase(users[user].fields[users[user].state].phrase));
            ncco.push(getInput(user));
            users[user].errors++;
        }
        return res.status(200).json(ncco);
    }
    let user = req.query.user;
    if (!users[user]) {
        ncco.push(addPhrase("Invalid user. Goodbye."));
        return res.status(200).json(ncco);
    }
    users[user].errors = 0;
    let state = users[user].state;
    var answer = req.body.speech.results[0].text
    if (users[user].fields[state].type == "number") {
        let nums = answer.replace(/\D/g, '');
        console.log("Number conversion: " + nums);
        answer = '' + nums;
    } else if (users[user].fields[state].type == "email") {
        let email = answer.replace(/\bdot\b/g, ".");
        email = email.replace(/\bat\b/g, "@");
        email = email.replace(/\bad\b/g, "@");
        email = email.replace(/\bunderscore\b/g, "_");
        email = email.replace(/\s/g, "");
        console.log("Email conversion: " + email);
        answer = '' + email;
    } else if (users[user].fields[state].type != "text") {
        if (okValues.test(answer)) {
            answer = true;
        } else {
            answer = false;
        }
    }
    users[user].answers[state] = answer;
    let obj = {
        name: users[user].fields[state].name,
        type: users[user].fields[state].type,
        answer: users[user].answers[state]
    }
    conAdd(user, obj, "custom:v4v");
    state++;
    if (!users[user].fields[state]) {
        ncco.push(addPhrase("Thank you"));
        console.log("Answers: ");
        let cnt = 0;
        users[user].answers.forEach((ans) => {
            console.log(users[user].fields[cnt].name + ' : ' + ans);
            cnt++;
        })
        return res.status(200).json(ncco);
    }
    users[user].state = state;
    ncco.push(addPhrase(users[user].fields[state].phrase));
    ncco.push(getInput(user));

    return res.status(200).json(ncco);

})
app.post("/register", async (req, res) => {
    console.log("Got registration", req.body);
    let rjwt = {};
    if (req.body.id) {
        let name = "VUSR_" + req.body.id;
        console.log("Creating user: " + name);
        vonage.users.create({
            name: name,
            display_name: name
        }, (error, user) => {
            if (error) console.log(error)
            console.log("Got user: ", user)
            let jwt = getJwt(name);
            if (!users[name]) {
                console.log("Creating user record for " + name + " : " + user.id);
                users[name] = {
                    user: name
                }
                users[name].uid = user.id;
            }
            users[name].errors = 0;
            if (req.body.fields) {
                users[name].fields = req.body.fields
            } else {
                users[name].fields = fields
            }
            let cname = "V4V_" + name;
            vonage.conversations.create({
                "name": cname,
                "display_name": cname
            }, (error, result) => {
                if (error) console.log(error);
                if (result) {
                    console.log("Con result:", result)
                    let con = result.id;
                    users[name].conId = con;
                    users[name].conName = cname;
                    console.log("Created conversation " + con + " for " + cname);

                    vonage.conversations.members.add(con,
                        { action: "join", user_id: users[name].uid, channel: { type: "app" } },
                        (error, result) => {
                            if (error) {
                                console.log(error.body ? error.body : "Unknown error adding user to conversation");
                            }
                            else {
                                console.log("Added user " + users[name].uid + " to conversation " + con);
                                res.status(200).json({ jwt: jwt, con: con });
                            }
                        })
                }
            }
            );
        }
        )
    }
})

if (!startup()) {
    console.log("Startup error... quitting.");
    process.exit(1);
}
const port = process.env.PORT || 8088;
var date = new Date().toLocaleString();
console.log("Starting up at " + date);
app.listen(port, 'localhost', () => console.log(`Server application listening on port ${port}!`));
