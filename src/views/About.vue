<template>
<Header />
 <div class="about">
    <h1>This is an about page</h1>
  </div>
<Footer /> 
</template>

<script>
import Header from "@/components/header-comp";
import Footer from "@/components/footer-comp";
export default {
  components: {
    Header,
    Footer,
  }
};
</script>


<style lang="scss" scoped>

  .about{
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:800px;
}

</style>

