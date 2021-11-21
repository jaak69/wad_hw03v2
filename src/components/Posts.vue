<template>
  <section class="container postit-page">
    <p>Siin on postitused!</p>
    <p>Selle lisasin vuex abil: {{posts}}</p>
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
