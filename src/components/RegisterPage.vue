<template>
  <div class="RegisterPage">
    <img alt = "Customer Logo" src = "../assets/registeraccount.png" style = "max-width: 40%; padding-top: 50px;"/>
    <h1>Receive new release production by register</h1>
    <input type="text" id="create-post" v-model="text" placeholder="Enter Your Name"><br>
    <input type="text" id="create-post2" v-model="text2" placeholder="Enter Your Mobile Number"><br>
    <p>-------------------------------</p>
    <button type ="button" id="post-info" v-on:click= "createPostMessage"  @click="say('Register success')">Register</button>
    <div class="Bottom">
        <strong> Have a nice day ! </strong>
    </div>
  </div>
</template>

<script>

import PostService from '../PostService';

export default {
  name: 'RegisterPage',
  data() {
    return {
      posts: [],
      error: '',
      text: '',
      text2: ''
    };
  } ,
  async created(){
    try{
      this.posts = await PostService.getPosts();
    } catch(err){
      this.error = err.message;
    }
  },
    methods: {
      async createPostMessage() {
        await PostService.insertPost(this.text,this.text2);
        this.posts = await PostService.getPosts();
      },
      async deletePostMessage(id) {
        await PostService.deletePost(id);
        this.posts = await PostService.getPosts();
      },
      say(message) {
      alert(message)
      window.location.reload();
    }
    }
  }

</script>

<style scoped>
.RegisterPage input{
  background-color: white; 
  border: none;
  color: black;
  padding:20px;
  margin-bottom: 30px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  transition: 2s;
}
.RegisterPage input:hover{
  background-color: #ddd ; 
  color: black;
  border: none;
  padding: 20px;
  margin-bottom: 50px;
  color: black;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  transition: 0.5s;
}
.RegisterPage button{
  background-color: white; 
  color: black;
  border: none;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
}
.RegisterPage button:hover{
  background-color: black;
  color: #ddd;
  border: none;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
}
.Bottom{
  margin-top:50px;
  font-size: 30px;
  color: black;
}
input[type=text] {
  width: 45%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #e9d8f4;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
}

input[type=text]:focus {
border: 3px solid #58257b;
}

</style>