<template>
  <div>
    <!--    <b-row>-->
    <!--      <b-colxx xxs="12" class="form-group">-->
    <!--        <md-card>-->
    <!--          <md-card-actions >-->

    <!--&lt;!&ndash;            <div class="md-subhead">&ndash;&gt;-->
    <!--&lt;!&ndash;              <span> </span>&ndash;&gt;-->
    <!--&lt;!&ndash;              <span>（</span>&ndash;&gt;-->
    <!--&lt;!&ndash;              <span>键盘控制 / 聚焦后左右键</span>&ndash;&gt;-->
    <!--&lt;!&ndash;              <span>）</span>&ndash;&gt;-->
    <!--&lt;!&ndash;            </div>&ndash;&gt;-->
    <!--&lt;!&ndash;            <md-button class="md-icon-button"&ndash;&gt;-->
    <!--&lt;!&ndash;                       target="_blank"&ndash;&gt;-->
    <!--&lt;!&ndash;                       href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/26-keyboard-control.vue">&ndash;&gt;-->
    <!--&lt;!&ndash;              <md-icon>code</md-icon>&ndash;&gt;-->
    <!--&lt;!&ndash;            </md-button>&ndash;&gt;-->
    <!--          </md-card-actions>-->
    <!--          <md-card-media>-->
    <!--            &lt;!&ndash; swiper &ndash;&gt;-->
    <!--            <swiper :options="swiperOption">-->
    <!--              <swiper-slide> <img  src="https://awesome.edu.my/wp-content/uploads/2017/01/banner-main-page-07.jpg" class="img-responsive"/></swiper-slide>-->

    <!--              <div class="swiper-pagination" slot="pagination"></div>-->
    <!--              <div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--              <div class="swiper-button-next" slot="button-next"></div>-->
    <!--            </swiper>-->
    <!--          </md-card-media>-->
    <!--        </md-card>-->
    <!--      </b-colxx>-->
    <!--    </b-row>-->

    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4">
          <b-jumbotron :header="$t('Crazy English')" :lead="$t('Bạn đang học tiếng Anh giao tiếp?')" header-level="4">
            <hr class="my-4">
            <p>
              Phương pháp học tiếng Anh cuồng nhiệt (Crazy English) là phương pháp do một giáo viên người tên là Lý
              Dương khởi xướng ra. Lúc đầu, phương pháp Crazy English không được ủng hộ bởi nó đi ngược lại các mô hình
              và khái niệm giảng dạy truyền thống. Không những thế, Crazy English còn phải chịu sự khinh miệt và ghê tởm
              của nhiều người châu Á truyền thống, những người luôn yêu mến bản sắc phương Đông về sự kiềm chế, khiêm
              tốn và điều độ. Nhưng Lý Dương vẫn không bỏ cuộc, ông kiên trì phát triển, tuyên truyền phương pháp này
              qua các học trò của mình, và dần thu được những thành công cực kỳ to lớn. Cho đến bây giờ, Crazy English
              đã trở thành phương pháp học tiếng Anh của hàng trăm triệu người ở Việt Nam, Nhật Bản,Trung Quốc, Hàn
              Quốc/
            </p>
            <p class="lead mb-0">
              <b-button variant="primary" size="lg">{{$t('Tìm hiểu')}}</b-button>
            </p>
          </b-jumbotron>
        </b-card>
      </b-colxx>
    </b-row>

    <b-row class="form-group">
      <b-colxx>
        <h3>Danh sách chủ đề</h3>
      </b-colxx>

      <swiper :options="swiperInfiniteOption" ref="swiperInfinite">
        <swiper-slide v-for="course in courses">
          <div class="pr-3 pl-3">
            <b-card no-body :title="course.name">
              <div class="position-relative">
                <router-link tag="a" :to="`/courses/${course.id}`">
                  <img class="card-img-top" :src="course.large_thumb" alt="Card cap"/>
                </router-link>
                <b-badge variant="primary" pill class="position-absolute badge-top-left">NEW</b-badge>
                <b-badge variant="secondary" pill class="position-absolute badge-top-left-2">TRENDING</b-badge>
              </div>
              <b-card-body>
                <h6 class="mb-4">
                  <router-link tag="a" :to="`/courses/${course.id}`">
                    {{course.name}}
                  </router-link>
                </h6>

                <p class="text-muted text-small mb-0 font-weight-light">
                  {{ ( course.description.length > 150) ? course.description = course.description.substring(0, 150) +
                  '...' : course.description}}
                </p>
              </b-card-body>
            </b-card>
          </div>
        </swiper-slide>
      </swiper>
    </b-row>
  </div>

</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import FactoryService from '../../services/FactoryService'
  import IconCard from '@/components/Cards/IconCard'
  import GradientCard from '@/components/Cards/GradientCard'

  export default {
    components: {
      GradientCard,
      swiper,
      swiperSlide,
      IconCard,
    },
    data () {
      return {
        courses: [],
        swiperInfiniteOption: {
          slidesPerView: 4,
          loop: true,
        },
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          keyboard: {
            enabled: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    async mounted () {
      this.courses = await FactoryService.request('CourseService').index()
      console.log("this.courses")
      console.log(this.courses)
    }
  }
</script>

<style scoped>

</style>
