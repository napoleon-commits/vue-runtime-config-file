import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import dashboardApi from '../api/DashboardApi';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    configSettings: {},
    dashBoardConfigSettings: {},
    nodeData: [],
  },
  actions: {
    fetchConfigFile() {
      axios.get('/static/config.json').then((r) => {
        this.state.configSettings = r.data;
        dashboardApi(r.data, this.state);
      });
    },
  },
});
