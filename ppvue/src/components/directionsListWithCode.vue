<template lang="pug">
li.direction__item
  p.direction__code {{ code }}
  p.direction__name {{ direction }}
</template>

<script>
export default {
  name: "directionsWithCode",
  props: ["code", "direction"],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.direction__item {
  display: flex;
  padding: 40px 0;

  &:not(:last-child) {
    border-bottom: 1px solid $grayColor2;
  }
}

.direction__code {
  grid-area: 1/1/3/2;
  align-self: center;
  width: 100px;
  font-weight: 600;
}

.direction__name {
  grid-area: 1/2/3/3;
  align-self: center;
}
</style>