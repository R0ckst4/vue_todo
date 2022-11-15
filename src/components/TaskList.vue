<template>
  <div>
    <ul>
      <div v-show="tasks.length > 0" class="sort_container">
        <h3>Sort</h3>
        <sort-btn @click="showUsualPlans" style="margin-top: -30px"
          >Usual</sort-btn
        >
        <sort-btn @click="showWorkPlans" style="margin-top: -30px"
          >Work</sort-btn
        >
        <sort-btn @click="showAllPlans" style="margin-top: -30px">All</sort-btn>
      </div>
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
    computed: {},
  };
</script>
<style scoped>
  .sort_container {
    margin-top: 10px;
    padding: 8px;
  }

  h3 {
    margin: 0;
    padding: 0;
    display: flex;
    text-align: left;
  }
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
