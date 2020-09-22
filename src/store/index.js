import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    configSettings: {},
  },
  actions: {
    fetchConfigFile() {
      axios.get('/static/config.json').then((r) => {
        this.state.configSettings = r.data;
      });
    },
  },
});
