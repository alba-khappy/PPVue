<template lang="pug">
    .checkbox.checkbox-with-label
        input#checkbox.visually-hidden(type="checkbox", name="checkbox", v-model="checked")
        label(for="checkbox", v-for="checkbox in checkboxLabel") {{checkbox}}
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

.checkbox label {
  position: relative;
  font-size: 16px;
  line-height: 18px;
  color: #A4A9B9;
  background-color: #E4E4E4;
  padding: 0 10px;
  margin-right: 10px;
}

.checkbox label::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 18px;
}

.checkbox-with-label label::before {
  top: 0px;
}

.checkbox input:checked + label {
  color: $whiteColor;
  background-color: $blueColorText;
}

.checkbox-with-label input:checked + label::after {
  left: -42px;
  top: 1px;
}

</style>