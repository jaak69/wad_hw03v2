<template>
  <Header />
  <Posts />
  <Footer />
</template>

<script>
import Header from "@/components/header-comp";
import Posts from "@/components/Posts";
import Footer from "@/components/footer-comp";
export default {
  components: {
    Header,
    Posts,
    Footer,
  }
};
</script>
