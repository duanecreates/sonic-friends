<template>
  <footer>
    <a href="https://instagram.com/duanecreates" target="_blank">
      @duanecreates
    </a>
  </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
  footer {
    @apply flex flex-row justify-end bg-blue-dark pt-12 pb-10 px-6;

    @screen sm {
      @apply px-16;
    }

    a {
      @apply text-yellow no-underline font-bold text-30;

      &:hover {
        @apply text-white;
      }
    }
  }
</style>
