<template>
  <div class="Iphone12Series">
  <h1 style ="text-align: center; padding-right: 100px">IPHONE 12 SERIES</h1>
  <img alt="Iphone 12 Series Image" src="../assets/iphone12.png" style ="max-width: 50%"/><br>
    <router-link to="/Store"><Button>Buy</Button></router-link>
  <h3>OR</h3>
  <button @click="clickShow = !clickShow">Details</button>
  <transition name ="fade">
    <table v-if = "clickShow">
    <h2 style = "text-align: center;">Details Iphone 12</h2>
      <tr style ="font-size: 20px; font-weight: bold;">Thông số kỹ thuật</tr>
      <tr>
            - 6.1 inch, OLED, Super Retina XDR, 2532 x 1170 Pixels<br>
            - RAM 4 GB<br>
            - Bộ nhớ trong 64 GB <br>
            - CPU Apple A14 Bionic <br>
            - Dung lượng pin 2815 mAh
      </tr>
      <tr>
        <img alt = "Iphone 12 Image" src = "../assets/iphone12nor.png" style="max-width:50%; padding:40px"/>
      </tr>
      <h2 style = "text-align: center;">Details Iphone 12 Mini</h2>
      <tr style ="font-size: 20px; font-weight: bold;">Thông số kỹ thuật</tr>
      <tr>
            - Màn hình 5.4 inch, OLED, Super Retina XDR, 1080 x 2240 Pixels<br>
            - CPU Apple A14 Bionic<br>
            - GPU Apple GPU 4 nhân<br>
            - Dung lượng pin 2227 mAh<br>
            - Thẻ sim 2 - 1 eSIM, 1 Nano SIM
      </tr>
      <tr>
        <img alt = "Iphone 12 Mini Image" src = "../assets/iphone12mini.png" style="max-width:50%; padding:40px"/>
      </tr>
      <h2 style = "text-align: center;">Details Iphone 12 Pro</h2>
      <tr style ="font-size: 20px; font-weight: bold;">Thông số kỹ thuật</tr>
      <tr>  
            - Màn hình: OLED 6.1" Super Retina XDR.<br>
            - Chip: Apple A14 Bionic.<br>
            - RAM, ROM: 6 GB 128 GB.<br>
            - Camera sau: 3 camera 12 MP.<br>
            - Pin, Sạc: 2815 mAh 20 W.<br>
      </tr>
      <tr>
        <img alt = "Iphone 12 Pro Image" src = "../assets/iphone12pro.png" style="max-width:50%; padding:40px"/>
      </tr>
      <h2 style = "text-align: center;">Details Iphone 12 Pro Max</h2>
      <tr style ="font-size: 20px; font-weight: bold;">Thông số kỹ thuật</tr>
      <tr>  
            - Công nghệ màn hình Super Retina XDR OLEDHDR10Dolby Vision<br>
            - Độ sáng tối đa	1200 nits<br>
            - Kích thước màn hình	6.7 inch<br>
            - Độ phân giải	1284 x 2778<br>
            - Tỉ lệ màn hình	19.5:9
      </tr>
      <tr>
        <img alt = "Iphone 12 Pro Max Image" src = "../assets/iphone12promax.png" style="max-width:50%; padding:40px"/>
      </tr>
    </table>
  </transition>
  </div>
</template>

<script>
export default {
    name: "Iphone12Series",
    data(){
      return {
        clickShow: false,
      } 
    }
}
</script>

<style scoped>
.Iphone12Series h1{
  margin-top: 100px;
  margin-left: 100px;
  text-align: center;
  color: black;
}
.Iphone12Series table{
    width: 100%;
    height:100%;
    font-size: 20px;
}

.Iphone12Series button{
  background-color: white; 
  border: none;
  color: black;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
}
.Iphone12Series button:hover{
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
