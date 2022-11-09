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
    width: 376px;
    padding: 10px;
  }
</style>
