<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Posts msg="This is our homework #3" />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from "@/components/Posts.vue";

export default {
  name: "Home",
  components: {
    Posts,
  },
};
</script>
