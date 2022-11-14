<template>
  <div class="sort_container">
    <h3>Sort</h3>
    <button @click="showWorkTasks" class="btn__sort">Work</button>
    <button @click="showUsualTasks" class="btn__sort">Usual</button>
  </div>
</template>
<script>
  export default {
    name: "my-sort",
  };
</script>
<style scoped>
  .sort_container {
    padding: 8px;
  }

  h3 {
    margin: 0;
    padding: 0;
    display: flex;
    text-align: left;
  }
  .btn__sort {
    background-color: rgba(255, 255, 255, 0.199);
    width: auto;
    margin: 5px;
    margin-top: -32px;
    padding: 10px;
    float: right;
    display: flex;
    flex-wrap: wrap;
    border: 0;
    justify-content: space-around;
    cursor: pointer;
    transition: 0.2s ease;
  }
  .btn__sort:hover {
    background-color: #ffe;
  }
</style>
