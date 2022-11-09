<template>
  <div class="HomePage">
    <img alt="Store Logo" src="../assets/applelogo.png" style ="max-width: 50%"/>
    <h1 style = "font-size: 70px; color: gray;text-shadow: 4px 4px #ddd">{{ welcome }}</h1>
    <div class="ListItems">
      <table>
        <tr>
          <td><router-link to ="/Store"><img src="../assets/listmac.png"/></router-link></td>
          <td><router-link to ="/Store"><img src="../assets/listairpod.png"/></router-link></td>
          <td><router-link to ="/Store"><img src="../assets/listwatch.png"/></router-link></td>
          <td><router-link to ="/Store"><img src="../assets/listiphone.png"/></router-link></td>
          <td><router-link to ="/Store"><img src="../assets/listipad.png"/></router-link></td>
        </tr>
      </table>
    </div>  
    <div class="HotDeals" style="background-color:black">
    <table>
      <td style="color: #B22222; font-size:80px; font-weight: bold; text-align: left;">
         SPECIALS:
        <img src="../assets/discountiphone.png"/>
        <img src="../assets/discountairpod.png">
      </td>
      <td style="color:#9400D3; text-align: left; font-size:60px; font-weight: bold">
        
        DISCOUNT 5% FOR STUDENT
      </td>
      <tr>
        <td style="color:#FF4500; font-size:70px; font-weight: bold; text-align: left;"> ONLY TODAY
        </td>
        <td>
            <img src="../assets/discountmac.png"/>
            <img src="../assets/discountwatch.png" />
            <img src="../assets/discountipad.png"/>
        </td>
      </tr>
      
    </table>
      </div>
  </div>
  <div class="Production">
    <h2 style ="font-size: 50px">The Best Iphone Series in 2022.</h2>
    <h3 style ="margin-top: 50px">- - - - CLICK THE SERIES FOR MORE INFORMATION - - - - </h3>
    <table style="width: 100%">
        <th>
        <router-link to="/IphoneXSeries">
          <button>Iphone X Series</button>
        </router-link>
        </th>
        <th>
          <router-link to="/Iphone11Series">
            <button>Iphone 11 Series</button>
          </router-link>
        </th>
        
        <th>
          <router-link to="/Iphone12Series">
              <button>Iphone 12 Series</button>
            </router-link>
        </th>
        
        <th>
          <router-link to="/Iphone13Series">
            <button>Iphone 13 Series</button>
          </router-link>
        </th>
    </table>
  </div>
  <div class="NewRelease" style = "background: black; padding-bottom: 40px">
  <h2 style ="color: #ddd; font-size: 30px; padding-top: 40px;">Other Productions & New Release Late 2022</h2>
      <table style ="width: 100%; padding: 5px">
        <tr>
          <td><img src ="../assets/iphone14.png"/></td>
          <td><img src ="../assets/macstudio.png" ></td>
          <td><img src ="../assets/ipadair.png"/></td>
          <td><img src ="../assets/macairm2.png"/></td>
        </tr>
        <tr style ="color:#ddd">
          <th>Iphone 14 Series</th>
          <th>Mac Mini </th>
          <th>IPad Air</th>
          <th>Macbook Air M2</th>
        </tr>
        <tr>
          <td><img src ="../assets/airpod3.png"/></td>
          <td><img src ="../assets/applewatch.png" /></td>
          <td><img src ="../assets/accessories.png"/></td>
          <td><img src ="../assets/appletv.png"/></td>
        </tr>

        <tr style = "color:#ddd">
          <th>Airpod 3</th>
          <th>Apple Watch</th>
          <th>Accessories</th>
          <th>Apple TV</th>
        </tr>
      </table>
  </div>
  <div class="Profile">
      <h3>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</h3>
      <h3 style ="font-size: 30px">More Information About Us</h3>
      <table>
      </table>

  </div>
  
</template>

<script>
export default {
  name: 'HomePage',
  props: {
      welcome: String,
  }
}
</script>

<style scoped>
.ListItems img{
  max-width: 90%;
  transition: 1s;
}
.ListItems img:hover{
  max-width: 100%;
  transition: 1s;
}
.Production button{
  background-color: white; 
  border: none;
  color: black;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  transition: 1.5s;
}
.Production button:hover{
  background-color: #ddd ; 
  border: none;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  text-shadow: 3px 3px white;
}
.Profile button{
  background-color: white;
  border: none;
  color: black;
  padding: 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  transition: 1.5s;
}
.Profile button:hover{
  background-color: white; 
  border: none;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  text-shadow: 3px 3px #ddd;
  transition: .5s;
}
.Profile img{
  max-width: 20%; 
  display: block; 
  margin:auto;
  transition: .5s;
}
.Profile img:hover{
  max-width: 30%; 
  display: block; 
  margin:auto;
  transition: .5s;
}
.NewRelease img{
  max-width: 80%; 
  transition: 1.5s;
}
.NewRelease img:hover{
  max-width: 90%; 
  transition: 1.5s;
}
.HotDeals img{
  max-width: 70%; 
  transition: 1.5s;
}
.HotDeals img:hover{
  max-width: 90%; 
  transition: 1.5s;
}
</style>
