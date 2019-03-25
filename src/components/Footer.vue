<template>
  <v-footer class="pb-0 mx-0 secondary">
    <!-- CONTACT BUTTON -->
    <!-- <v-btn flat class="hidden-ms-and-down" to="/contact" exact-active-class>
      <v-icon>mdi-cellphone-message</v-icon>Contact Us
    </v-btn>-->
    <!-- LOGIN BUTTON -->
    <!-- <v-btn flat class="hidden-ms-and-down" to="/login" exact-active-class>Login</v-btn>
    <v-btn flat class="hidden-ms-and-down" to="/chat" exact-active-class>Chat</v-btn>-->
    <!-- <v-spacer></v-spacer> -->
    <div class="pl-4 text-xs-center">Elite Football League &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
</style>
