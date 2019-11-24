<template>
  <div id="app-container" :class="getMenuType">
    <english-nav/>
    <div class="container" style="padding-top: 155px">
      <router-view/>

      <b-card style="background-image: linear-gradient(to right top, #104978, #3582b2, #3693ce)">
        <b-row>
          <b-colxx class="mb-3">
            <h3 class="text-white">Crazy English</h3>
            <p class="text-white">Phương pháp học tiếng Anh cuồng nhiệt (Crazy English) là phương pháp do một giáo viên
              người tên là Lý Dương khởi xướng ra. </p>
            <p class="text-white"> Một trong nhưng phương pháp học tiếng anh tốt nhất hiện nay. </p>
          </b-colxx>
          <b-colxx class="mb-3">
            <h3 class="text-white">Contract Info</h3>
            <p class="text-white"><i class="simple-icon-location-pin"></i>235 Hoàng Quốc Việt, Cầu Giấy, Hà Nội</p>
            <p class="text-white"><i class="simple-icon-pin"></i> Bắc Từ Liêm - Hà Nội</p>
            <p class="text-white"><i class="iconsminds-envelope"></i> doanthilamphuong@gmail.com</p>
            <p class="text-white"><i class="simple-icon-phone"></i> +8463024312</p>
          </b-colxx>
          <b-colxx class="mb-3">
            <h3 class="text-white">Social network</h3>
            <p class="text-white"><i class="simple-icon-social-facebook"></i> Crazy English Fanpage</p>
            <p class="text-white"><i class="simple-icon-social-twitter"></i> Crazy English Group</p>
            <p class="text-white"><i class="simple-icon-social-google"></i> Crazy English Group</p>
            <p class="text-white"><i class="simple-icon-social-youtube"></i> Crazy English Video</p>
          </b-colxx>
          <b-colxx class="mb-3">
            <h3 class="text-white">About us</h3>
            <p class="text-white"><i class="simple-icon-user"></i> Founder: Đoàn Thị Lâm Phương</p>
            <p class="text-white"><i class="simple-icon-graduation"></i> Sinh viên trường Đại Học Điện Lực</p>
            <p class="text-white"><i class="iconsminds-laptop-3"></i> Khoa công nghệ thông tin</p>
            <p class="text-white"><i class="iconsminds-quill-3"></i> D10CNPM</p>
          </b-colxx>
        </b-row>
        <b-row>
          <b-colxx class="mb-12 text-center">
            <p class="text-white">@ Copyright Crazy English</p>
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
