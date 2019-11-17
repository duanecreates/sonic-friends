<template>
  <div id="app">
    <Header/>
    <Gallery/>
    <Footer/>
  </div>
</template>

<script>
    import Header from "@/components/Header";
    import Gallery from "@/components/Gallery";
    import Footer from "@/components/Footer";

    export default {
        name: 'app',
        components: {Footer, Header, Gallery},
    };
</script>

<style lang="scss">
  @import "css/tailwind.css";
  @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

  body {
    @apply font-nunito max-w-big-screen mx-auto bg-blue-dark;

    #app {
      @apply flex flex-col min-h-screen;
    }
  }
</style>
