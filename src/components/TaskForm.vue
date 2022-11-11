<template lang="">
  <form @submit.prevent class="createToDo">
    <h1>Ur Plans</h1>
    <my-input
      v-model="task.describtion"
      type="text"
      placeholder="What are u gonna do?"
    />
    <my-button @click="createTask">Plan It</my-button>
    <div class="imp_checkbox">
      <input type="checkbox" id="important_checkbox" v-model="task.important" />
      <label for id="important_checkbox"> important task</label>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        task: {
          describtion: "",
          important: false,
        },
      };
    },
    methods: {
      createTask() {
        if (this.task.describtion && this.task.describtion.trim()) {
          this.task.id = Date.now();
          this.task.done = false;

          this.$emit("create", this.task);
          this.task = {
            describtion: "",
          };
        } else {
          this.task = {
            describtion: "",
          };
          return;
        }
      },
    },
  };
</script>
<style scoped>
  h1 {
    text-align: center;
  }
  .imp_checkbox {
    margin: 5px;
    text-align: center;
  }
</style>
