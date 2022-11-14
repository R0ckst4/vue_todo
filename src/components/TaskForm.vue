<template lang="">
  <form @submit.prevent class="createToDo">
    <h1>Ur Plans</h1>
    <my-input
      v-model="task.describtion"
      type="text"
      placeholder="What are u gonna do?"
    />
    <my-button @click="createTask">Plan It</my-button>
    <div class="checkboxes">
      <my-checkbox id="imp_checkbox_inp" v-model="task.important" value="true">
      </my-checkbox>
      <label style="margin-right: 10px" for="imp_checkbox_inp"
        >important plan</label
      >
      <my-checkbox id="work_checkbox_inp" v-model="task.usual" value="false">
      </my-checkbox>
      <label for="work_checkbox_inp">work plan</label>
    </div>
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
        if (this.task.describtion && this.task.describtion.trim()) {
          this.task.id = Date.now();
          this.task.done = false;

          this.$emit("create", this.task);
          this.task = {
            describtion: "",
          };
          imp_checkbox_inp.checked = false;
          work_checkbox_inp.checked = false;
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
  .checkboxes {
    margin: 5px;
    text-align: center;
  }
</style>
