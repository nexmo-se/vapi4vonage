<template>
  <div class="container">
    <div class="grid-container">
      <div class="grid-item">
        <Short />
      </div>
      <div class="grid-item">
        <Vanilla2 />
      </div>
      <div class="grid-item">
        <Vanilla />
      </div>
    </div>
    <pre style="text-align: left">
<b style="text-align: left">For HTML input elements:</b>
&lt;input id='silly' type='text' />
&lt;input id="million" type="checkbox" />
&lt;button id="done">Submit&lt;/button>

<b style="text-align: left">Sample structure passed to function:</b>
{{ JSON.stringify(fields, undefined, 2) }}
    </pre>
  </div>
</template>

<script>
import Vanilla from "@/components/vanilla";
import Vanilla2 from "@/components/vanilla2";
import Short from "@/components/short";

export default {
  name: "container",
  components: {
    Vanilla,
    Vanilla2,
    Short,
  },
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  /*background-color: #2196f3;*/
  padding: 10px;
}

.grid-item {
  background-color: #5ae4e4;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: left;
}
</style>
