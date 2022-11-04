<template>
  <li class="task">
    <input type="checkbox" id="task.id" />
    <label for="task.id"> {{ task.describtion }}</label>
  </li>
</template>
<script>
  export default {
    props: {
      task: {
        type: Object,
        required: true,
      },
    },
  };
</script>
<style scoped>
  .task {
    padding: 1em;
    list-style-type: none;
  }
  input[type="checkbox"] + label::before {
    color: brown;
  }
</style>
