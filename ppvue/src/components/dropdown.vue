<template lang="pug">
.options-dropdown(@click="show = !show") {{ dropdownTitle }}
  ul.options-dropdown__list(v-show="show")
    li.options-dropdown__item(v-for="dropdown in dropdownList") {{ dropdown }}
</template>

<script>
export default {
  name: "dropdown",
  props: {
    dropdownList: {
      type:Array,
      required: true,
    },
    dropdownTitle: {
      type:String,
      required: true,
    },
  },
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
  display: flex;
  align-items: center;
  width: 255px;
  height: 30px;
  padding: 5px 10px;
  border: 1px solid $grayColor3;
  font-size: 14px;

  &:after {
    content: "";
    background: url("../assets/polygon.svg") center no-repeat;
    width: 10px;
    height: 10px;
    position: absolute;
    right: 13px;
    top: 10px;
    color: $blackColorText;
  }
}

.options-dropdown__list {
  width: 255px;
  position: absolute;
  left: -1px;
  top: 30px;
  background-color: $whiteColor;
  padding: 5px 10px 0;
  border: 1px solid $grayColor3;
  z-index: 999;
}

.options-dropdown__item {
  margin-bottom: 5px;
}
</style>