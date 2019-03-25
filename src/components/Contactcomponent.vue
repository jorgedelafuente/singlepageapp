<template>
  <div>
    <v-flex align-self-center px-2>
      <v-card elevation="24" raised class="info">
        <v-card-text class="text-xs-center" column justify-center pa-2 sm12>
          <h4>Contact</h4>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-container fluid>
      <v-layout column>
        <v-flex xs12 sm12>
          <v-card pt-4 elevation="24" raised class="carousel">
            <v-card-title primary-title>
              <v-flex xs12 sm12>
                <h2 class="sitetitle">EFL Contact</h2>

                <img
                  class="cimage"
                  alt="contact_image"
                  aspect-ratio="2.75"
                  src="../assets/smicons/contact.png"
                >

                <p class="text-xs-center">For official communication please use our chat app.</p>
                <v-layout justify-center>
                  <v-btn to="/chat" pb-4 dark class="loginbtn">Login to Chat</v-btn>
                </v-layout>
                <v-divider></v-divider>
                <br>
                <p
                  class="text-xs-center"
                >Please engage with our community on official Social Media Platforms</p>
              </v-flex>
            </v-card-title>

            <v-flex pb-4>
              <v-layout align-center justify-space-around column>
                <v-flex>
                  <img class="smicons" alt="fbimage" src="../assets/smicons/fb.png">
                  <img class="smicons" alt="ytimage" src="../assets/smicons/yt.png">
                </v-flex>
                <v-flex>
                  <img class="smicons" alt="igimage" src="../assets/smicons/ig.png">
                  <img class="smicons" alt="twimage" src="../assets/smicons/tw.png">
                </v-flex>
              </v-layout>
            </v-flex>
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
    </v-container>
  </div>
</template>
 
<script>
export default {
  name: 'contact',

  data() {
    return {
      drawer: false,
      items: [
        {
          src: require('../assets/smicons/fb.png')
        },
        {
          src: require('../assets/smicons/ig.png')
        },
        {
          src: require('../assets/smicons/tw.png')
        },
        {
          src: require('../assets/smicons/yt.png')
        }
      ],
      sponsors: [
        {
          src: require('../assets/bg/bgs.png')
        }
      ],
      contacts: [
        {
          src: require('../assets/smicons/contact.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.smicons {
  height: 100px;
  width: 100px;
  padding: 5px;
}
.sitetitle {
  font-weight: bold;
  font-size: 225%;
  text-align: center;
  text-decoration: underline;
}
.carousel {
  border: 1px solid black;
  height: auto;
  max-width: 100%;
  object-fit: cover;
}
.bgimage {
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.cimage {
  max-width: 100%;
  height: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
