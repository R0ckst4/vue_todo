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
      <label for="important_checkbox"> important task</label>
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
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label::before {
    content: "";
    background: #ca3204;
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
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
    border-radius: 0;
    margin: 0 15px 5px 5px;
  }
</style>
