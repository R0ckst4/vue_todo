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
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.199);
    transition: 0.2s;
    box-sizing: border-box;
  }
  .message:hover {
    background-color: #ffe;
  }
  .message:focus {
    background-color: #ffe;
    outline: none;
  }
  ::placeholder {
    text-align: center;
    color: black;
    opacity: 1;
  }
</style>
