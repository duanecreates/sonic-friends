<template>
  <main>
    <p v-if="is_loading" class="loading">Loading ...</p>

    <div class="thumbnails">
      <Thumbnail class="thumbnail" v-for="friend in friends" :key="friend.name" :name="friend.name"
                 :src="friend.src"
                 :credits="friend.credits"/>
    </div>
  </main>
</template>

<script>
    import Thumbnail from "@/components/Thumbnail";

    export default {
        name: "Gallery",
        components: {Thumbnail},
        data() {
            return {
                friends: [],
                is_loading: false,
            }
        },
        methods: {
            retrieveFriends() {
                this.is_loading = true;

                this.$http
                    .get('gallery')
                    .then(res => {
                        this.friends = res.data;
                        this.is_loading = false;
                    })
                    .catch(err => {
                        this.is_loading = false;
                    });
            }
        },

        mounted() {
            this.retrieveFriends();
        }
    }
</script>

<style lang="scss" scoped>
  main {
    @apply flex-1 bg-blue-dark bg-gradient-t-blue p-12 pt-32;

    @screen md {
      @apply pt-32 px-24 pb-24;
    }

    @screen lg {
      @apply p-32;
    }

    .loading {
      @apply text-yellow text-30;
    }

    .thumbnails {
      @apply flex flex-row flex-wrap -m-6;

      .thumbnail {
        @apply w-full;

        @screen sm {
          @apply w-1/2;
        }

        @screen lg {
          @apply w-1/3;
        }

        @screen xl {
          @apply w-1/4;
        }
      }
    }
  }
</style>
