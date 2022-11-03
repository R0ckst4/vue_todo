<template>
  <div class="app">
    <div class="container">
      <div class="mainBlock">
        <task-form></task-form>
        <div class="wrapper">
          <task-list :tasks="tasks"></task-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import TaskForm from "@/components/TaskForm.vue";
  import TaskList from "@/components/TaskList.vue";
  export default {
    components: {
      TaskForm,
      TaskList,
    },
    data() {
      return {
        tasks: [{ id: 1, describtion: 1 }],
        describtion: "",
      };
    },
    methods: {
      createTask() {
        const newTask = {
          id: Date.now(),
          describtion: this.describtion,
        };
        this.tasks.push(newTask);
        this.describtion = "";
      },
    },
  };
</script>
<style>
  /* * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .task {
    padding: 5px;
  } */
  body {
    background-color: #ffe;
    font-family: "Roboto Mono", monospace, sans-serif;
    box-sizing: content-box;
  }

  .countainer {
    margin: 0;
    padding-top: 50px;
  }

  .mainBlock {
    max-width: 400px;
    display: block;
    margin: 0 auto 40px;
    background-color: #ffaa00;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px 0 #000;
  }
</style>
