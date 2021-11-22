<template lang="pug">
li.university-item
  a(href="").university-link-container
    img.university-logo(:src="require(`../assets/${logo}`)")
    h2.university-name {{ name }}
    .university-links-wrapper
      a.university-link(href="") Страница приемной кампании
      a.university-link(href="") Правила приема
      a.university-link(href="") Число мест
</template>

<script>
export default {
  name: "universityWithLinks",
  props: {
    name: {
      type:String,
      required: true,
    },
    logo: {
      type:String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.university-link-container {
  display: grid;
  grid-template-columns: 65px 1fr auto;
  grid-template-rows: auto 45px;
  column-gap: 30px;
  padding: 40px 0;
}

.university-item {
  &:not(:last-child) {
    border-bottom: 1px solid $grayColor2;
  }
}

.university-logo {
  grid-area: 1/1/3/2;
}

.university-name {
  font-size: 18px;
  font-weight: 600;
  align-self: start;
}

.university-links-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: end;
  font-size: 14px;
  grid-area: 2/2/3/3;
}

.university-link {
  font-size: 18px;
  color: $grayColor3;

  &:hover,
  &:focus {
    color: $blueColor;
  }

  &:not(:last-child) {
    margin-right: 70px;
  }
}

.university-btn {
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
}

.university-btn-like {
  background: url("../assets/like.svg") center no-repeat;
  grid-area: 1/3/2/4;
}

.university-btn-add {
  background: url("../assets/add.svg") center no-repeat;
  grid-area: 2/3/3/4;
}

@media (max-width: 768px) {
  .university-link-container {
    grid-template-rows: auto 105px;
    gap: 20px 30px;
  }
}

</style>