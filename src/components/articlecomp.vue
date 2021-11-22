<template>
    <article class="container-post">
        <div class="container-post-head"> 
            <img src="@/assets/images/user-circle.svg" alt="user icon">
            <p v-if="post.date" class="date">{{post.date.replace('T', " ").slice(0, -8)}}</p>
            <p v-else class="date">No datetime available</p>
        </div>
        <div v-if="post.post_image" class="container-post-image">
            <img :src="post.post_image"  :alt='"post no " + post.id'>
        </div>
        <div v-else></div>
        <div class="container-post-comment">
            <p class="my_caption">{{post.caption}}</p>
            <div class="counter">
              <img src="@/assets/images/thumbs-up.jpeg"  v-on:click="this.$store.commit('incrementLikes', post.id)" alt="like">
              <span >{{ counter }}</span>
            </div>
        </div>
      </article>
</template>

<script>
export default {
  name: "articlecomp",
  props: {
    post:Object
  },
  computed: {
    counter: function() {
      return this.$store.getters.countLikes(this.$props.post.id)
    }
  }
}
</script>

<style scoped>

  .counter{
    display: flex;
    justify-content: flex-start;
  }
  
  span {
    width: inherit;
    background-color: white;
    padding-left: 15px
  }
</style>