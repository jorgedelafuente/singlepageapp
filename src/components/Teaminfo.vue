<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm12>
        <!-- START OF PAGE -->
        <v-flex v-for="(club, club_id) in teamInfo" :key="club_id" sm12>
          <v-card pb-4 raised>
            <v-card-title>
              <v-card-text class="text-xs-center">
                <h2>{{club.club_oname}}</h2>
              </v-card-text>
            </v-card-title>
            <v-divider></v-divider>
            <v-responsive pa-2>
              <v-img class="white--text" max-height="200px" contain v-bind:src="club.club_logo_url"></v-img>
            </v-responsive>
            <v-card-text>
              <ul class="text-xs-center">
                <v-flex>Stadium Name : {{findStadium(club.club_id).stadium_name}}</v-flex>
                <v-flex>Stadium Capacity : {{findStadium(club.club_id).stadium_capacity}}</v-flex>
                <v-flex>
                  <a
                    class="maplink"
                    v-bind:href="findStadium(club.club_id).stadium_gmaplink"
                  >Stadium Map Link</a>
                </v-flex>
                <v-flex>Club Nickname: {{club.club_nickname}}</v-flex>
                <v-flex>Club Abbreviation: {{club.club_abr}}</v-flex>
              </ul>
            </v-card-text>
          </v-card>

          <!-- START OF RESULTS -->
          <v-flex pa-4>
            <h2 class="text-xs-center">{{club.club_name}} Results</h2>
          </v-flex>
          <v-layout column>
            <v-flex v-for="(match, id) in matchPlayed" :key="id" pt-2>
              <v-card dark flat>
                <v-divider></v-divider>

                <v-card-text
                  class="text-xs-center"
                  column
                  justify-center
                  pa-2
                  sm12
                >Match :{{match.match_id}}</v-card-text>

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

                  <!-- <v-space></v-space> -->
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

          <!-- START OF FIXTURES -->
          <v-flex pa-4>
            <h2 class="text-xs-center">{{club.club_name}} Fixtures</h2>
          </v-flex>
          <v-layout column>
            <v-flex v-for="(match, id) in matchNotPlayed" :key="id" pt-2>
              <v-card flat pa-2>
                <v-divider></v-divider>
                <v-card-text
                  class="text-xs-center"
                  column
                  justify-center
                  pa-2
                  sm12
                >Match :{{match.match_id}}</v-card-text>
                <v-card-text class="text-xs-center" column justify-center pa-2 sm12>
                  Venue :
                  <a
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
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  name: 'teaminfo',
  components: {},
  props: ['teamname', 'teamid'],
  data() {
    return {
      urlParam: '$route.params.teamname',
      team_id: [],
      team_info: [],
      drawer: false
    }
  },
  computed: {
    getMatchInfo() {
      return this.$store.getters.getMatchInfo(this.teamname)
    },
    stadiums() {
      return this.$store.state.stadiums
    },
    clubs() {
      return this.$store.state.clubs
    },
    matches() {
      return this.$store.state.matches
    },
    teamInfo() {
      return this.$store.state.clubs.filter(
        club => club.club_name.toLowerCase().replace(/\s/g, '') == this.teamname
      )
    },
    matchPlayed() {
      return this.$store.getters.getMatchInfo(this.teamname).filter(match => {
        return match.played === true
      })
    },
    matchNotPlayed() {
      return this.$store.getters.getMatchInfo(this.teamname).filter(match => {
        return match.played !== true
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
.club_logo {
  max-height: 75px;
  max-width: 55px;
}

.maplink {
  text-decoration: underline;
}

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
}
</style>
