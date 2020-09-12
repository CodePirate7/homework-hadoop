<template>
  <q-card>
    <Chart :options="chartOptions" />
  </q-card>
</template>

<script>
import { Chart } from "highcharts-vue";
export default {
  name: "Column",
  props: ["source", "title", "yTitle", "xTitle", "type", "danwei"],
  components: {
    Chart
  },
  computed: {
    chartOptions() {
      if (this.type === "column") {
        return {
          chart: {
            type: "column"
          },
          title: {
            text: this.title
          },
          yAxis: {
            title: {
              text: this.yTitle
            }
          },
          xAxis: {
            categories: [this.xTitle],
            crosshair: true
          },
          series: this.source.map(el => ({
            name: el.split(",")[0],
            data: [Number(el.split(",")[1])]
          }))
        };
      } else {
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
                y: parseFloat(Number(el.split(",")[1]).toFixed(2))
              }))
            }
          ]
        };
      }
    }
  }
};
</script>
