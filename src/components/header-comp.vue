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

<style lang="scss" scoped>
#main-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 5px 0;
  background-color: white;
  width: 100%;
  /*height: 50px;*/
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

form{
    display: flex;
}

form input[type="text"], form input[type="password"], form input[type="submit"]{
    padding:10px 0 10px 0;
    width: 90%;
}

form input[type="text"]:hover, form input[type="password"]:hover{
    border: 2px solid #1c63a7;
}

input[type="submit"]{
    background-color: #1c63a7;
    color:white;
}

input::placeholder{
    padding-left: 5px;
}

#nav {
  text-align: center;
  padding: 15px;
  flex-basis: 100%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>