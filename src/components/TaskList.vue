<template>
  <div>
    <ul>
      <task-item
        :task="task"
        :key="task.id"
        @crossOut="crossOutTask"
        v-for="task in tasks"
      ></task-item>
    </ul>
  </div>
</template>
<script>
  import TaskItem from "@/components/TaskItem.vue";
  export default {
    components: {
      TaskItem,
    },
    props: {
      tasks: {
        type: Array,
        required: true,
      },
    },
    methods: {
      crossOutTask(task) {
        task["cheked"] = !task["cheked"];
        console.log(task);
      },
    },
  };
</script>
<style scoped></style>
