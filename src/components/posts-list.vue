<template>
  <section class="container postit-page">
    <h1>Posts!</h1> 
    <div v-for="post in posts" :key='post.id'>
      <article class="container-post">
        <div class="container-post-head"> 
            <img src="@/assets/images/user-circle.svg" alt="user icon">
            <p class="date">{{post.date}}</p>
        </div>
        <div class="container-post-image">
            <img :src="post.post_image"  :alt='"post no " + post.id'>
        </div>
        <div class="container-post-comment">
            <p class="my_caption">{{post.caption}}</p>
            <img src="@/assets/images/thumbs-up.jpeg" alt="like">
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "posts-list",
  data: function() {
    return {
    }
  },
  computed: {
    testString(){return this.$store.state.testString},
    posts() {return this.$store.state.posts}
  }
}
</script>

<style scoped>
  .container.postit-page{
    background-color: white;
    padding-top: 60px;
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
