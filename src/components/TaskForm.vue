<template lang="">
  <form @submit.prevent class="createToDo">
    <h1>Ur Plans</h1>
    <div class="input_with_button">
      <div class="dropdown_btn">
        <sort-btn @click="getTasksFromBot">last messages from tg </sort-btn>
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
          coef: 1,
        },
      };
    },
    methods: {
      createTask() {
        if (this.task.describtion && this.task.describtion.trim()) {
          this.task.id = this.task.coef
            ? this.task.coef + Date.now()
            : Date.now();
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
        const CHAT_ID = "374779952";
        try {
          const response = await axios.get(URI_API);
          for (let i = 1; i < 4; i++) {
            let lastMessage =
              response.data.result[response.data.result.length - i].message;
            if (
              lastMessage.chat.id === +CHAT_ID &&
              lastMessage.text[0] !== "/"
            ) {
              this.task = {
                describtion: lastMessage.text,
                isBotTask: true,
                coef: i,
              };
              this.createTask();
            } else console.log(response);
          }
        } catch (e) {
          console.log("ERROR");
          console.log(URI_API);
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
  .input_with_button {
    margin-top: -45px;
    box-sizing: border-box;
    transition: 1s;
  }
  .input_with_button:hover .dropdown_btn {
    opacity: 1;
    transition: 0.2s;
  }

  .dropdown_btn {
    padding: 12px 16px;
    opacity: 0;
    transition: 1s;
  }
</style>
