<template>
  <div :class="{ btn: noActivated }">
    <button @click="noActivated = true" class="my-button"><slot></slot></button>
  </div>
</template>
<script>
  export default {
    name: "my-button",
    data() {
      return {
        noActivated: false,
      };
    },
  };
</script>
<style scoped>
  .my-button {
    display: flex;
    background-color: rgba(255, 255, 255, 0.89);
    flex-wrap: wrap;
    border: 0;
    justify-content: space-around;
    margin-top: 10px;
    width: 400px;
    padding: 10px;
    cursor: pointer;
    transition: 0.2s ease;
  }
  .my-button:hover {
    background-color: #ffe;
  }
</style>
