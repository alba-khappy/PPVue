<template lang="pug">
.checkbox
  input#checkbox.visually-hidden(
    type="checkbox",
    name="checkbox",
    v-model="checked",
  )
  label(for="checkbox") {{ checkboxLabel }}
</template>

<script>
export default {
  name: "checkbox",
  props: ["checkboxLabel"],
  data() {
    return {
      checked: [],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.checkbox {
    display: inline-block;
    margin-bottom: 10px;
}

.checkbox label {
  position: relative;
  font-size: 16px;
  line-height: 18px;
  color: #a4a9b9;
  background-color: #e4e4e4;
  padding: 0 7px;
  margin-right: 10px;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 18px;
      top: 0px;
    }
}

.checkbox input:checked + label {
  color: $whiteColor;
  background-color: $blueColorText;
}

.checkbox input:checked + label::after {
  left: -42px;
  top: 1px;
}
</style>