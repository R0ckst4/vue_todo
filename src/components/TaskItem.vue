<template>
  <li class="task">
    <div
      @click="$emit('crossOut', task)"
      @contextmenu.prevent="$emit('remove', task)"
    >
      <!-- <my-button
        v-if="this.task.done"
        @click="$emit('crossOut', task)"
        class="my-button__doneIt"
        >Undone</my-button
      >
      <my-button
        v-else
        @click="$emit('crossOut', task)"
        class="my-button__doneIt"
        >Done It</my-button
      > -->
      <div v-if="this.task.important" class="important">
        <div v-if="this.task.done">
          <s>{{ task.describtion }}</s>
        </div>
        <div v-else>{{ task.describtion }}</div>
      </div>
      <div v-else>
        <div v-if="this.task.done">
          <s>{{ task.describtion }}</s>
        </div>
        <div v-else>{{ task.describtion }}</div>
      </div>
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
  .important {
    color: rgb(138, 11, 11);
    text-shadow: 2px 2px 5px rgba(255, 0, 0, 0.952);
  }
  input[type="checkbox"] {
    display: none;
  }
</style>
