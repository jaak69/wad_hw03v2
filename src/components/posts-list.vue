<template>
  <section class="container postit-page">
    <h1>Posts!</h1> 
    <button id="resetButton" v-on:click="resetCounters()">Reset like counters</button>
    <div v-for="post in posts" :key='post.id'>
        <articlecomp :post="post" :ref="'article' + post.id"></articlecomp>
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
  methods: {
    resetCounters() {
      this.$store.commit("resetCounters")
    }
  }
}
</script>

