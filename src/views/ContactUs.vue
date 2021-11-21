<template>
<Header />
  <div class="contactus">
    <h1>The page is created by:</h1>
    <table class="center">
      <tr>
        <th>Name</th>
        <th>e-mail</th>
        <th>Phone</th>
      </tr>
      <tr>
        <td>Jaak Ivask</td>
        <td>jaak@somewhere.com</td>
        <td>+1 234 567 891</td>
      </tr>
      <tr>
        <td>Mario Käära</td>
        <td>mario@somewhere.com</td>
        <td>+1 234 567 892</td>
      </tr>
      <tr>
        <td>Peeter Niidas</td>
        <td>peeter@somewhere.com</td>
        <td>+1 234 567 893</td>
      </tr>
    </table>
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

</style>
