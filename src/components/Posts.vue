<template>
  <section class="container postit-page">
    <p>Siin on postitused!</p>
 
    <div v-for="post in posts" :key='post.id'>
      {{post}}
    </div>
  </section>
</template>

<script>
export default {
  name: "posts",
  data: function() {
    return {
    }
  },
  computed: {
    testString(){return this.$store.state.testString},
    posts() {return this.$store.state.posts}
  }
}
</script>
