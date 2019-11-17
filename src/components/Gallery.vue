<template>
  <main>
    <div class="placeholders" v-if="is_loading && !friends.length">
      <content-loader v-for="x in 4" :height="400" :width="400" :speed="1" primaryColor="#EAC43D"
                      secondaryColor="#D6B239"
      >
        <rect x="-3.11" y="0.47" rx="0" ry="0" width="407.04" height="245.23"/>
        <rect x="76.69" y="270.67" rx="0" ry="0" width="250" height="37"/>
      </content-loader>
    </div>

    <div class="thumbnails" v-infinite-scroll="() => retrieveFriends(loaded_page+1)"
         infinite-scroll-disabled="is_loading" infinite-scroll-distance="10">
      <Thumbnail class="thumbnail" v-for="friend in friends" :key="friend.name" :name="friend.name"
                 :src="friend.src"
                 :credits="friend.credits"/>
    </div>
    <p v-if="is_loading" class="loading">Loading ...</p>
    <p v-if="exhausted" class="exhausted">That's all the friends</p>
  </main>
</template>

<script>
    import infiniteScroll from 'vue-infinite-scroll';
    import {ContentLoader} from 'vue-content-loader';
    import Thumbnail from "@/components/Thumbnail";

    export default {
        name: "Gallery",
        components: {ContentLoader, Thumbnail},
        directives: {infiniteScroll},
        data() {
            return {
                friends: [],
                is_loading: false,
                loaded_page: 0,
                exhausted: false, // meaning there is no more data to retrieve
            }
        },
        methods: {
            retrieveFriends(page = 1) {
                if (this.exhausted)
                    return;

                this.is_loading = true;

                this.$http
                    .get('gallery', {
                        params: {
                            _page: page,
                            _limit: 6,
                        }
                    })
                    .then(res => {
                        if (res.data.length) {
                            this.friends.push(...res.data);

                            this.loaded_page = page;
                        } else this.exhausted = true;

                        this.is_loading = false;
                    })
                    .catch(err => {
                        this.is_loading = false;
                    });
            }
        },

        mounted() {
            this.retrieveFriends(1);
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

    .loading, .exhausted {
      @apply text-yellow text-30 mt-24;
    }

    .placeholders {
      @apply flex flex-row flex-wrap -mx-6 mt-4;

      svg {
        @apply w-full px-6;

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
