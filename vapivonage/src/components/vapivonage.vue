<template>
  <div class="vapivonage">
    <button v-on:click="doCall">Click to Start</button>
    <div class="field">
      <label class="label">First Name </label>
      <input
        id="first"
        ref="first"
        class="input"
        type="text"
        v-model="firstname"
      />
    </div>
    <div class="field">
      <label class="label">Last Name </label>
      <input ref="last" class="input" type="text" v-model="lastname" />
    </div>
    <div class="field">
      <label class="label">Company </label>
      <input ref="company" class="input" type="text" v-model="company" />
    </div>
    <div class="field">
      <label class="label">Phone Number </label>
      <input ref="phone" class="input" type="text" v-model="phone" />
    </div>
    <div class="field">
      <label class="label">Developer? </label>
      <input ref="developer" type="checkbox" v-model="developer" />
    </div>
    <div class="field">
      <label class="label">Privacy ok? </label>
      <input ref="privacy" type="checkbox" v-model="privacy" />
    </div>
    <button ref="done" v-on:click="submit">Submit</button>
  </div>
</template>

<script>
import NexmoClient from "nexmo-client";
export default {
  name: "vapivonage",
  props: {},
  data() {
    return {
      server_url: "https://mberkeland3.ngrok.io",
      server: null,
      id: new Date().getTime(),
      firstname: "",
      lastname: "",
      company: "",
      phone: "",
      developer: false,
      privacy: false,
      vapp: null,
      client: null,
      jwt: null,
      con: null,
      fields: [
        {
          id: 0,
          name: "first",
          type: "text",
          phrase: "Please say your First Name",
        },
        {
          id: 1,
          name: "last",
          type: "text",
          phrase: "Please say your Last Name",
        },
        {
          id: 2,
          name: "company",
          type: "text",
          phrase: "Please say your Company Name",
        },
        {
          id: 3,
          name: "phone",
          type: "number",
          phrase: "Please say your Phone Number, including the country code",
        },
        {
          id: 4,
          name: "developer",
          type: "checkbox",
          phrase: "Are you a developer?",
        },
        {
          id: 5,
          name: "privacy",
          type: "checkbox",
          phrase:
            "We will treat your data in accordance with our privacy policy. If you agree to be contacted via phone and email regarding your interest in our products and services please say Yes.",
        },
        {
          id: 6,
          name: "done",
          type: "button",
          phrase:
            "If needed, edit the form on the screen, and press the Submit button. Otherwise, if everything looks right, simply say Yes.",
        },
      ],
    };
  },
  created() {},
  mounted() {
    //document.getElementById("first").value = "Markie";
  },
  methods: {
    async startUp() {
      this.server = this.axios.create({
        baseURL: this.server_url,
        headers: {
          "Content-Type": "application/json",
        },
      });
      await this.server
        .post("/register", {
          id: this.id,
          fields: this.fields,
        })
        .then((result) => {
          console.log("Registered!", result.data);
          this.jwt = result.data.jwt;
          this.con = result.data.con;
          this.client = new NexmoClient();
        });
    },
    async doCall() {
      console.log("Make the call here, jwt = " + this.jwt);
      await this.startUp();
      this.vapp = await this.client.login(this.jwt);
      this.vapp.callServer("v4vid:" + this.id, "phone", {
        id: "" + this.id,
      });
      this.vapp.on("call:status:changed", (call) => {
        console.log("Call status change: ", call);
      });
      const cconv = await this.vapp.getConversation(this.con);
      cconv.on("v4v", (sender, event) => {
        console.log("*** v4v event received, event: ", event);
        if (event.body.name) {
          switch (event.body.type) {
            case "text":
            case "number":
              this.$refs[event.body.name].value = event.body.answer;
              break;
            case "checkbox":
              this.$refs[event.body.name].checked = event.body.answer;
              break;
            case "button":
              this.$refs[event.body.name].click();
              break;
          }
        }
      });
    },
    submit() {
      alert("Form submitted!");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
