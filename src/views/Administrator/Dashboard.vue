<template>
  <div>
    <h1>Dashboard</h1>

    <b-row v-show="data">
      <b-colxx lg="4" class="mb-4">
        <gradient-with-radial-progress-card
          icon="iconsminds-books"
          :title="`${data.course} Courses`"
          :detail="$t('dashboards.pending-for-publish')"
          :percent="`${data.course} *100/${data.course} `"
          :progressText="`${data.course} /${data.course} `"
        />
      </b-colxx>
      <b-colxx lg="4" class="mb-4">
        <gradient-with-radial-progress-card
          icon="iconsminds-open-book"
          :title="`${data.lesson} Lessons`"
          :detail="$t('dashboards.on-approval-process')"
          :percent="`${data.lesson}*100/${data.lesson}`"
          :progressText="`${data.lesson}/${data.lesson}`"
        />
      </b-colxx>
      <b-colxx lg="4" class="mb-4">
        <gradient-with-radial-progress-card
          icon="simple-icon-user"
          :title="`${data.user} Users`"
          :detail="$t('dashboards.waiting-for-notice')"
          :percent="`${data.user}*100/${data.user}`"
          :progressText="`${data.user}/${data.user}`"
        />
      </b-colxx>
      <b-colxx lg="4" class="mb-4">
        <gradient-with-radial-progress-card
          icon="simple-icon-book-open"
          :title="`${data.read_history} Read Histories`"
          :detail="$t('dashboards.pending-for-publish')"
          :percent="`${data.read_history}*100/${data.read_history}`"
          :progressText="`${data.read_history}/${data.read_history}`"
        />
      </b-colxx>
      <b-colxx lg="4" class="mb-4">
        <gradient-with-radial-progress-card
          icon="simple-icon-pencil"
          :title="`${data.write_history} Write Histories`"
          :detail="$t('dashboards.on-approval-process')"
          :percent="`${data.write_history}*100/${data.write_history}`"
          :progressText="`${data.write_history}/${data.write_history}`"
        />
      </b-colxx>
      <b-colxx lg="4" class="mb-4">
        <gradient-with-radial-progress-card
          icon="iconsminds-clock"
          :title="`${data.contact} Contacts`"
          :detail="$t('dashboards.waiting-for-notice')"
          :percent="`${data.contact}*100/${data.contact}`"
          :progressText="`${data.contact}/${data.contact}`"
        />
      </b-colxx>
    </b-row>
  </div>

</template>

<script>
  import { ResizeObserver } from 'vue-resize'

  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  import vSelect from 'vue-select'
  import 'vue-select/dist/vue-select.css'

  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePaginationBootstrap from '@/components/Common/VuetablePaginationBootstrap'

  import IconCard from '@/components/Cards/IconCard'
  import GradientWithRadialProgressCard from '@/components/Cards/GradientWithRadialProgressCard'
  import AreaShadowChart from '@/components/Charts/AreaShadow'
  import TwoColumnList from '@/components/Listing/TwoColumnList'
  import ListWithUserItem from '@/components/Listing/ListWithUserItem'

  import FactoryService from '../../services/FactoryService'

  export default {
    data () {
      return {
        data: {
          user: 0,
          course: 0,
          lesson: 0,
          read_history: 0,
          write_history: 0,
          contact: 0
        }
      }
    },
    async mounted () {
      this.data = await FactoryService.request('DashboardService', 'admin').index()
      console.log(this.data)
    },
    components: {
      IconCard,
      swiper,
      swiperSlide,
      ResizeObserver,
      vSelect,
      Vuetable,
      VuetablePaginationBootstrap,
      TwoColumnList,
      ListWithUserItem,
      AreaShadowChart,
      GradientWithRadialProgressCard
    }
  }
</script>

<style scoped>

</style>
