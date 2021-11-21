<template>
  <section class="container postit-page">
    <h1>Posts!</h1> 
    <div v-for="post in posts" :key='post.id'>
        <articlecomp :post=post />
    </div>
  </section>
</template>

<script>
import articlecomp from "@/components/articlecomp.vue";

export default {
  name: "posts-list",
  components: {articlecomp},
  data: function() {
    return {
    }
  },
  computed: {
    posts() {return this.$store.state.posts}
  },
}
</script>

