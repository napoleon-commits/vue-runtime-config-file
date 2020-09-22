<template>
  <div>
    <div>configSettings: {{this.$store.state.configSettings}}</div>
    <div>dashBoardConfigSettings: {{this.$store.state.dashBoardConfigSettings}}</div>
    <div>nodeData: {{this.$store.state.nodeData}}</div>
    <NT />
    <PC />
    <CheckList />
  </div>
</template>

<script>
import NT from './subcomponents/NT';
import PC from './subcomponents/PC';
import CheckList from './CheckList'

export default {
  name: 'HelloWorld',
  components: {
    NT,
    PC,
    CheckList,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
