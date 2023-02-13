<script setup>
import sliderBar1 from '@images/illustrations/sidebar-pic-1.png';
import sliderBar2 from '@images/illustrations/sidebar-pic-2.png';
import sliderBar3 from '@images/illustrations/sidebar-pic-3.png';
import { VIcon } from 'vuetify/components';

const websiteAnalytics = [
  {
    name: 'Traffic',
    slideImg: sliderBar1,
    data: [
      {
        number: '1.5k',
        text: 'Sessions',
      },
      {
        number: '3.1k',
        text: 'Page Views',
      },
      {
        number: '1.2k',
        text: 'Leads',
      },
      {
        number: '12%',
        text: 'Conversions',
      },
    ],
  },
  {
    name: 'Spending',
    slideImg: sliderBar2,
    data: [
      {
        number: '12h',
        text: 'Spend',
      },
      {
        number: '182',
        text: 'Order Size',
      },
      {
        number: '127',
        text: 'Order',
      },
      {
        number: '23k',
        text: 'Items',
      },
    ],
  },
  {
    name: 'Revenue Sources',
    slideImg: sliderBar3,
    data: [
      {
        number: '268',
        text: 'Direct',
      },
      {
        number: '890',
        text: 'Organic',
      },
      {
        number: '622',
        text: 'Referral',
      },
      {
        number: '1.2k',
        text: 'Campaign',
      },
    ],
  },
]
</script>

<template>
  <VCard color="primary">
    <VCarousel
      cycle
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      :delimiter-icon="() => h(VIcon, { icon: 'fa-circle', size: '10' })"
      height="auto"
      class="carousel-delimiter-top-end web-analytics-carousel"
    >
      <VCarouselItem
        v-for="item in websiteAnalytics"
        :key="item.name"
      >
        <VCardText>
          <VRow>
            <VCol cols="12">
              <h6 class="text-h6 text-white mb-1">
                เริ่มต้นใช้งาน CatFlows
              </h6>
              <p class="text-sm mb-0">
                เรากำลังรวบรวมข้อมูลเพื่อการประมวลผลที่แม่นยำมากขึ้น
              </p>
            </VCol>

            <VCol
              cols="12"
              sm="6"
              order="2"
              order-sm="1"
            >
             <br>
            </VCol>

            <VCol
              cols="12"
              sm="6"
              order="1"
              order-sm="2"
              class="position-relative text-center"
            >
              <img
                :src="item.slideImg"
                class="card-website-analytics-img"
              >
            </VCol>
          </VRow>
        </VCardText>
      </VCarouselItem>
    </VCarousel>
  </VCard>
</template>

<style lang="scss">
.card-website-analytics-img {
  block-size: 160px;
}

@media screen and (min-width: 600px) {
  .card-website-analytics-img {
    position: absolute;
    margin: auto;
    inset-block-end: 40px;
    inset-block-start: -1rem;
    inset-inline-end: 1rem;
  }
}

.web-analytics-carousel {
  .v-carousel__controls {
    .v-btn:not(.v-btn--active) {
      opacity: 0.4;
    }
  }
}
</style>

