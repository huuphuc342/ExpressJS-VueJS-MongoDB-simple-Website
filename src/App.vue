<template>
<nav>
  <router-link to="/"><button>Home</button></router-link>
  <router-link to="/Store"><button>Store</button></router-link>
  <router-link to="/Register"><button>Register</button></router-link>
  <router-link to="/Cart"><button>Cart</button></router-link>
</nav>
<router-view/>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background: black;
}

nav a.router-link-exact-active {
  color: gray;
}
button{
  background-color: black; /* Green */
  border: none;
  color: #ddd;
  padding-right: 100px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 35px;
  font-weight: bold;
  transition: 0.5s;
  
}
button:hover{
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 40px;
}
</style>
