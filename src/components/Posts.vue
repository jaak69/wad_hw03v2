<template>
  <section class="container postit-page">
    <p>Siin on postitused!</p>
    
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
    testString(){return this.$store.state.testString}
  }
}
</script>
