<template>
  <header id="main-header">
    <img src="../assets/images/Color_Post_it.svg" alt="postit logo" />
    <form class="search-form">
      <input type="text" />
      <input type="submit" value="Search" />
    </form>
    <div class="user-menu">
      <img src="../assets/images/user-circle.svg" alt="user icon" />
    </div>
    <div id="nav">
      <router-link to="/">Posts</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contactus">Contact Us</router-link>
  </div>
 
  </header>
</template>

