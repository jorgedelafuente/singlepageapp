<template>
  <div>
    <v-toolbar app class="secondary">
      <v-toolbar-side-icon
        class="black--text hidden-md-and-up hamburger blue-grey darken-2"
        @click="drawer = !drawer"
        large
      ></v-toolbar-side-icon>
      <!-- HOME BUTTON -->
      <v-btn dark to="/">
        <v-icon>mdi-home-circle</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span>E</span>
          <span class="font-weight-light">FL</span>
        </v-toolbar-title>
      </v-btn>
      <!-- TOP NAV -->
      <v-btn flat class="hidden-sm-and-down" to="/fixtures" exact-active-class>Fixtures</v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/results" exact-active-class>Results</v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/teams" exact-active-class>Teams</v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/venues" exact-active-class>Venues</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat class="hidden-sm-and-down" to="/contact" exact-active-class>Contact</v-btn>
      <v-btn flat class="hidden-sm-and-down" to="/chat" exact-active-class>Chat</v-btn>
    </v-toolbar>

    <!-- Start of DRAWER -->
    <v-navigation-drawer floating app hide-overlay v-model="drawer" dark>
      <v-list>
        <template v-for="(link, index) in links">
          <v-list-tile
            :key="index"
            router
            :to="link.route"
            exact-active-class
            active-class="white--text"
          >
            <v-list-tile-action>
              <v-icon class="black--text">{{link.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{link.text}}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-home-circle', text: 'Home', route: '/' },
        { icon: 'mdi-calendar-multiple', text: 'Fixtures', route: '/fixtures' },
        { icon: 'mdi-soccer', text: 'Results', route: '/results' },
        { icon: 'mdi-shield-outline', text: 'Teams', route: '/teams' },
        { icon: 'mdi-google-maps', text: 'Venues', route: '/venues' },
        {
          icon: 'mdi-cellphone-message',
          text: 'Contact Us',
          route: '/contact'
        },
        { icon: 'mdi-chat-processing', text: 'Chat', route: '/chat' }
      ],
      teams: []
    }
  },
  computed: {
    clubs() {
      return this.$store.state.clubs
    }
  }
}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}

.club_logo {
  max-height: 25px;
  max-width: 25px;
}
</style>
