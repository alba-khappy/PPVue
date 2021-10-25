<template lang="pug">
        ul.admission--grid
            li.admission--item(v-for='admission in admissions')
                div.admission__grid-img.admission__grid-img-1.admission__grid--border(:style="{ backgroundImage: 'url(' + admission.src + ')' }")
                div.admission__p-wrapper
                    p.admission__grid-p--blue {{admission.index}}
                    p.admission__grid-p {{admission.text}}
                    //- img(:src="require(`../assets/${news.newsImg}`)")

</template>

<script>
export default {

    props: {
        admissions: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data: function () {
        return {

        }
    }
  };
</script>

<style lang="scss">
@import "../assets/scss/general.scss";

</style>
