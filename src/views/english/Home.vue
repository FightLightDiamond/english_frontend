<template>
  <div>
    <!--    <b-row>-->
    <!--      <b-colxx xxs="12" class="form-group">-->
    <!--        <swiper :options="swiperOption">-->
    <!--          <swiper-slide><img src="https://awesome.edu.my/wp-content/uploads/2017/01/banner-main-page-07.jpg"/>-->
    <!--          </swiper-slide>-->
    <!--          <swiper-slide><img src="https://awesome.edu.my/wp-content/uploads/2017/01/banner-main-page-07.jpg"/>-->
    <!--          </swiper-slide>-->
    <!--          <swiper-slide><img src="https://awesome.edu.my/wp-content/uploads/2017/01/banner-main-page-07.jpg"/>-->
    <!--          </swiper-slide>-->
    <!--          <swiper-slide><img src="https://awesome.edu.my/wp-content/uploads/2017/01/banner-main-page-07.jpg"/>-->
    <!--          </swiper-slide>-->

    <!--          <div class="swiper-pagination" slot="pagination"></div>-->
    <!--          <div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--          <div class="swiper-button-next" slot="button-next"></div>-->
    <!--        </swiper>-->
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

    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Contact us')">
          <b-form @submit.prevent="submit()">
            <b-form-group :label="$t('forms.email')" :description="$t('forms.email-muted')">
              <b-form-input required type="email" v-model="form.email"/>
            </b-form-group>
            <b-form-group :label="$t('Phone number')">
              <b-form-input required type="number" v-model="form.phone_number"/>
            </b-form-group>
            <b-form-group :label="$t('Message')">
              <textarea required v-model="form.message" class="form-control"></textarea>
            </b-form-group>
            <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit') }}</b-button>
          </b-form>
        </b-card>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Google map')">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3571080652955!2d105.77413541493245!3d21.018392586003998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454abd8d06f6f%3A0x9c864fbed0cdde0e!2zMTU0IMSQw6xuaCBUaMO0biwgTeG7uSDEkMOsbmgsIFThu6sgTGnDqm0sIEjDoCBO4buZaQ!5e0!3m2!1sen!2s!4v1571673259983!5m2!1sen!2s"
            width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </b-card>
      </b-colxx>
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
        form: {},
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
      console.log('this.courses')
      console.log(this.courses)
    },
    methods: {
      async submit () {
        console.log(this.form)
        try {
          const res = await FactoryService.request('ContactService').create(this.form)
          this.form = {}
          this.$notify('success', 'Contact Success', `We will contact you soon`, { duration: 13000, permanent: false })
        } catch (e) {
          this.$notify('error', 'Contact Fail', `Server error`, { duration: 13000, permanent: false })
        }
      }
    }
  }
</script>

<style scoped>

</style>
