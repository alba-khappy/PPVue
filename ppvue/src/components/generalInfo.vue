<template lang="pug">
li.general-info__item
  h3.general-info__h3(v-show="visible") {{ heading }}
  button.general-info__btn(@click="show = !show")
  .general-info__container
    ul
      slot
    img.general-info__img(v-if='image' :src="require(`../assets/${image}`)")
  .general-info__popup(v-show="show") popup
</template>

<script>
export default {
  name: "info",
  props: ["heading", "visible", "image"],
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.general-info__item {
  width: 100%;
  min-height: 210px;
  position: relative;
  padding: 30px;
  background-color: $whiteColor;
  box-shadow: 0 16px 16px #dde6eb;
}

.general-info__btn {
  position: absolute;
  width: 25px;
  height: 25px;
  right: 10px;
  top: 30px;
  background: url("../assets/inf.svg") no-repeat;
  border: none;
}

.general-info__h3 {
  border-bottom: 1px solid $blueColor;
  padding-bottom: 20px;
  margin-bottom: 35px;
}

.general-info__container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 10px;
}

.general-info__img {
  display: block;
  align-self: end;
  justify-self: end;
}

.general-info__popup {
  position: absolute;
  right: 30px;
  top: 55px;
  max-width: 160px;
  word-break: break-all;
  background: rgba(0, 0, 0, 0.54);
  padding: 9px 15px;
  color: $whiteColor;
  border-radius: 5px;
}
</style>