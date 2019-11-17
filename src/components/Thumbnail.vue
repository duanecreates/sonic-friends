<template>
  <div class="thumbnail-wrapper">
    <div class="thumbnail">
      <img :src="src"/>
      <div class="name">
        {{name}}
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Thumbnail",
        props: {
            name: {
                type: String,
                required: true,
            },
            src: {
                type: String,
                required: true,
            },
            credits: {
                Type: String,
                required: false,
                default: null
            },
        }
    }
</script>

<style lang="scss" scoped>
  .thumbnail-wrapper {
    @apply px-6 py-10;

    .thumbnail {
      @apply rounded-xl border-3 border-yellow flex flex-col items-center relative h-56 bg-yellow;
      transition: all .2s;

      img {
        @apply object-cover rounded-xl h-full w-full;
        filter: grayscale(35%) hue-rotate(45deg);
        transition: all .1s;
      }

      .name {
        @apply bg-yellow text-blue-dark text-14 -mb-4 absolute rounded-full py-2 px-12;
        bottom: -3px;
        transition: all .3s;
      }

      &:hover {
        @apply border-blue-dark bg-blue-dark shadow-xl;

        img {
          filter: unset;
        }

        .name {
          @apply bg-blue-dark text-yellow shadow-xl;
        }
      }
    }
  }
</style>
