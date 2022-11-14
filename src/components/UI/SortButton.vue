<template>
  <button class="btn__sort"><slot></slot></button>
</template>
<script>
  export default {
    name: "sort-btn",
  };
</script>
<style scoped>
  .btn__sort {
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
  .btn__sort:hover {
    background-color: #ffe;
  }
</style>
