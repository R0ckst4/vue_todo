<template>
  <div class="app">
    <div class="container">
      <div class="mainBlock">
        <h1>Ur Plans</h1>
        <form @submit.prevent class="createToDo">
          <input
            :value="describtion"
            @input="describtion = $event.target.value"
            class="message"
            type="text"
            placeholder="What are u gonna do?"
          />
          <button class="my-button" @click="createTask">Plan It</button>
        </form>
        <div class="wrapper">
          <ul class="task" v-for="task in tasks">
            <li>
              {{ task.describtion }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tasks: [],
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

  .task {
    padding-left: 0;
  }

  .task li {
    padding: 1em;
    list-style-type: none;
  }
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
