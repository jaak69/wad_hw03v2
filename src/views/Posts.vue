<template>
  <Header />
  <Posts />
  <Footer />
</template>

<script>
import Header from "@/components/header-comp";
import Posts from "@/components/posts-list";
import Footer from "@/components/footer-comp";
export default {
  components: {
    Header,
    Posts,
    Footer,
  }
};
</script>
