<template>
  <div class="short">
    <button v-on:click="doCall">Click to Start</button>
    <div class="field">
      <label class="label">Silly Word </label>
      <input name="silly" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Can I give you a million dollars? </label>
      <input name="million1" type="checkbox" />
    </div>
    <button name="done" v-on:click="submit">Submit</button>
  </div>
</template>

<script>
import { v4v } from "@/assets/js/vapi4vonage";
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
          name: "million1",
          type: "checkbox",
          phrase: "Would you like me to give you a million dollars?",
        },
        {
          name: "done",
          type: "button",
          phrase: "Does that sound good?",
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
      console.log("Developer? " + this.developer);
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
