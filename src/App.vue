<template>
   <router-view />
</template>

<style lang="scss">
html, body, #app {
    height: 100%;
}
body {
    background-color:#1778bd;
    margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

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

footer {
  background-color: white;
  width: 100%
}
</style>
