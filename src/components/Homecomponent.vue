<template>
  <div>
    <v-flex align-self-center px-2>
      <v-card elevation="24" raised class="info">
        <v-card-text class="text-xs-center">
          <h3 class="sitetitle">Elite Football League</h3>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-container fluid>
      <v-layout column>
        <v-flex xs12 sm12>
          <v-card pt-4 elevation="24" raised class="carousel">
            <v-card-title primary-title>
              <v-flex xs12 sm12>
                <p
                  class="text-xs-center"
                >Welcome to the official Elite Football League site. Get news, updates, fixtures, results, teams and venue information.</p>
              </v-flex>
            </v-card-title>
            <v-carousel flat hide-controls hide-delimiters>
              <v-carousel-item class="carousel" v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
            </v-carousel>

            <img
              class="bgimage"
              alt="Background Image"
              aspect-ratio="2.75"
              src="../assets/bg/bgs.png"
            >
          </v-card>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>

      <!-- FIXTURES -->
      <h2 class="text-xs-center">Upcoming Fixtures</h2>
      <v-layout column>
        <v-flex v-for="(match, id) in matchNotPlayed" :key="id" pt-2>
          <v-card flat pa-2 raised>
            <v-divider></v-divider>

            <v-card-text
              class="text-xs-center"
              column
              justify-center
              pa-2
              sm12
            >Match :{{match.match_id}}. Date : {{match.date}}</v-card-text>

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

      <v-btn block color="primary" to="/fixtures" pt-4>All Fixtures</v-btn>

      <!-- RESULTS -->
      <h2 class="text-xs-center">Previous Results</h2>
      <v-layout column>
        <v-flex v-for="(match, id) in matchPlayed" :key="id" pt-2 raised>
          <v-card dark flat>
            <v-divider></v-divider>

            <v-card-text
              class="text-xs-center"
              column
              justify-center
              pa-2
              sm12
            >Match :{{match.match_id}}. Date : {{match.date}}</v-card-text>

            <v-card-text class="text-xs-center" column justify-center pa-2 sm12>
              Venue :
              <a
                class="venuelink"
                v-bind:href="findStadium(match.home_team_id).stadium_url"
              >{{findStadium(match.home_team_id).stadium_name}}</a>
            </v-card-text>

            <v-layout row justify-center pa-3>
              <v-chip
                color="#424242"
                sm3
                class="text-xs-center"
              >{{findClub(match.home_team_id).club_abr}}</v-chip>
              <v-img
                justify-center
                sm4
                class="club_results_logo"
                v-bind:src="findClub(match.home_team_id).club_logo_url"
              ></v-img>

              <v-chip dark>{{match.home_team_gf}} - {{match.away_team_gf}}</v-chip>

              <v-img
                justify-center
                sm4
                class="club_results_logo"
                v-bind:src="findClub(match.away_team_id).club_logo_url"
              ></v-img>
              <v-chip
                color="#424242"
                sm2
                class="text-xs-center"
              >{{findClub(match.away_team_id).club_abr}}</v-chip>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>

      <v-btn block color="primary" to="/results" pt-4>All Results</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          src: require('../assets/bg/bg2.png')
        },
        {
          src: require('../assets/bg/bg3.png')
        }
      ],
      sponsors: [
        {
          src: require('../assets/bg/bgs.png')
        }
      ]
    }
  },
  computed: {
    matches() {
      return this.$store.state.matches
    },
    clubs() {
      return this.$store.state.clubs
    },
    matchPlayed: function() {
      return this.$store.state.matches.filter(function(match) {
        return match.played == true && match.gameweek == 3
      })
    },
    matchNotPlayed: function() {
      return this.$store.state.matches.filter(function(match) {
        return match.played == !true && match.gameweek == 4
      })
    }
  },
  methods: {
    findClub: function(id) {
      return this.$store.state.clubs.find(club => club.club_id == id)
    },
    findStadium: function(id) {
      return this.$store.state.stadiums.find(stadium => stadium.club_id == id)
    }
  }
}
</script>

<style scoped>
.club_results_logo {
  max-height: 45px;
  max-width: 35px;
}

.club_results_logo2 {
  max-height: 35px;
  max-width: 20px;
}

.venuelink {
  color: azure;
  text-decoration: underline;
}

.maplink {
  text-decoration: underline;
}
.sitetitle {
  font-weight: bold;
  font-size: 225%;
  text-align: center;
  text-decoration: underline;
}

.bgimage {
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.carousel {
  border: 1px solid white;
  /* max-height: 300px; */
  height: auto;
  max-width: 100%;
  object-fit: cover;
}
</style>
