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
            <img src="@/assets/images/thumbs-up.jpeg" alt="like">
        </div>
      </article>
</template>

<script>
export default {
  name: "articlecomp",
  data: function() {
    return {
    }
  }
}
</script>