<template>
  <div>JsonForms: {{this.Schema}}</div>
</template>

<script>
import axios from 'axios';
import Schema from '../static/Schema';
import AddBranchesToJSON from '../utils';

export default {
  data() {
    return {
      Schema,
    };
  },
  mounted() {
    axios.get('/static/config.json').then((r) => {
      this.Schema = AddBranchesToJSON(Schema, r.data.branches);
    });
  },
};
</script>

<style>

</style>
