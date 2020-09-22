<template>
    <div>
        <div
            v-for="(service, index) in recognizedServices"
            :key="index"
        >
            <input
                v-model="checkedServices"
                type="checkbox"
                :value="service"
            />
            <label>{{service}}</label>
            <br />
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      checkedServices: [],
      recognizedServices: [],
    };
  },
  mounted() {
    // v-model does not recognize an observer from the store
    axios.get('/static/config.json').then((r) => {
      this.checkedServices = r.data.branches;
      this.recognizedServices = r.data.branches;
    });
  },
};
</script>

<style>

</style>
