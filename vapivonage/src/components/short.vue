<template>
  <div class="short">
    <button v-on:click="doCall">Click to Start</button>
    <div class="field">
      <label class="label">Silly Word </label>
      <input name="silly" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Email </label>
      <input size="40" name="email" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Can I give you a million dollars? </label>
      <input name="million1" type="checkbox" />
    </div>
    <button name="done1" v-on:click="submit">Submit</button>
  </div>
</template>

<script>
import { v4v } from "@/assets/js/vapi4vonage";
//import { v4v } from "../../../lvapi4vonage.js";
export default {
  name: "short",
  props: {},
  data() {
    return {
      fields: [
        {
          name: "silly",
          type: "text",
          phrase: "Say a silly word",
        },
        {
          name: "email",
          type: "email",
          phrase: "What is your email address?",
        },
        {
          name: "million1",
          type: "checkbox",
          phrase: "Would you like me to give you a million dollars?",
        },
        {
          name: "done1",
          type: "button",
          phrase: "Does that sound good?",
        },
      ],
    };
  },
  created() {
    console.log("Vanilla test");
    let answer = "Mark dot Birkeland at vonage.com";
    let email = answer.replace(/\bdot\b/g, ".");
    email = email.replace(/\bat\b/g, "@");
    email = email.replace(/\s/g, "");
    console.log("Result: " + email);
  },
  mounted() {},
  methods: {
    doCall() {
      v4v.doForm(this.fields);
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
