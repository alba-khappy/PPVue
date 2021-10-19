<template lang="pug">
    #app
      Header
      router-view
      Footer
      
</template>

<script>
import Header from '@/components/header.vue';
// import About from '@/components/about.vue';
import Footer from '@/components/footer.vue';


export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    Header,
    // About,
    Footer
  },
};
</script>
<style>

@charset "UTF-8";