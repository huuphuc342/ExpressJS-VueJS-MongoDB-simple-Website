<template>
    <div class="ProfileMember3">
    <img src="../assets/avatarprofile.png" style = "max-width: 20%"/>
    <h1 style ="text-align: center;">Nguyễn Hữu Phúc</h1>
    <h2>- Back End -</h2>
    <button @click = "clickInfo = !clickInfo">Details</button>
        <transition name ="fade">
            <p v-if = "clickInfo">Program web server with ExpressJS</p>
        </transition>
    </div>
</template>

<script>
export default {
    name: "ProfileMember3",
    data(){
        return {
            clickInfo: false
        } 
    }
}
</script>

<style scoped>
.ProfileMember3 button{
    background-color: white; /* Green */
    border: none;
    color: black;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
}
.ProfileMember3 button:hover{
    background-color: black; 
    border: none;
    color: #ddd;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 25px;
}
</style>
