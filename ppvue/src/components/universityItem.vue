<template lang="pug">
li.university-item
  a(href="").university-link
    img.university-logo(:src="require(`../assets/${logo}`)")
    h2.university-name {{ name }}
    p.university-location {{ location }}
    .university-btn--wrapper
      button.university-btn-like.university-btn
        include ../assets/like.svg
      button.university-btn-add.university-btn(v-show="visible")
        include ../assets/add.svg
</template>

<script>
export default {
  name: "university",
  props: {
    name: {
      type:String,
      required: true,
    },
    location: {
      type:String,
      required: true,
    },
    logo: {
      type:String,
      required: true,
    },
    visible: {
      type:String,
      required: true,
    }
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.university-link {
  display: grid;
  grid-template-columns: 65px 1fr auto;
  grid-template-rows: repeat(2, auto);
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
  align-self: center;
}

.university-name {
  font-size: 18px;
  font-weight: 600;
  align-self: end;
}

.university-location {
  font-size: 14px;
  grid-area: 2/2/3/3;
  align-self: end;
}

.university-btn--wrapper {
  display: flex;
  flex-direction: column;
  grid-row: 1/-1;
  align-self: center;
}

.university-btn {
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  transition: 0.3s;
}

.university-btn-like {
  grid-area: 1/3/2/4;

  &:focus {
    svg path {
      fill: #ef4058;
      stroke: #ef4058;
    }
  }
}

.university-btn-add {
  grid-area: 2/3/3/4;

  &:focus {
    svg path {
      fill: $greenColor;
    }
  }
}

@media (max-width: 768px) {
  
  .university-link {
    gap: 10px 30px;
  }
}
</style>