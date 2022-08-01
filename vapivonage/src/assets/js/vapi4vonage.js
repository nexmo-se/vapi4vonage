import NexmoClient from 'nexmo-client';
const server_url = "https://vids.vonage.com/v4v";
export class v4v {
    constructor() {
        console.log("In v4v constructor")
        this.vapp = null;
    }
    async leaveForm() {
        console.log("In leaveForm", this.vapp)
        if (this.vapp && this.vapp.session && this.vapp.session.deleteSession) {
            console.log("Deleting Session");
            this.vapp.session.deleteSession();
        }
    }
    async doForm(formDesc, intro = true, transcript = null, language = "en-US") {
        function findEl(data, name) {
            var els;
            if (data.fields && data.fields.form) {
                els = document.getElementById(data.fields.form).elements[name];
            } else {
                var mels = document.getElementsByName(name);
                if (mels.length) {
                    els = mels[0];
                } else {
                    els = document.getElementById(name);
                }
            }
            return els;
        }
        console.log("Make the call here, form = ", formDesc);
        const id = new Date().getTime();
        var jwt;
        var con;
        var client;
        await fetch(server_url + "/register", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                fields: formDesc,
                intro: intro,
                transcript: transcript,
                language: language,
            })
        }).then(async (result) => {
            const body = await result.json();
            console.log("Registered!", body);
            jwt = body.jwt;
            con = body.con;
            client = new NexmoClient({
                nexmo_api_url: "https://api-us-1.nexmo.com"
            });
        });
        this.vapp = await client.createSession(jwt); //
        //this.vapp = await client.login(jwt); //
        this.vapp.callServer("v4vid:" + id, "phone", {
            id: "" + id,
        });
        this.vapp.on("call:status:changed", (call) => {
            console.log("Call status change: ", call);
            console.log("Status: " + call.status)
            if (call.status === "started") {
                console.log('Started call');
            }
        });
        const cconv = await this.vapp.getConversation(con);
        cconv.on("v4v", (sender, event) => {
            console.log("*** v4v event received, event: ", event);
            var els;
            if (event.body.name) {
                if (event.body.type == "phone") { // Special Processing
                    els = findEl(event.body, event.body.name);
                    if (els) {
                        els.value = event.body.answer;
                    }
                    if (event.body.fields) {
                        if (event.body.fields.countrycode) {
                            els = findEl(event.body, event.body.fields.countrycode);
                            if (els) {
                                if (event.body.fields.countrycodedata) {
                                    let sel = els.querySelector('[' + event.body.fields.countrycodedata + '="' + event.body.region + '"]');
                                    sel.selected = true;
                                } else {
                                    els.value = "+" + event.body.countrycode;
                                }
                            }
                        }
                        if (event.body.fields.local) {
                            els = findEl(event.body, event.body.fields.local);
                            if (els) {
                                els.value = event.body.local;
                            }
                        }
                        if (event.body.fields.region) {
                            els = findEl(event.body, event.body.fields.region);
                            if (els) {
                                if (event.body.fields.regiondata) {
                                    let sel = els.querySelector('[' + event.body.fields.regiondata + '="' + event.body.region + '"]');
                                    sel.selected = true;

                                } else {
                                    els.value = event.body.region;
                                }
                            }
                        }
                    }
                } else {
                    var els;
                    els = findEl(event.body, event.body.name);
                    if (els) {
                        switch (event.body.type) {
                            case "text":
                            case "number":
                            case "email":
                            case "transcript":
                                els.value = event.body.answer;
                                break;
                            case "checkbox":
                                els.checked = event.body.answer;
                                break;
                            case "submit":
                            case "button":
                                if (event.body.answer) {
                                    els.click();
                                }
                                break;
                            default:
                                els.value = event.body.answer;
                                break;

                        }
                    }
                }
            }
        });
    }
}

