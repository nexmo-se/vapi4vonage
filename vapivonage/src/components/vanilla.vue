<template>
  <div class="vanilla">
    <button v-on:click="doCall">Click to Start</button>
    <div class="field">
      <label class="label">First Name </label>
      <input size="20" name="first" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Last Name </label>
      <input size="20" name="last" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Company </label>
      <input size="30" name="company" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Phone Number </label>
      <input size="20" name="phone" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Email </label>
      <input size="40" name="email1" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Developer? </label>
      <input name="developer" type="checkbox" />
    </div>
    <div class="field">
      <label class="label">Privacy ok? </label>
      <input name="privacy" type="checkbox" />
    </div>
    <button name="done" v-on:click="submit">Submit</button>
  </div>
</template>

<script>
import { v4v } from "@/assets/js/vapi4vonage";
export default {
  name: "vanilla",
  props: {},
  data() {
    return {
      fields: [
        {
          name: "first",
          type: "text",
          phrase: "Please say your First Name",
        },
        {
          name: "last",
          type: "text",
          phrase: "Please say your Last Name",
        },
        {
          name: "company",
          type: "text",
          phrase: "Please say your Company Name",
        },
        {
          name: "phone",
          type: "number",
          phrase: "Please say your Phone Number, including the country code",
        },
        {
          name: "email1",
          type: "email",
          phrase: "What is your email address?",
        },
        {
          name: "developer",
          type: "checkbox",
          phrase: "Are you a developer?",
        },
        {
          name: "privacy",
          type: "checkbox",
          phrase:
            "If you agree to be contacted via phone and email regarding your interest in our products and services please say Yes.",
        },
        {
          name: "done",
          type: "button",
          phrase:
            "If needed, edit the form on the screen, and press the Submit button. Otherwise, if everything looks right, simply say Yes.",
        },
      ],
    };
  },
  created() {
    console.log("Vanilla test");
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
