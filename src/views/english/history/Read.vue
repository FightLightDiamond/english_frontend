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
          <select name="" class="form-control">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </b-colxx>
      </b-row>
    </b-card>
    <b-card :title="$t('History')">
      <vuetable
        ref="vuetable"
        :api-url="history.apiUrl"
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
  import historyService from '../../../services/HistoryService'
  import testService from '../../../services/TestService'
  import courseService from '../../../services/CourseService'
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePaginationBootstrap from '@/components/Common/VuetablePaginationBootstrap'
  import draggable from 'vuedraggable'
  import BaseService from '../../../services/BaseService'
  import FactoryService from '../../../services/FactoryService'

  export default {
    components: {
      Vuetable,
      VuetablePaginationBootstrap,
      draggable,
    },
    data () {
      return {
        course_id: null,
        courses: {},
        items: [{
          text: 'Home',
          to: '#',
        }, {
          text: 'History',
          to: '/histories',
        }, {
          text: 'Read',
          active: true
        }],
        history: {
          apiUrl: FactoryService.service('BaseService').url('/api/crazy-read-histories'),
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
      alert(FactoryService.service('BaseService').url('/api/crazy-read-histories'))
      FactoryService.service('CourseService').index().then((res) => {
        this.courses = res;
        // console.log(this.courses);
      })
      // const res = await historyService.read(this.$route.params.id)
      // console.log(res)
    },
    methods: {
      async submit () {
        const params = {
          sentences: this.ens,
          meanings: this.vis,
        }

        const res = await testService.read(this.$route.params.id, params)
        this.$notify('info', 'Result test of you', `Score is ${res.score}/${res.result.length} `, {
          duration: 13000,
          permanent: false
        })
        this.result = res.result
      },
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      onChangeCourse() {
        alert(this.course_id)
      }
    }
  }
</script>

<style scoped>

</style>
