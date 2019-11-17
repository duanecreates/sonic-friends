<template>
  <main>
    <p v-if="is_loading">Loading ...</p>
    <div v-for="friend in friends">
      <p>{{friend.name}}</p>
      <img :src="friend.src" :alt="friend.name" :title="friend.credits"/>
    </div>
  </main>
</template>

<script>
    export default {
        name: "Gallery",
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
                        console.log(res.data);
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
  img {
    height: 100px;
  }
</style>
