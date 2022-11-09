<template>
  <div class="IphoneXSeries">
  <h1 style ="text-align: center; padding-right: 100px">IPHONE X SERIES</h1>
  <img alt="Iphone X Series Image" src="../assets/iphonex.png" style = "max-width: 50%"/><br>
    <router-link to="/Store"><Button>Buy</Button></router-link>
  <h3>OR</h3>
  <button @click="clickShow = !clickShow">Details</button>
  <transition name ="fade">
    <table v-if = "clickShow">
    <h2 style = "text-align: center;">Details Iphone XS</h2>
      <tr style ="font-size: 20px; font-weight: bold;">Thông số kỹ thuật</tr>
      <tr>
            - Màn hình: IPS LCD 6.1" Liquid Retina.<br>
            - Hệ điều hành: iOS 15.<br>
            - Camera sau: 12 MP.<br>
            - Camera trước: 7 MP.<br>
            - Chip: Apple A12 Bionic.<br>
            - RAM: 3 GB.<br>
            - Bộ nhớ trong: 128 GB.<br>
            - SIM: 1 Nano SIM & 1 eSIM Hỗ trợ 4G.<br>
      </tr>
      <tr>
        <img alt = "Iphone XS Image" src = "../assets/iphonexs.png" style = "max-width:40%"/>
      </tr>
      <h2 style = "text-align: center;">Details Iphone XR</h2>
      <tr style ="font-size: 20px; font-weight: bold;">Thông số kỹ thuật</tr>
      <tr>  
          - Màn hình: OLED 5.8" Super Retina.<br>
          - Chip: Apple A12 Bionic.<br>
          - RAM, ROM: 4 GB 64 GB.<br>
          - Camera sau: 2 camera 12 MP.<br>
          - Pin, Sạc: 2658 mAh.<br>
      </tr>
      <tr>
        <img alt = "Iphone XR Image" src = "../assets/iphonexr.png" style = "max-width:40%"/>
      </tr>
      <h2 style = "text-align: center;">Details Iphone XS Max</h2>
      <tr style ="font-size: 20px; font-weight: bold;">Thông số kỹ thuật</tr>
      <tr>  
          - Màn hình: OLED 6.5" Super Retina.<br>
          - Hệ điều hành: iOS 14.<br>
          - Camera sau: 2 camera 12 MP. <br>
          - Camera trước: 7 MP.<br>
          - Chip: Apple A12 Bionic.<br>
          - RAM: 4 GB.<br>
          - Bộ nhớ trong: 64 GB.<br>
          - SIM: 1 Nano SIM & 1 eSIM Hỗ trợ 4G.<br>
      </tr>
      <tr>
        <img alt = "Iphone XS Image" src = "../assets/iphonexsmax.png" style = "max-width:40%"/>
      </tr>
    </table>
  </transition>
  </div>
</template>

<script>
export default {
    name: "IphoneXSeries",
    data(){
      return {
        clickShow: false,
      } 
    }
}
</script>

<style scoped>
.IphoneXSeries h1{
  margin-top: 100px;
  margin-left: 100px;
  text-align: center;
  color: black;
}
.IphoneXSeries table{
    width: 100%;
    height:100%;
    font-size: 20px;

}

.IphoneXSeries button{
  background-color: white; 
  border: none;
  color: black;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
}
.IphoneXSeries button:hover{
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
