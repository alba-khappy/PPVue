<template lang="pug">
li.compare__university-item
  img(:src="require(`../assets/${logo}`)")
  .compare__button-wrapper
    button.compare__university-button.compare--button-close
      include ../assets/button-close.svg
    button.compare__university-button.compare--button-like(v-show="visible")
      include ../assets/like.svg
  p.compare__university-name {{ name }}
</template>

<script>
export default {
  name: "compareItem",
  props: ["logo", "name", "visible"],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.compare__university-item {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  min-width: 255px;
  width: 255px;
  height: auto;
  min-height: 160px;
  padding: 10px;
  border: 1px solid $grayColor2;

  &:hover,
  &:focus {
    border: 1px solid $blueColor;
  }
}

.compare__button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.compare__university-button {
  grid-area: 1/2/2/3;
  border: none;
  width: 30px;
  height: 30px;
  justify-self: end;
}

.compare__university-name {
  grid-area: 2/1/3/3;
  font-size: 12px;
}

.compare--button-close {
  background: transparent center no-repeat;
}

.compare--button-like {
  background: transparent center no-repeat;
  align-self: end;

  svg {
    height: 16px;
  }
}
</style>