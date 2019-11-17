<template>
  <header>
    <div class="logo">
      <h1>Sonic Friends</h1>
    </div>
    <div class="avatar">
      <img src="@/assets/logo.png"/>
    </div>
  </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
  header {
    @apply flex flex-row justify-center bg-yellow p-6 pb-32 relative shadow-header;

    @screen sm {
      @apply justify-start p-12;
    }

    .logo {
      @apply bg-blue-dark rounded-full px-4 py-1 text-24;

      @screen sm {
        @apply px-8 py-3 text-40;
      }

      h1 {
        @apply text-yellow;
      }
    }

    .avatar {
      @apply rounded-full shadow-header p-6 absolute bg-yellow mx-auto w-40 h-40 flex flex-row justify-center items-center;
      bottom: -80px;
      left: 0;
      right: 0;

      @screen sm {
        left: unset;
        bottom: -80px;
        right: 60px;
      }

      @screen md {
        right: 120px;
      }

      @screen lg {
        bottom: -80px;
        left: 0;
        right: 0;
      }

      img {
        @apply w-full h-full object-contain;
      }
    }
  }
</style>
