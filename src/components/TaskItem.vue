<template>
  <li class="task">
    <div>
      <my-button
        v-if="this.task.cheked"
        @click="$emit('crossOut', task)"
        class="my-button__doneIt"
        >Undone</my-button
      >
      <my-button
        v-else
        @click="$emit('crossOut', task)"
        class="my-button__doneIt"
        >Done It</my-button
      >
      <div v-if="this.task.cheked">
        <s>{{ task.describtion }}</s>
      </div>
      <div v-else>{{ task.describtion }}</div>
    </div>
  </li>
</template>
<script>
  import MyButton from "@/components/UI/MyButton.vue";
  export default {
    components: {
      MyButton,
    },
    props: {
      task: {
        type: Object,
        required: true,
      },
    },
    methods: {},
  };
</script>
<style scoped>
  .task {
    padding: 1em;
    border-bottom: 1px solid #000;
    word-wrap: break-word;
    list-style-type: none;
  }
  .my-button__doneIt {
    background-color: rgba(255, 255, 255, 0.26);
    width: auto;
    margin-top: -5px;
    padding: 10px;
    float: right;
  }
  /* input[type="checkbox"] {
     display: none;
   }
   input[type="checkbox"] + label::before {
     content: "";
     background: #9acd32;
     border-radius: 5px;
     border: 2px solid #ddd;
     display: inline-block;
     vertical-align: middle;
     width: 10px;
     height: 10px;
     padding: 2px;
     margin-right: 10px;
     text-align: center;
   }

   input[type="checkbox"]:checked + label::before {
     content: "";
     display: inline-block;
     width: 1px;
     height: 5px;
     border: solid #000;
     border-width: 0 3px 3px 0;
     transform: rotate(45deg);
     border-radius: 0;
     margin: 0 15px 5px 5px;
   } */
</style>
