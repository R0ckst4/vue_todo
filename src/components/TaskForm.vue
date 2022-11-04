<template lang="">
  <form @submit.prevent class="createToDo">
    <h1>Ur Plans</h1>
    <input
      v-model="task.describtion"
      class="message"
      type="text"
      placeholder="What are u gonna do?"
    />
    <button @click="createTask" class="my-button">Plan It</button>
  </form>
</template>
<script>
  export default {
    data() {
      return {
        task: {
          describtion: "",
          checked: false,
          important: false,
        },
      };
    },
    methods: {
      createTask() {
        this.task.id = Date.now();
        this.$emit("create", this.task);
        this.task = {
          describtion: "",
        };
      },
    },
  };
</script>
<style scoped>
  .message {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 376px;
    padding: 10px;
  }
  .my-button {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10px;
    width: 400px;
    padding: 10px;
    cursor: pointer;
  }
  h1 {
    text-align: center;
  }
</style>
