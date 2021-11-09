<template lang="pug">
.options-dropdown(@click="show = !show") {{ dropdownTitle }}
  ul.options-dropdown__list(v-show="show")
    li.options-dropdown__item(v-for="dropdown in dropdownList") {{dropdown}}
</template>

<script>
export default {
  name: "dropdown",
  props: ["dropdownList", "dropdownTitle"],
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.options-dropdown {
  position: relative;
  width: 255px;
  height: 30px;
  padding: 5px 10px;
  border: 1px solid #a6a5a9;
  font-size: 14px;

  &:after {
    content: "";
    background: url('../assets/polygon.svg') center no-repeat;
    width: 10px;
    height: 10px;
    position: absolute;
    right: 13px;
    top: 7px;
    color: $blackColorText;
  }
}

.options-dropdown__list {
  width: 255px;
  position: absolute;
  left: -1px;
  top: 30px;
  background-color: $whiteColor;
  padding: 5px 10px;
  border: 1px solid #a6a5a9;
  z-index: 999;
}

</style>