<script setup>
import AnalyticsProjectTable from '@/views/dashboards/tour/AnalyticsProjectTable.vue'
import AnalyticsWebsiteAnalytics from '@/views/dashboards/tour/AnalyticsWebsiteAnalytics.vue'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const currentTheme = vuetifyTheme.current.value.colors

const statisticsVertical = {
  title: 'Revenue Generated',
  color: 'success',
  icon: 'tabler-credit-card',
  stats: '97.5k',
  height: 120,
  series: [{
    data: [
      300,
      350,
      330,
      380,
      340,
      400,
      380,
    ],
  }],
  chartOptions: {
    chart: {
      height: 110,
      type: 'area',
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    tooltip: { enabled: false },
    markers: {
      colors: 'transparent',
      strokeColors: 'transparent',
    },
    grid: { show: false },
    colors: [currentTheme.success],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.8,
        opacityFrom: 0.6,
        opacityTo: 0.1,
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    xaxis: {
      show: true,
      lines: { show: false },
      labels: { show: false },
      stroke: { width: 0 },
      axisBorder: { show: false },
    },
    yaxis: {
      stroke: { width: 0 },
      show: false,
    },
  },
  
}

const simpleStatisticsDemoCards = [
  {
    icon: 'tabler-currency-dollar',
    color: 'success',
    title: 'ยอดขาย',
    subTitle: 'รวม',
    stat: '1.28k',
    change: '12.2%',
  },
  {
    icon: 'tabler-chart-bar',
    color: 'error',
    title: 'ยอดค้างชำระ',
    subTitle: 'รวม',
    stat: '$4,673',
    change: '+25.2%',
  },
]
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Website analytics -->
    <VCol
      cols="12"
      md="6"
    >
      <AnalyticsWebsiteAnalytics />
    </VCol>

    
    <VCol
      v-for="demo in simpleStatisticsDemoCards"
      :key="demo.title"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <VCard>
        <VCardText>
          <VAvatar
            :color="demo.color"
            variant="tonal"
            rounded
            size="42"
          >
            <VIcon :icon="demo.icon" />
          </VAvatar>

          <h6 class="text-h6 mt-3">
            {{ demo.title }}
          </h6>
          <p class="text-sm text-disabled mt-1 mb-0">
            {{ demo.subTitle }}
          </p>
          <p class="my-2">
            {{ demo.stat }}
          </p>
          <VChip
            :color="demo.color"
            label
          >
            {{ demo.change }}
          </VChip>
        </VCardText>
      </VCard>
    </VCol>


    <VCol
      cols="12"
      lg="12"
    >
      <AnalyticsProjectTable />
    </VCol>


  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
