<template>
  <div id="app-container" :class="getMenuType">
    <english-nav/>
<!--    <sidebar/>-->
<!--    <main>-->
      <div class="container" style="padding-top: 155px">
        <router-view/>
      </div>
<!--    </main>-->
  </div>
</template>
<script>
// import Sidebar from '@/containers/Sidebar'
import EnglishNav from '@/containers/EnglishNav'
import { mapGetters } from 'vuex'

export default {
  data () {
    return { show: false }
  },
  components: {
    EnglishNav
    // Sidebar
  },
  computed: {
    ...mapGetters(['getMenuType'])
  }
}
</script>
