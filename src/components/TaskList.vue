<template lang="">
  <div>
    <ul>
      <task-item :task="task" v-for="task in tasks"></task-item>
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
  };
</script>
<style scoped></style>
