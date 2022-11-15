<template>
  <div class="app">
    <transition-group name="container">
      <div class="container">
        <div class="mainBlock">
          <task-form @create="createTask"></task-form>
          <div class="wrapper">
            <div v-show="tasks.length > 0" class="sort_container">
              <h3>Sort</h3>
              <sort-btn @click="sortOption = 'usual'" style="margin-top: -30px"
                >Usual</sort-btn
              >
              <sort-btn @click="sortOption = 'work'" style="margin-top: -30px"
                >Work</sort-btn
              >
              <sort-btn @click="sortOption = 'all'" style="margin-top: -30px"
                >All</sort-btn
              >
            </div>
            <task-list
              :tasks="sortedTasks"
              @crossOut="crossOutTask"
              @remove="removeItem"
            ></task-list>
          </div>
        </div>
      </div>
    </transition-group>
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
        tasks: [],
        sortOption: "",
      };
    },
    methods: {
      saveTasks() {
        const parsed = JSON.stringify(this.tasks);
        localStorage.setItem("tasks", parsed);
      },
      createTask(task) {
        if (task.important) {
          this.tasks.unshift(task);
        } else {
          this.tasks.push(task);
        }

        this.saveTasks();
      },
      removeItem(task) {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
        this.saveTasks();
      },
      crossOutTask(task) {
        task["done"] = !task["done"];
        this.saveTasks();
      },
    },
    mounted() {
      if (localStorage.getItem("tasks")) {
        try {
          this.tasks = JSON.parse(localStorage.getItem("tasks"));
        } catch (e) {
          localStorage.removeItem("tasks");
        }
      }
    },
    computed: {
      sortedTasks() {
        if (this.sortOption === "work") {
          return [...this.tasks].filter((task) => task.isWork === true);
        } else if (this.sortOption === "usual") {
          return [...this.tasks].filter((task) => task.isWork === undefined);
        } else {
          return this.tasks;
        }
      },
    },
    watch: {},
  };
</script>
<style>
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
  .sort_container {
    margin-top: 10px;
    padding: 10px;
  }

  h3 {
    margin: 0;
    padding: 0;
    display: flex;
    text-align: left;
  }
</style>
