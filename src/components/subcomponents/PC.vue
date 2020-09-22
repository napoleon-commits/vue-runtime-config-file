<template>
  <div>
      PC: {{chartData}}
  </div>
</template>

<script>
export default {
  computed: {
    chartData() {
      return {
        datasets: [
          {
            label: 'Data One',
            backgroundColor: (() => {
              const colors = this.$store.state.nodeData;
              return colors;
            })(),
          },
        ],
      };
    },
  },
};
</script>

<style>

</style>
