<template>
  <div>
    <button class="my-button"><slot></slot></button>
  </div>
</template>
<script>
  export default {
    name: "my-button",
  };
</script>
<style scoped>
  .my-button {
    display: flex;
    background-color: rgba(255, 255, 255, 0.199);
    flex-wrap: wrap;
    border: 0;
    justify-content: space-around;
    margin-top: 10px;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.2s ease;
    box-sizing: border-box;
  }
  .my-button:hover {
    background-color: #ffe;
  }
</style>
