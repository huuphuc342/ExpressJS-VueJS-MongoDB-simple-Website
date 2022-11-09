<template>
    <div class="StoreItem">
    <h1 style="font-size:50px; font-weight: bold">Our Production</h1>
    <h2 style="font-size:50px; font-weight: bold">- - - - - - - - - - - -</h2>
        <table style="text-align: center">
             <tr>
                <td><img src="../assets/iphonexr.png" style="max-width: 80%"/></td>
                <td style="padding-left: 200px"><img src="../assets/iphonexs.png" style="max-width:70%"/></td>
                <td><img src="../assets/iphonexsmax.png" style="max-width:45%"/></td>
            </tr>
            <tr>
                <td>Iphone XR</td>
                <td style="padding-left: 200px">Iphone XS</td>
                <td>Iphone XS MAX</td>
            </tr>
            <tr>
                <td><router-link to="/BuyingXR"><button>Buy</button></router-link></td>
                <td style="padding-left: 200px"><router-link to="/BuyingXS"><button>Buy</button></router-link></td>
                <td><router-link to="/BuyingXSMax"><button>Buy</button></router-link></td>
            </tr>
            <tr>
                <td><img src="../assets/iphone11nor.png" style="max-width: 80%"/></td>
                <td style="padding-left: 200px"><img src="../assets/iphone11pro.png" style="max-width:100%"/></td>
                <td><img src="../assets/iphone11promax.png" style="max-width:50%"/></td>
            </tr>
            <tr>
                <td>Iphone 11</td>
                <td style="padding-left: 200px">Iphone 11 Pro</td>
                <td>Iphone 11 Pro MAX</td>
            </tr>
            <tr>
                <td><router-link to="/Buying11Nor"><button>Buy</button></router-link></td>
                <td style="padding-left: 200px"><router-link to="/Buying11Pro"><button>Buy</button></router-link></td>
                <td><router-link to="/Buying11ProMax"><button>Buy</button></router-link></td>
            </tr>
            <tr>
                <td><img src="../assets/iphone12nor.png" style="max-width: 80%"/></td>
                <td style="padding-left: 200px"><img src="../assets/iphone12pro.png" style="max-width:70%"/></td>
                <td><img src="../assets/iphone12promax.png" style="max-width:40%"/></td>
            </tr>
            <tr>
                <td>Iphone 12</td>
                <td style="padding-left: 200px">Iphone 12 Pro</td>
                <td>Iphone 12 Pro MAX</td>
            </tr>
            <tr>
                <td><router-link to="/Buying12Nor"><button>Buy</button></router-link></td>
                <td style="padding-left: 200px"><router-link to="/Buying12Pro"><button>Buy</button></router-link></td>
                <td><router-link to="/Buying12ProMax"><button>Buy</button></router-link></td>
            </tr>
            <tr>
                <td><img src="../assets/iphone13nor.png" style="max-width: 100%"/></td>
                <td style="padding-left: 200px"><img src="../assets/iphone13pro.png" style="max-width:100%"/></td>
                <td><img src="../assets/iphone13promax.png" style="max-width:50%"/></td>
            </tr>
            <tr>
                <td>Iphone 13</td>
                <td style="padding-left: 200px">Iphone 13 Pro</td>
                <td>Iphone 13 Pro MAX</td>
            </tr>
            <tr>
               <td><router-link to="/Buying13Nor"><button>Buy</button></router-link></td>
                <td style="padding-left: 200px"><router-link to="/Buying13Pro"><button>Buy</button></router-link></td>
                <td><router-link to="/Buying13ProMax"><button>Buy</button></router-link></td>
            </tr>
            <tr>
                <td><img src="../assets/iphone12mini.png" style="max-width: 100%"/></td>
                <td style="padding-left: 200px"><img src="../assets/iphone13mini.png" style="max-width:100%"/></td>
            </tr>
            <tr>
                <td>Iphone 12 Mini</td>
                <td style="padding-left: 200px">Iphone 13 Mini</td>
            </tr>
            <tr>
               <td><router-link to="/Buying12Mini"><button>Buy</button></router-link></td>
                <td style="padding-left: 200px"><router-link to="/Buying13Mini"><button>Buy</button></router-link></td>
            </tr>
        </table>
    </div>
</template>
<script>

</script>
<style scoped>
.StoreItem button{
    background-color: white;
    border: none;
    color: black;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
}
.StoreItem button:hover{
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 40px;
}
.StoreItem td{
    font-size: 20px;
    font-weight:bold;
}
</style>
