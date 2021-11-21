<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contactus">Contact Us</router-link>
  </div>
  <router-view />
  <Header />
  <Posts />
  <Footer />
</template>

<script>
import Header from "./components/header-comp";
import Footer from "./components/footer-comp";
import Posts from "./components/Posts";
export default {
  components: {
    Header,
    Footer,
    Posts,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
