<template lang="">
  <div>
    <ul class="task" v-for="task in tasks">
      <li>
        {{ task.describtion }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      tasks: {
        type: Array,
        required: true,
      },
    },
  };
</script>
<style scoped>
  .task {
    padding-left: 0;
  }

  .task li {
    padding: 1em;
    list-style-type: none;
  }
</style>
