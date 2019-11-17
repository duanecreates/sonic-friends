<template>
  <div id="app">
    <Gallery/>
  </div>
</template>

<script>
    import Gallery from "@/components/Gallery";

    export default {
        name: 'app',
        components: {Gallery},
    };
</script>

<style lang="scss">
  @import "css/tailwind.css";
</style>
