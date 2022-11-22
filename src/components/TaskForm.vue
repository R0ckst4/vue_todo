<template lang="">
  <form @submit.prevent class="createToDo">
    <h1>Ur Plans</h1>
    <div class="input_with_button">
      <div class="dropdown_btn">
        <button class="tg_bot_btn" @click="getTasksFromBot">
          Last msg from tg
        </button>
      </div>
      <my-input
        v-model="task.describtion"
        type="text"
        placeholder="What are u gonna do?"
      />
    </div>

    <my-button @click="createTask">Plan It</my-button>

    <div class="checkboxes">
      <my-checkbox id="imp_checkbox_inp" v-model="task.important">
      </my-checkbox>
      <label for="imp_checkbox_inp" style="margin-right: 10px; cursor: pointer"
        >important plan</label
      >
      <my-checkbox id="work_checkbox_inp" v-model="task.isWork"> </my-checkbox>
      <label for="work_checkbox_inp" style="cursor: pointer">work plan</label>
    </div>
  </form>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        task: {
          describtion: "",
          important: false,
          isWork: false,
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
      async getTasksFromBot() {
        const TOKEN = "5891757124:AAHWnZwy94vR7_2xUpx8r9OgMoFhXPAPTXM";
        const URI_API = `https://api.telegram.org/bot${TOKEN}/getUpdates`;
        try {
          const response = await axios.get(URI_API);
          let lastMessage =
            response.data.result[response.data.result.length - 1].message;
          this.task.describtion = lastMessage.text;
        } catch (e) {
          console.log("ERROR");
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

  .tg_bot_btn {
    background-color: rgba(255, 255, 255, 0.199);
    width: auto;
    margin: 5px;
    padding: 10px;
    float: right;
    display: flex;
    flex-wrap: wrap;
    border: 0;
    border-radius: 10px;
    justify-content: space-around;
    cursor: pointer;
    transition: 0.2s ease;
  }
  .dropdown_btn {
    display: none;
    position: absolute;
    right: 70px;
    top: 79px;
    background-color: #ffaa00c9;
    border-radius: 10px;
  }
  .dropdown_btn button:hover {
    float: right;
    background-color: #ffe;
  }
  .input_with_button:hover .dropdown_btn {
    display: block;
  }
</style>
