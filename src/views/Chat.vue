<template>
  <div>
    <v-flex align-self-center px-2>
      <v-card elevation="24" raised class="info">
        <v-card-text class="text-xs-center" column justify-center pa-2 sm12>
          <h4>Chat</h4>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-container fluid align-content-start justify-start>
      <v-layout column>
        <v-flex xs12 sm12>
          <v-flex>
            <img
              class="cimage"
              alt="contact_image"
              aspect-ratio="2.75"
              src="../assets/smicons/kickit.png"
            >
          </v-flex>
          <v-flex>
            <img
              class="cimage"
              alt="contact_image"
              aspect-ratio="2.75"
              src="../assets/smicons/respect.png"
            >
          </v-flex>
          <v-card pt-4 elevation="24" raised class="carousel" app>
            <v-card-title primary-title>
              <v-flex xs12 sm12 column>
                <h2 class="sitetitle">EFL Chat</h2>
                <p class="text-xs-center">Welcome to the official chat.</p>
                <p
                  class="text-xs-center"
                >Please adhere to the leagues code of conduct when using the chat.</p>
                <v-flex>
                  <v-flex>
                    <!-- LOGIN BUTTON -->
                    <v-layout justify-center>
                      <v-btn
                        to="/chat"
                        pb-4
                        dark
                        class="loginbtn"
                        @click="loginFb"
                      >Chat - Google Login</v-btn>
                    </v-layout>
                    <!-- GOOGLE logo       -->
                    <v-layout justify-center>
                      <img
                        class="google"
                        alt="contact_image"
                        @click="loginFb"
                        aspect-ratio="2.75"
                        src="../assets/google-logo.png"
                      >
                    </v-layout>
                    <!-- USERNAME -->
                    <v-flex v-if="!username" class="text-xs-center">
                      Please Enter Username
                      <br>
                      <input type="text" placeholder="Username" v-on:keyup.enter="updateUsername">
                    </v-flex>

                    <div v-else>
                      <div class="text-xs-center">
                        From : {{username}}
                        <br>Message:
                        <br>
                        <!-- TEXTAREA -->
                        <v-flex class="text-xs-center">
                          <textarea
                            class="mtextarea"
                            name
                            id
                            cols="40"
                            rows="10"
                            placeholder="New Message"
                            v-on:keyup.enter="sendMessage"
                          ></textarea>
                        </v-flex>
                      </div>
                      <hr>
                      <!-- MESSAGE BOX -->
                      <v-flex class="text-xs-center">
                        <div class="messages">
                          <h3 class="sitetitle">Messages</h3>
                          <div class="message" v-for="message in messages" :key="message.timestamp">
                            <strong class="mname">{{message.username}}</strong>
                            <p>
                              <span class="mtime">{{message.timestamp}}</span>:
                              <span class="mtext">{{message.text}}</span>
                            </p>
                          </div>
                        </div>
                      </v-flex>
                    </div>
                  </v-flex>
                </v-flex>
                <v-flex></v-flex>
                <v-divider></v-divider>
                <br>
              </v-flex>
            </v-card-title>
          </v-card>
          <v-divider></v-divider>

          <v-divider></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
 
<script>
import * as firebase from 'firebase'
import moment from 'moment'

export default {
  name: 'chat',

  data() {
    return {
      username: '',
      messages: [],
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
      ],
      logo: [
        {
          src: require('../assets/google-logo.png')
        }
      ]
    }
  },
  methods: {
    loginFb() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.username = firebase.auth().currentUser.displayName
        })
        .catch(err => {
          alert('Oops. ' + err.message)
        })
    },
    updateUsername(e) {
      e.preventDefault()
      if (e.target.value) {
        this.username = e.target.value
      }
    },
    sendMessage(e) {
      e.preventDefault()
      if (e.target.value) {
        const message = {
          username: this.username,
          text: e.target.value,
          timestamp: moment(e.target.value.timestamp).format('lll')
        }
        firebase
          .database()
          .ref('messages')
          .push(message)
        e.target.value = ''
      }
    }
  },
  mounted() {
    let vm = this
    const itemsRef = firebase.database().ref('messages')
    itemsRef.on('value', snapshot => {
      let data = snapshot.val()
      let messages = []
      Object.keys(data).forEach(key => {
        messages.push({
          id: key,
          username: data[key].username,
          text: data[key].text,
          timestamp: data[key].timestamp
        })
      })
      vm.messages = messages.reverse()
    })
  }
}
</script>


<style scoped>
.messages {
  border: 2px solid black;
}

.smicons {
  height: 100px;
  width: 100px;
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
  border: 1px solid black;
  /* box-shadow: 1px 1px; */
}
.cimage {
  max-width: 100%;
  height: 250px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* box-shadow: 1px 1px; */
}

.mtime {
  font-style: italic;
}
.mtext {
  font-weight: bold;
  padding-left: 5px;
}
.mname {
  text-decoration: underline;
  color: teal;
}

.mtextarea {
  border: 1px solid black;
}

.google {
  max-height: 50px;
  max-width: 50px;
}
</style>
