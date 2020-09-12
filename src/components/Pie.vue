<template>
  <q-card class="mycard col-md-4 col-xs-12 col-sm-12 q-ma-sm">
    <Chart :options="chartOptions" />
  </q-card>
</template>

<script>
import { Chart } from "highcharts-vue";
export default {
  name: "Column",
  props: ["source", "title", "danwei"],
  components: {
    Chart
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie"
        },
        title: {
          text: this.title
        },
        series: [
          {
            name: this.danwei,
            colorByPoint: true,
            data: this.source.map(el => ({
              name: el.split(",")[0],
              y: Number(el.split(",")[1])
            }))
          }
        ]
      };
    }
  }
};
</script>

<style></style>
