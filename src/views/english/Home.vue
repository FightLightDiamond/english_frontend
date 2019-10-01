<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" >
          <b-jumbotron :header="$t('Crazy English')" :lead="$t('Bạn đang học tiếng Anh giao tiếp?')" header-level="4">
            <hr class="my-4">
            <p>
              Phương pháp học tiếng Anh cuồng nhiệt (Crazy English) là phương pháp do một giáo viên người tên là Lý Dương khởi xướng ra. Lúc đầu, phương pháp Crazy English không được ủng hộ bởi nó đi ngược lại các mô hình và khái niệm giảng dạy truyền thống. Không những thế, Crazy English còn phải chịu sự khinh miệt và ghê tởm của nhiều người châu Á truyền thống, những người luôn yêu mến bản sắc phương Đông về sự kiềm chế, khiêm tốn và điều độ. Nhưng Lý Dương vẫn không bỏ cuộc, ông kiên trì phát triển, tuyên truyền phương pháp này qua các học trò của mình, và dần thu được những thành công cực kỳ to lớn. Cho đến bây giờ, Crazy English đã trở thành phương pháp học tiếng Anh của hàng trăm triệu người ở Việt Nam, Nhật Bản,Trung Quốc, Hàn Quốc/
            </p>
            <p class="lead mb-0">
              <b-button variant="primary" size="lg">{{$t('Tìm hiểu')}}</b-button>
            </p>
          </b-jumbotron>
        </b-card>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx xxs="12">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="/https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjwtr6eovrkAhURH3AKHSDKCXkQjRx6BAgBEAQ&url=https%3A%2F%2Fawesome.edu.my%2Fbanner-main-page-07-2%2F&psig=AOvVaw2znlFUJK_-aIzu9jFU5Nib&ust=1569992015723437" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjwtr6eovrkAhURH3AKHSDKCXkQjRx6BAgBEAQ&url=https%3A%2F%2Fawesome.edu.my%2Fbanner-main-page-07-2%2F&psig=AOvVaw2znlFUJK_-aIzu9jFU5Nib&ust=1569992015723437" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjwtr6eovrkAhURH3AKHSDKCXkQjRx6BAgBEAQ&url=https%3A%2F%2Fawesome.edu.my%2Fbanner-main-page-07-2%2F&psig=AOvVaw2znlFUJK_-aIzu9jFU5Nib&ust=1569992015723437 alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      </b-colxx>
    </b-row>

    <b-row class="form-group">
      <b-colxx>
        <h3>Danh sách chủ đề</h3>
      </b-colxx>

      <swiper :options="swiperInfiniteOption"  ref="swiperInfinite">
        <swiper-slide v-for="course in courses">
          <div class="pr-3 pl-3">
            <b-card  no-body :title="course.name">
              <div class="position-relative">
                <router-link tag="a" :to="`/courses/${course.id}`">
                <img class="card-img-top" :src="course.img" alt="Card cap" />
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

                <p class="text-muted text-small mb-0 font-weight-light">{{course.description}}</p>
              </b-card-body>
            </b-card>
          </div>
        </swiper-slide>
      </swiper>
    </b-row>

<!--    <b-row>-->
<!--      <b-colxx xs="12">-->
<!--        <h3>Các loại bài tập</h3>-->
<!--      </b-colxx>-->
<!--        <b-colxx xxs="6" sm="4" md="3" lg="3">-->
<!--          <icon-card :title="$t('dashboards.pending-orders')" icon="iconsminds-clock" :value=14 />-->
<!--        </b-colxx>-->
<!--        <b-colxx xxs="6" sm="4" md="3" lg="3">-->
<!--          <icon-card :title="$t('dashboards.completed-orders')" icon="iconsminds-basket-coins" :value=32 />-->
<!--        </b-colxx>-->
<!--        <b-colxx xxs="6" sm="4" md="3" lg="3">-->
<!--          <icon-card :title="$t('dashboards.refund-requests')" icon="iconsminds-arrow-refresh" :value=74 />-->
<!--        </b-colxx>-->
<!--        <b-colxx xxs="6" sm="4" md="3" lg="3">-->
<!--          <icon-card :title="$t('dashboards.new-comments')" icon="iconsminds-mail-read" :value=25 />-->
<!--        </b-colxx>-->
<!--    </b-row>-->


<!--    <b-row>-->

<!--      <b-colxx xxs="12">-->
<!--        <h3 class="mb-4 card-title">Blog</h3>-->
<!--      </b-colxx>-->
<!--      <b-colxx xxs="12">-->
<!--        <b-card class="d-flex flex-row mb-3" no-body>-->
<!--          <router-link to="?" class="d-flex">-->
<!--            <img alt="Thumbnail" src="/assets/img/chocolate-cake-thumb.jpg" class="list-thumbnail responsive border-0" />-->
<!--          </router-link>-->
<!--          <div class="pl-2 d-flex flex-grow-1 min-width-zero">-->
<!--            <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">-->
<!--              <router-link to="?" class="w-40 w-sm-100">-->
<!--                <p class="list-item-heading mb-1 truncate">Chocolate Cake</p>-->
<!--              </router-link>-->
<!--              <p class="mb-1 text-muted text-small w-15 w-sm-100">Cakes</p>-->
<!--              <p class="mb-1 text-muted text-small w-15 w-sm-100">09.04.2018</p>-->
<!--&lt;!&ndash;              <div class="w-15 w-sm-100"><b-badge variant="primary" pill >PROCESSED</b-badge></div>&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--        </b-card>-->
<!--      </b-colxx>-->

<!--      <b-colxx xxs="12">-->
<!--        <b-card class="d-flex flex-row mb-3" no-body>-->
<!--          <router-link to="?" class="d-flex">-->
<!--            <img alt="Thumbnail" src="/assets/img/chocolate-cake-thumb.jpg" class="list-thumbnail responsive border-0" />-->
<!--          </router-link>-->
<!--          <div class="pl-2 d-flex flex-grow-1 min-width-zero">-->
<!--            <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">-->
<!--              <router-link to="?" class="w-40 w-sm-100">-->
<!--                <p class="list-item-heading mb-1 truncate">Chocolate Cake</p>-->
<!--              </router-link>-->
<!--              <p class="mb-1 text-muted text-small w-15 w-sm-100">Cakes</p>-->
<!--              <p class="mb-1 text-muted text-small w-15 w-sm-100">09.04.2018</p>-->
<!--&lt;!&ndash;              <div class="w-15 w-sm-100"><b-badge variant="primary" pill >PROCESSED</b-badge></div>&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--        </b-card>-->
<!--      </b-colxx>-->

<!--      <b-colxx xxs="12">-->
<!--        <b-card class="d-flex flex-row mb-5" no-body>-->
<!--          <router-link to="?" class="d-flex">-->
<!--            <img alt="Thumbnail" src="/assets/img/chocolate-cake-thumb.jpg" class="list-thumbnail responsive border-0" />-->
<!--          </router-link>-->
<!--          <div class="pl-2 d-flex flex-grow-1 min-width-zero">-->
<!--            <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">-->
<!--              <router-link to="?" class="w-40 w-sm-100">-->
<!--                <p class="list-item-heading mb-1 truncate">Chocolate Cake</p>-->
<!--              </router-link>-->
<!--              <p class="mb-1 text-muted text-small w-15 w-sm-100">Cakes</p>-->
<!--              <p class="mb-1 text-muted text-small w-15 w-sm-100">09.04.2018</p>-->
<!--&lt;!&ndash;              <div class="w-15 w-sm-100"><b-badge variant="primary" pill >PROCESSED</b-badge></div>&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--        </b-card>-->
<!--      </b-colxx>-->
<!--    </b-row>-->

<!--    <b-row>-->
<!--      <b-colxx xs="12">-->
<!--        <h3>Nhà phát triển</h3>-->
<!--      </b-colxx>-->

<!--      <b-colxx md="6" sm="6" lg="4" xxs="12">-->
<!--        <b-card class="mb-4 text-center">-->
<!--          <router-link to="?" >-->
<!--            <img  src="/assets/img/profile-pic-l.jpg" alt="Card image cap" class="img-thumbnail list-thumbnail rounded-circle border-0 mb-4" />-->
<!--            <h6 class="mb-1 card-subtitle">Sarah Kortney</h6>-->
<!--            <p class="text-muted text-small mb-4">Executive Director</p>-->
<!--          </router-link>-->
<!--          <b-button size="sm" variant="outline-primary">Edit</b-button>-->
<!--        </b-card>-->
<!--      </b-colxx>-->

<!--      <b-colxx md="6" sm="6" lg="4" xxs="12">-->
<!--        <b-card class="mb-4 text-center">-->
<!--          <router-link to="?" >-->
<!--            <img  src="/assets/img/profile-pic-l.jpg" alt="Card image cap" class="img-thumbnail list-thumbnail rounded-circle border-0 mb-4" />-->
<!--            <h6 class="mb-1 card-subtitle">Sarah Kortney</h6>-->
<!--            <p class="text-muted text-small mb-4">Executive Director</p>-->
<!--          </router-link>-->
<!--          <b-button size="sm" variant="outline-primary">Edit</b-button>-->
<!--        </b-card>-->
<!--      </b-colxx>-->

<!--      <b-colxx md="6" sm="6" lg="4" xxs="12">-->
<!--        <b-card class="mb-4 text-center">-->
<!--          <router-link to="?" >-->
<!--            <img  src="/assets/img/profile-pic-l.jpg" alt="Card image cap" class="img-thumbnail list-thumbnail rounded-circle border-0 mb-4" />-->
<!--            <h6 class="mb-1 card-subtitle">Sarah Kortney</h6>-->
<!--            <p class="text-muted text-small mb-4">Executive Director</p>-->
<!--          </router-link>-->
<!--          <b-button size="sm" variant="outline-primary">Edit</b-button>-->
<!--        </b-card>-->
<!--      </b-colxx>-->
<!--    </b-row>-->
  </div>

</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import courseService from '../../services/CourseService'
  import IconCard from '@/components/Cards/IconCard'

  export default {
    components: {
      swiper,
      swiperSlide,
      ResizeObserver,
      IconCard,
    },
    data() {
      return {
        courses: [],
        swiperInfiniteOption: {
          slidesPerView: 4,
          loop: true,
        },
      }
    },
    async mounted () {
      this.courses = await courseService.index()
    }
  }
</script>

<style scoped>

</style>
