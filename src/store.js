import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stadiums: [
      {
        club_id: 1,
        stadium_name: 'Camp Nou',
        stadium_capacity: 99354,
        stadium_coordinates: '',
        stadium_gmaplink: 'https://goo.gl/maps/V1wWgDcMdDA2',
        stadium_url:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.686476201307!2d2.1206311158221434!3d41.38089597926474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498f576297baf%3A0x44f65330fe1b04b9!2sCamp+Nou!5e0!3m2!1sen!2ses!4v1546948166767',

        stadium_address: ''
      },
      {
        club_id: 2,
        stadium_name: 'Allianz Arena',
        stadium_gmaplink: 'https://goo.gl/maps/fMZsj4EFDAs',
        stadium_capacity: 75000,
        stadium_coordinates: '',
        stadium_url:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.3673969274732!2d11.622518516003973!3d48.2187996792299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e7385128a251f%3A0xed4d60428e32c423!2sAllianz+Arena!5e0!3m2!1sen!2ses!4v1546948150917',
        stadium_address: ''
      },
      {
        club_id: 3,
        stadium_name: 'Signal Iduna Park',
        stadium_gmaplink: 'https://goo.gl/maps/6bBcrUPBZgo',
        stadium_capacity: 81360,
        stadium_coordinates: '',
        stadium_url:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.124172539587!2d7.449668716098482!3d51.49258877963274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b919d39230d60f%3A0x8fd9c195ad02eddf!2sSignal+Iduna+Park!5e0!3m2!1sen!2ses!4v1546948113644',
        stadium_address: ''
      },
      {
        club_id: 4,
        stadium_name: 'Allianz Stadium',
        stadium_gmaplink: 'https://goo.gl/maps/Ujv3HYt6abF2',
        stadium_capacity: 99354,
        stadium_coordinates: '',
        stadium_url:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2815.8272898338564!2d7.639075715918582!3d45.109568979098285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886c17f7814e37%3A0xe3be8084a88d8da5!2sAllianz+Stadium!5e0!3m2!1sen!2ses!4v1546948015917',
        stadium_address: ''
      },
      {
        club_id: 5,
        stadium_name: 'Anfield',
        stadium_gmaplink: 'https://goo.gl/maps/xXZSea65W5Q2',
        stadium_capacity: 61905,
        stadium_coordinates: '',
        stadium_url:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.1050816941665!2d-2.9630186838434884!3d53.43082937999683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21654b02538b%3A0x84576a57e21973ff!2sAnfield!5e0!3m2!1sen!2ses!4v1546948187730',
        stadium_address: ''
      },
      {
        club_id: 6,
        stadium_name: 'Etihad Stadium',
        stadium_gmaplink: 'https://goo.gl/maps/2MbEFxxiPnC2',
        stadium_capacity: 55097,
        stadium_coordinates: '',
        stadium_url:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.178627957844!2d-2.202583983841894!3d53.4831380800079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb10dcc950ae3%3A0x549a8dcce67a876a!2sEtihad+Stadium!5e0!3m2!1sen!2ses!4v1546948215065"',
        stadium_address: ''
      },
      {
        club_id: 7,
        stadium_name: 'Parc des Paris',
        stadium_gmaplink: 'https://goo.gl/maps/nKeRu5b4tXA2',
        stadium_capacity: 47929,
        stadium_coordinates: '',
        stadium_url:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.879580996401!2d2.2508600160216248!3d48.841435579285864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67ac09948a18d%3A0xdd2450406cef2c5c!2sLe+Parc+des+Princes!5e0!3m2!1sen!2ses!4v1546948040164',
        stadium_address: ''
      },
      {
        club_id: 8,
        stadium_name: 'Santiago Bernabeu',
        stadium_gmaplink: 'https://goo.gl/maps/tY5dDGJWv7C2',
        stadium_capacity: 81044,
        stadium_coordinates: '',
        stadium_url:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3036.0037441886197!2d-3.6905332!3d40.4530541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e23705d39f%3A0xa8fff6d26e2b1988!2sSantiago+Bernab%C3%A9u+Stadium!5e0!3m2!1sen!2ses!4v1546947976141',
        stadium_address: ''
      }
    ],
    clubs: [
      {
        club_id: 1,
        club_name: 'Barcelona',
        club_oname: 'FC Barcelona',
        club_abr: 'BAR',
        club_logo: '../assets/clubbadges/barc.png',
        club_logo_url:
          'https://tmssl.akamaized.net//images/wappen/head/131.png?lm=1406739548',
        club_description: '',
        club_nickname: 'Los Culés',
        club_hkit: '',
        club_akit: '',
        club_tkit: '',
        club_route: '/teams/barcelona'
      },
      {
        club_id: 2,
        club_name: 'Bayern Munich',
        club_oname: 'FC Bayern München',
        club_abr: 'FCB',
        club_logo: '../assets/clubbadges/bay.png',
        club_logo_url:
          'https://tmssl.akamaized.net//images/wappen/head/27.png?lm=1498251238',
        club_description: '',
        club_nickname: 'FC Hollywood',
        club_hkit: '',
        club_akit: '',
        club_tkit: '',
        club_route: '/teams/bayernmunich'
      },
      {
        club_id: 3,
        club_name: 'Borussia Dortmund',
        club_oname: 'Borussia Dortmund',
        club_abr: 'BVB',
        club_logo: '../assets/clubbadges/bor.png',
        club_logo_url:
          'https://tmssl.akamaized.net//images/wappen/head/16.png?lm=1396275280',
        club_description: '',
        club_nickname: 'Die Schwarzgelben',
        club_hkit: '',
        club_akit: '',
        club_tkit: '',
        club_route: '/teams/borussiadortmund'
      },
      {
        club_id: 4,
        club_name: 'Juventus',
        club_oname: 'Juventus FC',
        club_abr: 'JUV',
        club_logo: '../assets/clubbadges/juve.png',
        club_logo_url:
          'https://tmssl.akamaized.net//images/wappen/head/506.png?lm=1539869052',
        club_description: '',
        club_nickname: 'Bianconeri',
        club_hkit: '',
        club_akit: '',
        club_tkit: '',
        club_route: '/teams/juventus'
      },
      {
        club_id: 5,
        club_name: 'Liverpool',
        club_oname: 'Liverpool FC',
        club_abr: 'LIV',
        club_logo: '../assets/clubbadges/liv.png',
        club_logo_url:
          'https://tmssl.akamaized.net//images/wappen/head/31.png?lm=1456567819',
        club_description: '',
        club_nickname: 'Reds',
        club_hkit: '',
        club_akit: '',
        club_tkit: '',
        club_route: '/teams/liverpool'
      },
      {
        club_id: 6,
        club_name: 'Manchester City',
        club_oname: 'Manchester City FC',
        club_abr: 'MCI',
        club_logo: '../assets/clubbadges/manc.png',
        club_logo_url:
          'https://tmssl.akamaized.net//images/wappen/head/281.png?lm=1467356331',
        club_description: '',
        club_nickname: 'Citizens',
        club_hkit: '',
        club_akit: '',
        club_tkit: '',
        club_route: '/teams/manchestercity'
      },
      {
        club_id: 7,
        club_name: 'Paris SG',
        club_oname: 'Paris Saint-Germain FC',
        club_abr: 'PSG',
        club_logo: '../assets/clubbadges/juve.png',
        club_logo_url:
          'https://tmssl.akamaized.net//images/wappen/head/583.png?lm=1522312728',
        club_description: '',
        club_nickname: 'Les Parisiens',
        club_hkit: '',
        club_akit: '',
        club_tkit: '',
        club_route: '/teams/parissg'
      },
      {
        club_id: 8,
        club_name: 'Real Madrid',
        club_oname: 'Real Madrid CF',
        club_abr: 'RMA',
        club_logo: '../assets/clubbadges/real.png',
        club_logo_url:
          'https://tmssl.akamaized.net//images/wappen/head/418.png?lm=1403089383',
        club_description: '',
        club_nickname: 'Los Merengues',
        club_hkit: '',
        club_akit: '',
        club_tkit: '',
        club_route: '/teams/realmadrid'
      }
    ],
    matches: [
      {
        match_id: 1,
        gameweek: 1,
        date: '05/01/2019',
        time: '13:00',
        score: '3 - 2',
        home_team_id: 2,
        away_team_id: 7,
        home_team_gf: 3,
        away_team_gf: 2,
        home_team_pts: 3,
        away_team_pts: 0,
        home_team_result: 'W',
        away_team_result: 'L',
        played: true
      },
      {
        match_id: 2,
        gameweek: 1,
        date: '05/01/2019',
        time: '15:00',
        score: '1 - 4',
        home_team_id: 4,
        away_team_id: 8,
        home_team_gf: 4,
        away_team_gf: 0,
        home_team_pts: 0,
        away_team_pts: 3,
        home_team_result: 'W',
        away_team_result: 'L',
        played: true
      },
      {
        match_id: 3,
        gameweek: 1,
        date: '05/01/2019',
        time: '17:00',
        score: '2 - 2',
        home_team_id: 5,
        away_team_id: 3,
        home_team_gf: 2,
        away_team_gf: 2,
        home_team_pts: 1,
        away_team_pts: 1,
        home_team_result: 'D',
        away_team_result: 'D',
        played: true
      },
      {
        match_id: 4,
        gameweek: 1,
        date: '05/01/2019',
        time: '19:00',
        score: '3 - 1',
        home_team_id: 1,
        away_team_id: 6,
        home_team_gf: 3,
        away_team_gf: 1,
        home_team_pts: 3,
        away_team_pts: 0,
        home_team_result: 'W',
        away_team_result: 'L',
        played: true
      },
      {
        match_id: 5,
        gameweek: 2,
        date: '12/01/2019',
        time: '13:00',
        score: '2 - 4',
        home_team_id: 6,
        away_team_id: 3,
        home_team_gf: 2,
        away_team_gf: 4,
        home_team_pts: 0,
        away_team_pts: 3,
        home_team_result: 'L',
        away_team_result: 'W',
        played: true
      },
      {
        match_id: 6,
        gameweek: 2,
        date: '12/01/2019',
        time: '15:00',
        score: '3 - 1',
        home_team_id: 1,
        away_team_id: 4,
        home_team_gf: 3,
        away_team_gf: 1,
        home_team_pts: 3,
        away_team_pts: 0,
        home_team_result: 'W',
        away_team_result: 'L',
        played: true
      },
      {
        match_id: 7,
        gameweek: 2,
        date: '12/01/2019',
        time: '17:00',
        score: '1 - 0',
        home_team_id: 8,
        away_team_id: 2,
        home_team_gf: 1,
        away_team_gf: 3,
        home_team_pts: 3,
        away_team_pts: 0,
        home_team_result: 'L',
        away_team_result: 'W',
        played: true
      },
      {
        match_id: 8,
        gameweek: 2,
        date: '12/01/2019',
        time: '19:00',
        score: '2 - 2',
        home_team_id: 7,
        away_team_id: 5,
        home_team_gf: 2,
        away_team_gf: 2,
        home_team_pts: 1,
        away_team_pts: 1,
        home_team_result: 'D',
        away_team_result: 'D',
        played: true
      },
      {
        match_id: 9,
        gameweek: 3,
        date: '19/01/2019',
        time: '13:00',
        score: '1-1',
        home_team_id: 5,
        away_team_id: 6,
        home_team_gf: 1,
        away_team_gf: 1,
        home_team_pts: 1,
        away_team_pts: 1,
        home_team_result: 'D',
        away_team_result: 'D',
        played: true
      },
      {
        match_id: 10,
        gameweek: 3,
        date: '19/01/2019',
        time: '15:00',
        score: '2-2',
        home_team_id: 7,
        away_team_id: 8,
        home_team_gf: 2,
        away_team_gf: 2,
        home_team_pts: 1,
        away_team_pts: 1,
        home_team_result: 'D',
        away_team_result: 'D',
        played: true
      },
      {
        match_id: 11,
        gameweek: 3,
        date: '19/01/2019',
        time: '17:00',
        score: '3-3',
        home_team_id: 2,
        away_team_id: 1,
        home_team_gf: 3,
        away_team_gf: 3,
        home_team_pts: 1,
        away_team_pts: 1,
        home_team_result: 'D',
        away_team_result: 'D',
        played: true
      },
      {
        match_id: 12,
        gameweek: 3,
        date: '19/01/2019',
        time: '19:00',
        score: '5-1',
        home_team_id: 4,
        away_team_id: 3,
        home_team_gf: 5,
        away_team_gf: 1,
        home_team_pts: 3,
        away_team_pts: 1,
        home_team_result: 'W',
        away_team_result: 'L',
        played: true
      },
      {
        match_id: 13,
        gameweek: 4,
        date: '26/01/2019',
        time: '13:00',
        score: 'Null',
        home_team_id: 3,
        away_team_id: 2,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 14,
        gameweek: 4,
        date: '26/01/2019',
        time: '15:00',
        score: 'Null',
        home_team_id: 8,
        away_team_id: 5,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 15,
        gameweek: 4,
        date: '26/01/2019',
        time: '17:00',
        score: 'Null',
        home_team_id: 1,
        away_team_id: 7,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 16,
        gameweek: 4,
        date: '26/01/2019',
        time: '19:00',
        score: 'Null',
        home_team_id: 6,
        away_team_id: 4,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 17,
        gameweek: 5,
        date: '02/02/2019',
        time: '13:00',
        score: 'Null',
        home_team_id: 4,
        away_team_id: 5,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 18,
        gameweek: 5,
        date: '02/02/2019',
        time: '15:00',
        score: 'Null',
        home_team_id: 7,
        away_team_id: 3,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 19,
        gameweek: 5,
        date: '02/02/2019',
        time: '17:00',
        score: 'Null',
        home_team_id: 2,
        away_team_id: 6,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 20,
        gameweek: 5,
        date: '02/02/2019',
        time: '19:00',
        score: 'Null',
        home_team_id: 8,
        away_team_id: 1,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 21,
        gameweek: 6,
        date: '09/02/2019',
        time: '13:00',
        score: 'Null',
        home_team_id: 3,
        away_team_id: 8,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 22,
        gameweek: 6,
        date: '09/02/2019',
        time: '15:00',
        score: 'Null',
        home_team_id: 4,
        away_team_id: 2,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 23,
        gameweek: 6,
        date: '09/02/2019',
        time: '17:00',
        score: 'Null',
        home_team_id: 5,
        away_team_id: 1,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 24,
        gameweek: 6,
        date: '09/02/2019',
        time: '19:00',
        score: 'Null',
        home_team_id: 6,
        away_team_id: 7,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 25,
        gameweek: 7,
        date: '16/02/2019',
        time: '13:00',
        score: 'Null',
        home_team_id: 7,
        away_team_id: 4,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 26,
        gameweek: 7,
        date: '16/02/2019',
        time: '15:00',
        score: 'Null',
        home_team_id: 1,
        away_team_id: 3,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 27,
        gameweek: 7,
        date: '16/02/2019',
        time: '17:00',
        score: 'Null',
        home_team_id: 2,
        away_team_id: 5,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      },
      {
        match_id: 28,
        gameweek: 7,
        date: '16/02/2019',
        time: '19:00',
        score: 'Null',
        home_team_id: 8,
        away_team_id: 6,
        home_team_gf: 'Null',
        away_team_gf: 'Null',
        home_team_pts: 'Null',
        away_team_pts: 'Null',
        home_team_result: '',
        away_team_result: '',
        played: false
      }
    ]
  },
  getters: {
    getMatchInfo: state => teamname => {
      let team = state.clubs.find(
        club => club.club_name.toLowerCase().replace(/\s/g, '') == teamname
      )
      return state.matches.filter(
        match =>
          match.home_team_id === team.club_id ||
          match.away_team_id === team.club_id
      )
    },
    matchPlayed: state => {
      return state.matches.filter(match => match.played == true)
    },
    matchNotPlayed: state => {
      return state.matches.filter(match => match.played == false)
    }
  },
  mutations: {},
  actions: {}
})
