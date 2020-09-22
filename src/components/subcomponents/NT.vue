<template>
  <div>NT settings: {{this.settings}}</div>
</template>

<script>
export default {
  computed: {
    settings() {
      return this.$store.state.configSettings;
    },
  },
};
</script>

<style>

</style>
