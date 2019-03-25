<template>
  <div>
    <v-flex align-self-center px-2>
      <v-card elevation="24" raised class="info">
        <v-card-text class="text-xs-center" column justify-center pa-2 sm12>
          <h4>Teams</h4>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex sm12>
          <v-card
            v-for="(club, id) in clubs"
            :key="id"
            class="text-xs-center pt-3 mt-4"
            flat
            raised
            elevation="24"
          >
            <v-flex sm12 column>
              <h2>
                <router-link :to="club.club_route">{{club.club_oname}}</router-link>
              </h2>
            </v-flex>
            <v-divider></v-divider>
            <v-flex sm12>
              <v-responsive class="pa-1">
                <router-link :to="club.club_route">
                  <v-avatar tile size="200">
                    <v-img justify-center class="club_logo" v-bind:src="club.club_logo_url"></v-img>
                  </v-avatar>
                </router-link>
              </v-responsive>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'teams',
  computed: {
    clubs() {
      return this.$store.state.clubs
    }
  }
}
</script>

<style scoped>
.club_logo {
  max-height: 185px;
  max-width: 142px;
}
</style>
