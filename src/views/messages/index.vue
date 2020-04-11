<template>
  <div id="app-container" :class="getMenuType">
    <english-nav/>
    <div class="container" style="padding-top: 80px" >
      <h1>Chat</h1>
      <router-view/>
    </div>

  </div>
</template>
<script>

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
