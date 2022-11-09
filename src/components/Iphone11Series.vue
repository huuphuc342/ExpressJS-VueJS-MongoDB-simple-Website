<template>
  <div class="Iphone11Series">
  <h1 style ="text-align: center; padding-right: 100px;">IPHONE 11 SERIES</h1>
  <img alt="Iphone 11 Series Image" src="../assets/iphone11.png" style ="max-width: 50%"/><br>
    <router-link to="/Store"><Button>Buy</Button></router-link>
  <h3>OR</h3>
  <button @click="clickShow = !clickShow">Details</button>
  <transition name ="fade">
    <table v-if = "clickShow">
    <h2 style = "text-align: center;">Details Iphone 11</h2>
      <tr style ="font-size: 20px; font-weight: bold;">Thông số kỹ thuật</tr>
      <tr>
            - 6.1 inch, IPS LCD, Liquid Retina HD, 828 x 1792 Pixels<br>
            - Apple GPU 4 nhân<br>
            - Dung lượng pin	3110 mAh<br>
            - Thẻ sim	2 - 1 eSIM, 1 Nano SIM<br>
            - Hệ điều hành	iOS 14<br>
      </tr>
      <tr>
        <img alt = "Iphone 11 Image" src = "../assets/iphone11nor.png"/>
      </tr>
      <h2 style = "text-align: center;">Details Iphone 11 Pro</h2>
      <tr style ="font-size: 20px; font-weight: bold;">Thông số kỹ thuật</tr>
      <tr>  
          - Màn hình: 5.8"<br>
          - Độ phân giải màn hình: 1125 x 2436 Pixels.<br>
          - Chip xử lý (CPU): Apple A13 Bionic 6 nhân.<br>
          - Chip đồ họa (GPU): Apple GPU 4 nhân.<br>
          - RAM: 4GB.<br>
          - Bộ nhớ trong: 64GB/128GB/ 256GB.<br>
          - SIM: 1 Nano SIM & 1 eSIM.<br>
          - Chất liệu: Khung thép không gỉ & Mặt lưng kính cường lực.
      </tr>
      <tr>
        <img alt = "Iphone 11 Pro Image" src = "../assets/iphone11pro.png"/>
      </tr>
      <h2 style = "text-align: center;">Details Iphone 11 Pro Max</h2>
      <tr style ="font-size: 20px; font-weight: bold;">Thông số kỹ thuật</tr>
      <tr>  
          - Màn hình: OLED 6.5" Super Retina XDR.<br>
          - Hệ điều hành: iOS 14.<br>
          - Camera sau: 3 camera 12 MP.<br>
          - Camera trước: 12 MP.<br>
          - Chip: Apple A13 Bionic.<br>
          - RAM: 4 GB.<br>
          - Bộ nhớ trong: 64 GB.<br>
          - SIM: 1 Nano SIM & 1 eSIM Hỗ trợ 4G.<br>
      </tr>
      <tr>
        <img alt = "Iphone 11 Pro Max Image" src = "../assets/iphone11promax.png"/>
      </tr>
    </table>
  </transition>
  </div>
</template>

<script>
export default {
    name: "Iphone11Series",
    data(){
      return {
        clickShow: false,
      } 
    }
}
</script>

<style scoped>
.Iphone11Series h1{
  margin-top: 100px;
  margin-left: 100px;
  text-align: center;
  color: black;
}
.Iphone11Series table{
    width: 100%;
    height:100%;
    font-size: 20px;
}

.Iphone11Series button{
  background-color: white; /* Green */
  border: none;
  color: black;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
}
.Iphone11Series button:hover{
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
