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
  align-items: center;
}

.container{
  width: 800px;
  padding-top: 112px;
  }

#main-header {
  position: fixed;
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
  width: 100%;
}

.container.postit-page{
    padding-top: 60px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:800px;
}

.container.post{
    background-color:white;
    width: 70%;
    display: flex;
    box-sizing: border-box;
    border-radius: 10px;
    min-width: 100px;
    height: auto;
    margin: 1% auto;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
    }

.container.post:hover{
    background-color:beige;
    }


.container-post{
    background-color:white;
    width: 70%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border-radius: 10px;
    min-width: 100px;
    height: auto;
    margin: 1% auto;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
    }

.container-post:hover{
    background-color:beige;
    }

.container-post-head{
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    width: 95%;
    padding: 1em;
    list-style-type: none;
    justify-content:space-between;
    align-items: center;
}

.container-post-head img{
    width: 25px;
}

.container-post-image{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.container-post-image img{
    width: 100%;
}

.container-post-comment{
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
}

.container-post-comment img{
    width: 5%;
}

#my_paragraph {
    font-weight: bold;
    }

.my_caption {
    font-weight:normal;
    font-size: 16px;
    }

.date{
    font-weight:normal;
    font-size: 12px;
    text-align: right;
    }

div + p{
    color: coral;
  }

.other~p{
    color: blue;
}

span {
    background-color:white;
}

div > span {
    background-color:yellow;
}
</style>
