<template>
<Header />
  <div class="container contactus">
    <h1>The page is created by:</h1>
    <table class="center">
      <tr>
        <th>Name</th>
        <th>e-mail</th>
        <th>Phone</th>
      </tr>
      <tr>
        <td>Jaak Ivask</td>
        <td>jaak.ivask@ut.ee</td>
        <td>+372 521 4610</td>
      </tr>
      <tr>
        <td>Mario Käära</td>
        <td>mario.kaara@ut.ee</td>
        <td>+372 5669 6517</td>
      </tr>
      <tr>
        <td>Peeter Niidas</td>
        <td>peeter.niidas@ut.ee</td>
        <td>+372 511 1171</td>
      </tr>
    </table>
    <div class="empty"></div>
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
  },
};
</script>


<style lang="scss" scoped>

th,
td {
  padding: 10px;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

  .contactus{
    background-color: white;
    width:800px;
     flex-grow: 1;
}

</style>

