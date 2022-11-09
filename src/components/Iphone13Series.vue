<template>
  <div class="Iphone13Series">
  <h1 style ="text-align: center; padding-right: 100px">IPHONE 13 SERIES</h1>
  <img alt="Iphone 13 Series Image" src="../assets/iphone13.png" style ="max-width: 50%"/><br>
    <router-link to="/Store"><Button>Buy</Button></router-link>
  <h3>OR</h3>
  <button @click="clickShow = !clickShow">Details</button>
  <transition name ="fade">
    <table v-if = "clickShow">
    <h2 style = "text-align: center;">Details Iphone 13</h2>
      <tr style ="font-size: 20px; font-weight: bold;">Thông số kỹ thuật</tr>
      <tr>
            - Màn hình 6.1 inch, OLED, Super Retina XDR, 2532 x 1170 Pixels<br>
            - Bộ nhớ trong	128 GB<br>
            - CPU Apple A15 Bionic<br>
            - GPU Apple GPU 5 nhân<br>
            - Dung lượng pin 3225 mAh
      </tr>
      <tr>
        <img alt = "Iphone 13 Image" src = "../assets/iphone13nor.png" style="max-width:40%; padding:10px"/>
      </tr>
      <h2 style = "text-align: center;">Details Iphone 13 Mini</h2>
      <tr style ="font-size: 20px; font-weight: bold;">Thông số kỹ thuật</tr>
      <tr>
            - Kích thước: 131.5 x 64.2 x 7.7 mm, 141 g, hai mặt kính Gorilla Glass<br>
            - Màn hình: 5.4 inch, 1080 x 2340 px, Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits<br>
            - CPU: Apple A15 Bionic (5 nm) 6 nhân<br>
            - GPU: Apple GPU (4-core graphics)<br>
            - RAM: 4GB RAM<br>
            - Lưu trữ: NVMe 128GB<br>
            - Camera sau:<br>
            - Góc rộng: 12 MP, f/1.6, 26mm, 1.7µm, dual pixel PDAF, sensor-shift OIS<br>
            - Siêu rộng: 12 MP, f/2.4, 120˚, 13mm<br>
            - Camera trước: 12 MP, f/2.2, 23mm, 1/3.6″<br>
            - Pin: 2438 mAh
      </tr>
      <tr>
        <img alt = "Iphone 13 Mini Image" src = "../assets/iphone13mini.png" style="max-width:30%;"/>
      </tr>
      <h2 style = "text-align: center;">Details Iphone 13 Pro</h2>
      <tr style ="font-size: 20px; font-weight: bold;">Thông số kỹ thuật</tr>
      <tr>  
            - Màn hình: OLED 6.1" Super Retina XDR.<br>
            - Chip: Apple A15 Bionic.<br>
            - RAM, ROM: 6 GB 128 GB.<br>
            - Camera sau: 3 camera 12 MP.<br>
            - Pin, Sạc: 3095 mAh 20 W.
      </tr>
      <tr>
        <img alt = "Iphone 13 Pro Image" src = "../assets/iphone13pro.png" style="max-width:30%; padding:10px"/>
      </tr>
      <h2 style = "text-align: center;">Details Iphone 13 Pro Max</h2>
      <tr style ="font-size: 20px; font-weight: bold;">Thông số kỹ thuật</tr>
      <tr>  
            - Kích thước màn hình 6.7 inches<br>
            - Công nghệ màn hình OLED<br>
            - Hệ điều hành iOS15<br>
            - Độ phân giải màn hình	2778 x 1284 pixel<br>
            - Tính năng màn hình 120Hz, Super Retina XDR với ProMotion 6.1‑inch, OLED, 458 pp, HDR display, True Tone<br>
            - Wide color (P3), Haptic Touch<br>
      </tr>
      <tr>
        <img alt = "Iphone 13 Pro Max Image" src = "../assets/iphone13promax.png" style="max-width:30%; padding:10px"/>
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
.Iphone13Series h1{
  margin-top: 100px;
  margin-left: 100px;
  text-align: center;
  color: black;
}
.Iphone13Series table{
    width: 100%;
    height:100%;
    font-size: 20px;
}

.Iphone13Series button{
  background-color: white; 
  border: none;
  color: black;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
}
.Iphone13Series button:hover{
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
