<template>
  <button class="my-button"><slot></slot></button>
</template>
<script>
  export default {
    name: "my-button",
  };
</script>
<style scoped>
  .my-button {
    display: flex;
    background-color: white;
    flex-wrap: wrap;
    border: 0;
    justify-content: space-around;
    margin-top: 10px;
    width: 400px;
    padding: 10px;
    cursor: pointer;
  }
</style>
