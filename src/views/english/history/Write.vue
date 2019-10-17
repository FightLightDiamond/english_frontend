<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
       <span>
        <h1>History</h1>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <b-breadcrumb :items="items"/>
        </b-nav>
      </span>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>

    <b-card :title="$t('Filter')" class="mb-4">
      <b-row>
        <b-colxx xxs="6">
          <label>Course</label>
          <select @change="onChangeCourse()" v-model="course_id" class="form-control">
            <option value="">All</option>
            <option v-for="course in courses" :value="course.id">{{course.name}}</option>
          </select>
        </b-colxx>
        <b-colxx xxs="6">
          <label>Lesson</label>
          <select @change="onChangeLesson()" v-model="lesson_id" class="form-control">
            <option value="">All</option>
            <option v-for="lesson in lessons" :value="lesson.id">{{lesson.name}}</option>
          </select>
        </b-colxx>
      </b-row>
    </b-card>

    <b-card :title="$t('History')">
      <vuetable
        ref="vuetable"
        :api-url="getApi()"
        :fields="history.fields"
        pagination-path
        @vuetable:pagination-data="onPaginationData"
      ></vuetable>
      <vuetable-pagination-bootstrap
        ref="pagination"
        @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination-bootstrap>
    </b-card>

  </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePaginationBootstrap from '@/components/Common/VuetablePaginationBootstrap'
  import draggable from 'vuedraggable'
  import FactoryService from '../../../services/FactoryService'

  export default {
    components: {
      Vuetable,
      VuetablePaginationBootstrap,
      draggable,
    },
    data () {
      return {
        course_id: '',
        lesson_id: '',
        courses: [],
        lessons: [],
        items: [{
          text: 'Home',
          to: '/english',
        }, {
          text: 'History',
          to: '/histories',
        }, {
          text: 'Read',
          active: true
        }],
        history: {
          fields: [
            {
              name: 'course',
              title: 'Course',
            },
            {
              name: 'lesson',
              title: 'Lesson',
            },
            {
              name: 'score',
              sortField: 'score',
              title: 'Score',
            },
            {
              name: 'created_at',
              sortField: 'created_at',
              title: 'date',
            }
          ]
        },
      }
    },
    async mounted () {
      this.getCourses()
    },
    watch: {
      apiUrl (newVal, oldVal) {
        this.$refs.vuetable.refresh()
      }
    },
    methods: {
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      async onChangeCourse () {
        const params = {
          crazy_course_id: this.course_id
        }
        this.lessons = await FactoryService.request('CrazyService').index(params)
        this.lesson_id = ''
        this.apiUrl = this.getApi()
      },
      async onChangeLesson () {
        this.apiUrl = this.getApi()
      },
      getCourses () {
        FactoryService.request('CourseService').index().then((res) => {
          this.courses = res
        })
      },
      getApi () {
        const api = `/api/crazy-write-histories?crazy_course_id=${this.course_id}&crazy_id=${this.lesson_id}`
        return FactoryService.request('BaseService')
          .url(api)
      },
      async getData () {
        return await FactoryService.request('HistoryService').read({})
      }
    }
  }
</script>

<style scoped>

</style>
