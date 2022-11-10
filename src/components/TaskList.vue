<template>
  <div>
    <ul>
      <task-item
        :task="task"
        :key="task.id"
        @remove="$emit('remove', task)"
        @crossOut="$emit('crossOut', task)"
        v-for="task in tasks"
      ></task-item>
    </ul>
  </div>
  <div class="noTasks" v-show="tasks.length < 1">
    &#8595; ur plans will be down here &#8595;
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
    methods: {},
  };
</script>
<style scoped>
  .noTasks {
    margin-top: 10px;
    padding: 25px;
    text-align: center;
  }
</style>
