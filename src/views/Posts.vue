<template>
  <Header />
  <Posts />
  <Footer />
</template>

<script>
import Header from "@/components/header-comp";
import Posts from "@/components/posts-list";
import Footer from "@/components/footer-comp";
export default {
  components: {
    Header,
    Posts,
    Footer,
  }
};
</script>

<style scoped>
  .container.postit-page{
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

