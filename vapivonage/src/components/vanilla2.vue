<template>
  <div class="vanilla2">
    <button v-on:click="doCall">Click to Start</button>
    <div class="field">
      <label class="label">Favorite Color </label>
      <input name="color" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Favorite Animal </label>
      <input name="animal" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Use Case </label>
      <input name="usecase" class="input" type="text" />
    </div>
    <div class="field">
      <label class="label">Can I give you a million dollars? </label>
      <input name="million" type="checkbox" />
    </div>
    <button name="done" v-on:click="submit">Submit</button>
  </div>
</template>

<script>
import { v4v } from "@/assets/js/vapi4vonage";
export default {
  name: "vanilla2",
  props: {},
  data() {
    return {
      fields: [
        {
          name: "color",
          type: "text",
          phrase: "What is your favorite color",
        },
        {
          name: "animal",
          type: "text",
          phrase: "Tell me what your very favorite animal is",
        },
        {
          name: "usecase",
          type: "text",
          phrase: "Briefly describe your use case",
        },
        {
          name: "million",
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
