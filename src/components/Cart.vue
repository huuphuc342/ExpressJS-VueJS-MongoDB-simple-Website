<template>
    <div class="Cart">
    <h1 style = "padding-top: 50px; font-size: 50px">Đơn hàng đã Order !</h1>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
    <div class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
    >
        <!-- {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}} -->
        <p>
        Ngày tạo: {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()  + 1}/${post.createdAt.getFullYear()}`}}
    </p>
    <!-- <p>
        ID: {{`${post._id}`}}
    </p> -->
        <p class = "text">Họ & tên người đặt (Nhận hàng): {{post.text}}</p>
        <p class = "text">Số điện thoại: {{post.text2}}</p>
        <p class = "text">Địa chỉ: {{post.text3}}</p>
        <p class = "text">Sản phẩm: {{post.text4}}</p>
        <p class = "text">Màu sắc: {{post.text5}}</p><br>
        <p class = "text">Giá: {{post.text6}}</p>
        <button v-on:click= "deletePostMessage(post._id)" @click="say('Đã hủy đơn hàng')" >Hủy Đơn Hàng</button>
    </div>
</div>
</div>
</template>


<script>
import BuyingFunction from '../BuyingFunction';

export default {
    name: 'PostComponent',
    data() {
        return {
        posts: [],
        error: '',
        text: '',
        text2: '',
        text3: '',
        text4: '',
        text5:'',
        };
    } ,
    async created(){
        try{
        this.posts = await BuyingFunction.getPosts();
        } catch(err){
        this.error = err.message;
        }
    },
        methods: {
        async createPostMessage() {
            await BuyingFunction.insertPost(this.text,this.text2,this.text3,this.text4,this.text5,this.text6);
            this.posts = await BuyingFunction.getPosts();
        },
        async deletePostMessage(id) {
            await BuyingFunction.deletePost(id);
            this.posts = await BuyingFunction.getPosts();
        },
        say(message) {
        alert(message)
        window.location.reload();
        }
        }
    }





</script>

<style scoped>
div.Cart {
max-width: 800px;
margin: 0 auto;
}

label{
    margin-top: 100px;
    color: rgb(0, 0, 0);
}

p.error {
border: 1px solid #ff5b5f;
background-color: #ffc5c1;
padding: 10px;
margin-bottom: 15px;
}

div.post {
position: relative;
border: 1px solid white;
background-color: white;
padding: 10px 10px 30px 10px;
margin-bottom: 15px;
}

div.created-at {
position: absolute;
top: 0;
left: 0;
padding: 5px 15px 5px 15px;
background-color: white;
color: white;
font-size: 13px;
}

p.text {
font-size: 22px;
font-weight: 700;
margin-bottom: 0;
}

input[type=text] {
    width: 100%;
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
.Cart button{
    background-color: white;
    border: none;
    color: black;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
}
.Cart button:hover{
    background-color: black; 
    border: none;
    color: white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
}
</style>
