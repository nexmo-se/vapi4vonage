import NexmoClient from 'nexmo-client';
const server_url = "https://vids.vonage.com/v4v";
export class v4v {
    static async doForm(formDesc) {
        console.log("Make the call here, form = ", formDesc);
        const id = new Date().getTime();
        var jwt;
        var con;
        var client;
        var vapp;
        await fetch(server_url + "/register", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                fields: formDesc
            })
        }).then(async (result) => {
            const body = await result.json();
            console.log("Registered!", body);
            jwt = body.jwt;
            con = body.con;
            client = new NexmoClient();
        });
        /**/
        vapp = await client.login(jwt);
        vapp.callServer("v4vid:" + id, "phone", {
            id: "" + id,
        });
        vapp.on("call:status:changed", (call) => {
            console.log("Call status change: ", call);
        });
        const cconv = await vapp.getConversation(con);
        cconv.on("v4v", (sender, event) => {
            console.log("*** v4v event received, event: ", event);
            if (event.body.name) {
                let els = document.getElementsByName(event.body.name);
                if (els) {
                    switch (event.body.type) {
                        case "text":
                        case "number":
                            els[0].value = event.body.answer;
                            break;
                        case "checkbox":
                            els[0].checked = event.body.answer;
                            break;
                        case "button":
                            if (event.body.answer) {
                                els[0].click();
                            }
                            break;
                    }
                }
            }
        });
    }
}

