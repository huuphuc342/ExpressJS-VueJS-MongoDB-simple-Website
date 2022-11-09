
<template>
<div class="Buying13ProMax">
<h1>Xác nhận mua hàng</h1>
    <div class="create-post">
        <input type="text" id="create-post" v-model="text" placeholder="Nhập tên">
        <input type="text" id="create-post2" v-model="text2" placeholder="Nhập số điện thoại">
        <input type="text" id="create-post3" v-model="text3" placeholder="Nhập địa chỉ">
        <input type="text" id="create-post4" v-model="text4" placeholder="Sản phẩm mua" disabled>
        <p style = "font-weight: bold; font-size: 25px">Giá 28.500.000 VNĐ</p>
        <label>
                    <span> Chọn màu sắc: <span class="Choosing" ></span></span>
                    <select name="selection" v-model="text5">
                        <option disabled> Chọn màu sắc... </option>
                        <option value="Xanh Lá">Xanh Lá</option>
                        <option value="Đen">Đen</option>
                        <option value="Xanh Lam">Xanh Lam</option>
                        <option value="Bạc">Bạc</option>
                        <option value="Vàng">Vàng</option>
                    </select>
        </label>           
        <br><img src="../assets/iphone13promax.png" style="max-width:70% "/><br>
        <button v-on:click= "createPostMessage" @click="say('Order Success')" >Order</button>
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
    text4: 'Iphone 13 Pro Max',
    text5:'',
    text6: '28.500.000 VNĐ'
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
div.Buying13ProMax {
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
border: 1px solid #5bd658;
background-color: #bcffb8;
padding: 10px 10px 30px 10px;
margin-bottom: 15px;
}

div.created-at {
position: absolute;
top: 0;
left: 0;
padding: 5px 15px 5px 15px;
background-color: darkgreen;
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
.Buying13ProMax button{
background-color: white; /* Green */
border: none;
color: black;
padding: 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 30px;
}
.Buying13ProMax button:hover{
background-color: white; 
border: none;
color: black;
padding: 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 40px;
}
</style>
