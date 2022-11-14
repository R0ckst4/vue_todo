<template>
  <div>
    <ul>
      <my-sort v-show="tasks.length > 0"></my-sort>
      <transition-group name="task-list">
        <task-item
          :task="task"
          :key="task.id"
          @remove="$emit('remove', task)"
          @crossOut="$emit('crossOut', task)"
          v-for="task in tasks"
        ></task-item>
      </transition-group>
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
    padding: 25px;
    text-align: center;
  }
  .task-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .task-list-enter-active,
  .task-list-leave-active {
    transition: all 0.2s ease;
  }
  .task-list-enter-from,
  .task-list-leave-to {
    opacity: 0;
    transform: translateX(150px);
  }
  .task-list-move {
    transition: transform 0.2s ease;
  }
</style>
