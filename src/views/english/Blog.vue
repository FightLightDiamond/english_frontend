<template>
  <div>
    <h2>Blog</h2>
  </div>

</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import FactoryService from '../../services/FactoryService'
  import IconCard from '@/components/Cards/IconCard'

  export default {
    components: {
      swiper,
      swiperSlide,
      IconCard,
    },
    data () {
      return {}
    },
    async mounted () {

    }
  }
</script>

<style scoped>

</style>
