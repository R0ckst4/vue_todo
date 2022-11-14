<template>
  <input
    :value="modelValue"
    @input="updateCheckbox"
    class="checkbox"
    type="checkbox"
  />
</template>
<script>
  export default {
    name: "my-checkbox",
    methods: {
      updateCheckbox(event) {
        this.$emit("update:modelValue", event.target.value);
      },
    },
  };
</script>
<style>
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label::before {
    content: "";
    background: #ca3305;
    border-radius: 5px;
    border: 2px solid #ddd;
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    padding: 2px;
    margin-right: 10px;
    text-align: center;
    transition: 0.1s ease;
  }

  input[type="checkbox"]:checked + label::before {
    content: "";
    display: inline-block;
    width: 2px;
    height: 8px;
    border: 2px solid #ddd;
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
    border-radius: 0px;
    margin: 0 15px 5px 5px;
    transition: 0.1s ease;
  }
</style>
