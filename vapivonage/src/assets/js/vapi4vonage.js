import NexmoClient from 'nexmo-client';
const server_url = "https://vids.vonage.com/v4v";
export class v4v {
    static async doForm(formDesc, intro = true) {
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
                fields: formDesc,
                intro: intro
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
            var els;
            if (event.body.name) {
                if (event.body.type == "phone") { // Special Processing
                    els = document.getElementsByName(event.body.name);
                    if (els) {
                        els[0].value = event.body.answer;
                    }
                    if (event.body.fields) {
                        if (event.body.fields.countrycode) {
                            els = document.getElementsByName(event.body.fields.countrycode);
                            if (els) {
                                if (event.body.fields.countrycodedata) {
                                    console.log("Selector: ", '[' + event.body.fields.countrycodedata + '="' + event.body.region + '"]');
                                    let sel = els[0].querySelector('[' + event.body.fields.countrycodedata + '="' + event.body.region + '"]');
                                    console.log("Sel: ", sel);
                                    sel.selected = true;
                                    console.log("Set to: ", sel.selected)
                                } else {
                                    els[0].value = "+" + event.body.countrycode;
                                }
                            }
                        }
                        if (event.body.fields.local) {
                            els = document.getElementsByName(event.body.fields.local);
                            if (els) {
                                els[0].value = event.body.local;
                            }
                        }
                        if (event.body.fields.region) {
                            els = document.getElementsByName(event.body.fields.region);
                            if (els) {
                                if (event.body.fields.regiondata) {
                                    console.log("Region Selector: ", '[' + event.body.fields.regiondata + '="' + event.body.region + '"]');
                                    let sel = els[0].querySelector('[' + event.body.fields.regiondata + '="' + event.body.region + '"]');
                                    console.log("Region Sel: ", sel);
                                    console.log("R Set to: ", sel.selected)
                                    sel.selected = true;
                                    console.log("R Then Set to: ", sel.selected)

                                } else {
                                    els[0].value = event.body.region;
                                }
                            }
                        }
                    }
                } else {
                    els = document.getElementsByName(event.body.name);
                    if (els) {
                        switch (event.body.type) {
                            case "text":
                            case "number":
                            case "email":
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
                            default:
                                els[0].value = event.body.answer;
                                break;

                        }
                    }
                }
            }
        });
    }
}

