<template lang="">
  <form @submit.prevent class="createToDo">
    <h1>Ur Plans</h1>
    <input
      v-model="task.describtion"
      class="message"
      type="text"
      placeholder="What are u gonna do?"
    />
    <my-button @click="createTask">Plan It</my-button>
  </form>
</template>

<script>
  import MyButton from "@/components/UI/MyButton.vue";
  export default {
    components: {
      MyButton,
    },
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
  .message {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 376px;
    padding: 10px;
  }

  h1 {
    text-align: center;
  }
</style>
