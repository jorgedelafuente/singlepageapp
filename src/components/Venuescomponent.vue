<template>
  <div>
    <v-flex align-self-center px-2>
      <v-card elevation="24" raised class="info">
        <v-card-text class="text-xs-center" column justify-center pa-2 sm12>
          <h4>Venues</h4>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-container fluid>
      <v-layout wrap>
        <v-flex xs12 sm12 v-for="(club, id) in clubs" :key="id" flat pt-4 light>
          <v-card pb-4 raised>
            <v-divider></v-divider>
            <v-card-title>
              <v-card-text class="text-xs-center">
                <h2>{{club.club_oname}}</h2>
              </v-card-text>
            </v-card-title>

            <v-responsive pa-2>
              <v-img class="white--text" max-height="200px" contain v-bind:src="club.club_logo_url"></v-img>
            </v-responsive>

            <v-divider></v-divider>

            <v-card-text>
              <div
                class="subheading text-xs-center"
              >Stadium Name : {{findStadium(club.club_id).stadium_name}}</div>
              <div
                class="grey--text text-xs-center"
              >Stadium Capacity : {{findStadium(club.club_id).stadium_capacity}}</div>

              <div class="grey--text text-xs-center">
                <a
                  class="maplink"
                  v-bind:href="findStadium(club.club_id).stadium_gmaplink"
                >Stadium Map Link</a>
              </div>
            </v-card-text>

            <v-layout align-center justify-center column fill-height>
              <iframe class="iframemap" :src="findStadium(club.club_id).stadium_url" align="middle"></iframe>
            </v-layout>
          </v-card>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Venues',
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    stadiums() {
      return this.$store.state.stadiums
    },
    clubs() {
      return this.$store.state.clubs
    }
  },
  methods: {
    findStadium: function(id) {
      return this.$store.state.stadiums.find(stadium => stadium.club_id == id)
    }
  }
}
</script>

<style scoped>
.club_logo {
  max-height: 75px;
  max-width: 55px;
}

.iframemap {
  border: 1px solid black;
  width: auto;
  max-width: auto;
  max-height: auto;
}

.maplink {
  text-decoration: underline;
}
</style>
