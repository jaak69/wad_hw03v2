<template>
  <footer class="container">
    <p>
      Web Application Development (LTAT.05.004) - Homework 3
    </p>
    <div id="nav" v-if="$route.name != 'ContactUs'">
      <router-link to="/contactus">Contact Us</router-link>
  </div>
  </footer>
</template>
