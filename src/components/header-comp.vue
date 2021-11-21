<template>
  <header id="main-header">
    <img src="../assets/images/Color_Post_it.svg" alt="postit logo" />
    <form class="search-form">
      <input type="text" />
      <input type="submit" value="Search" />
    </form>
    <div class="user-menu">
      <img src="../assets/images/user-circle.svg" alt="user icon" />
      <ul>
        <li>User: Heli Helikopter</li>
        <li>E-mail: spammer@spammer.org</li>
      </ul>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contactus">Contact Us</router-link>
  </div>
 
  </header>
</template>

<style scoped>
#main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 5px 0;
  background-color: white;
  position: fixed;
  width: 100%;
  height: 50px;
}

#main-header img {
  height: 50px;
}

.search-form {
  flex-direction: row;
  width: 35%;
}

.search-form input[type="submit"] {
  width: 100px;
}
</style>