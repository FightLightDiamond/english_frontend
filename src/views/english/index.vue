<template>
  <div id="app-container" :class="getMenuType">
    <english-nav/>
    <div class="container" style="padding-top: 80px" >
      <router-view/>

      <b-card style="background-image: linear-gradient(to right top, #104978, #3582b2, #3693ce)" class="footer">
        <b-row>
          <b-colxx class="mb-3">
            <h3 class="text-white">Classes</h3>
            <p class="text-white">Phương pháp học tiếng Anh cuồng nhiệt (Classes) là phương pháp do một giáo viên
              người tên là Lý Dương khởi xướng ra. </p>
            <p class="text-white"> Một trong nhưng phương pháp học tiếng anh tốt nhất hiện nay. </p>
          </b-colxx>
          <b-colxx class="mb-3">
            <h3 class="text-white">Contract Info</h3>
            <p class="text-white"><i class="simple-icon-location-pin"></i>Tân Chi - Tiên Du - Bắc Ninh</p>
            <!--<p class="text-white"><i class="simple-icon-pin"></i> Tân Chi - Tiên Du - Bắc Ninh</p>-->
            <p class="text-white"><i class="iconsminds-envelope"></i> fightlightdiamond@gmail.com</p>
            <p class="text-white"><i class="simple-icon-phone"></i> 0359003851</p>
          </b-colxx>
          <b-colxx class="mb-3">
            <h3 class="text-white">Social network</h3>
            <p class="text-white"><i class="simple-icon-social-facebook"></i> Classes Fanpage</p>
            <p class="text-white"><i class="simple-icon-social-twitter"></i> Classes Group</p>
            <p class="text-white"><i class="simple-icon-social-google"></i> Classes Group</p>
            <p class="text-white"><i class="simple-icon-social-youtube"></i> Classes Video</p>
          </b-colxx>
          <b-colxx class="mb-3">
            <h3 class="text-white">About us</h3>
            <p class="text-white"><i class="simple-icon-user"></i> Founder: Phạm Minh Cương</p>
            <p class="text-white"><i class="simple-icon-graduation"></i>Web Developer</p>
            <!--<p class="text-white"><i class="iconsminds-laptop-3"></i> Tân Chi - Tiên Du - Bắc Ninh</p>-->
            <!--<p class="text-white"><i class="iconsminds-quill-3"></i> </p>-->
          </b-colxx>
        </b-row>
        <b-row>
          <b-colxx class="mb-12 text-center">
            <p class="text-white">@ Copyright Classes</p>
          </b-colxx>
        </b-row>
      </b-card>
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
