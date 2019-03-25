<template>
  <div>
    <v-flex align-self-center px-2>
      <v-card elevation="24" raised class="info">
        <v-card-text class="text-xs-center" column justify-center pa-2 sm12>
          <h4>Season Fixtures</h4>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-container fluid>
      <v-layout column>
        <v-flex v-for="(match, id) in matchPlayed" :key="id" pt-2>
          <v-card flat pa-2 raised>
            <v-divider></v-divider>

            <v-card-text class="text-xs-center" column justify-center pa-2 sm12>
              <h3>Match: {{match.match_id}}</h3>
            </v-card-text>
            <v-card-text class="text-xs-center" column justify-center pa-2 sm12>Date: {{match.date}}</v-card-text>

            <v-card-text class="text-xs-center" column justify-center pa-2 sm12>
              Venue :
              <a
                class="maplink"
                v-bind:href="findStadium(match.home_team_id).stadium_gmaplink"
              >{{findStadium(match.home_team_id).stadium_name}}</a>
            </v-card-text>

            <v-layout row justify-center pa-3>
              <v-chip
                color="white"
                sm2
                class="text-xs-center"
              >{{findClub(match.home_team_id).club_abr}}</v-chip>
              <v-img
                justify-center
                sm4
                class="club_results_logo"
                v-bind:src="findClub(match.home_team_id).club_logo_url"
              ></v-img>

              <v-chip dark class="text-md-center">{{match.time}}</v-chip>

              <v-img
                justify-center
                sm4
                class="club_results_logo"
                v-bind:src="findClub(match.away_team_id).club_logo_url"
              ></v-img>
              <v-chip
                color="white"
                sm2
                class="text-xs-center"
              >{{findClub(match.away_team_id).club_abr}}</v-chip>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Fixtures',
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    matches() {
      return this.$store.state.matches
    },
    clubs() {
      return this.$store.state.clubs
    },
    stadiums() {
      return this.$store.state.stadiums
    },
    matchPlayed: function() {
      return this.$store.state.matches.filter(function(match) {
        return match.played == false
      })
    }
  },
  methods: {
    findStadium: function(id) {
      return this.$store.state.stadiums.find(stadium => stadium.club_id == id)
    },
    findClub: function(id) {
      return this.$store.state.clubs.find(club => club.club_id == id)
    }
  }
}
</script>

<style scoped>
.club_results_logo {
  max-height: 35px;
  max-width: 27px;
}

.venuelink {
  color: azure;
}

.maplink {
  text-decoration: underline;
}
</style>
