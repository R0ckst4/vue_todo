<template lang="">
  <form @submit.prevent class="createToDo">
    <h1>Ur Plans</h1>
    <my-input
      v-model="task.describtion"
      type="text"
      placeholder="What are u gonna do?"
    />
    <my-button @click="createTask">Plan It</my-button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        task: {
          describtion: "",
        },
      };
    },
    methods: {
      createTask() {
        if (this.task.describtion) {
          this.task.id = Date.now();
          this.task.cheked = false;
          this.task.important = false;
          this.$emit("create", this.task);
          this.task = {
            describtion: "",
          };
        } else return;
      },
    },
  };
</script>
<style scoped>
  h1 {
    text-align: center;
  }
</style>
