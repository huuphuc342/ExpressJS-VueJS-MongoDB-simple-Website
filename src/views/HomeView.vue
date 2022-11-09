<template>
  <div class="home">
    <HomePage welcome="Welcome to Apple Store"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'HomeView',
  components: {
    HomePage
}
}
</script>
