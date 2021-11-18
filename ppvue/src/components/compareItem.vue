<template lang="pug">
    li.compare__university-item
        img(src="../assets/university1.png")
        button.compare__university-button.compare--button-close
        button.compare__university-button.compare--button-like
        p.compare__university-name Федеральное государственное бюджетное образовательное учреждение высшего образования «Донской государственный технический университет»
</template>

<script>
export default {
  name: "compareItem",
  //props: ["img", "name", "visible"],
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

.compare__university-item {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    width: 255px;
    height: auto;
    padding: 10px;
    border: 1px solid $grayColor2;

    &:hover, &:focus {
        border: 1px solid $blueColor;
    }
}

.compare__university-button {
    grid-area: 1/2/2/3;
    border: none;
    width: 40px;
    height: 40px;
    justify-self: end;
}

.compare__university-name {
   font-size: 12px; 
}

.compare--button-close {
    background: transparent url('../assets/button-close.svg') center no-repeat;
}

.compare--button-like {
    background: transparent url('../assets/like.svg') center no-repeat;
    align-self: end;
    background-size: 50%;
}


</style>