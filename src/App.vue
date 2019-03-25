<template>
  <v-app class="grey lighten-4">
    <Navigation/>

    <v-content>
      <router-view>
        <v-content transition="slide-x-transition"></v-content>
      </router-view>
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style>
</style>
