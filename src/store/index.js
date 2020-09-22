import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    configSettings: {}
  },
  actions: {
    fetchConfigFile(){
      const axios = require('axios');
      axios.get('/static/config.json').then(r => {
        this.state.configSettings = r.data;
      })
    }
  }
})