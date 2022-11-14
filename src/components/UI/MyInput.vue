<template>
  <input :value="modelValue" @input="updateInput" class="message" type="text" />
</template>
<script>
  export default {
    name: "my-input",
    props: {
      modelValue: [String, Number],
    },
    methods: {
      updateInput(event) {
        this.$emit("update:modelValue", event.target.value);
      },
    },
  };
</script>
<style scoped>
  .message {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 380px;
    padding: 10px;
    border: none;
    background-color: rgba(255, 255, 255, 0.89);
    transition: 0.2s;
  }
  .message:hover {
    background-color: #ffe;
  }
  .message:focus {
    background-color: #ffe;
    outline: none;
  }
</style>
