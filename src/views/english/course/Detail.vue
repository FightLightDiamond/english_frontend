<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
       <span>
        <h1>Lessons</h1>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <b-breadcrumb :items="items"/>
        </b-nav>
      </span>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4">
          <div class="d-flex flex-row mb-0">
            <img :src="course.img" :alt="course.title" class="list-thumbnail border-0"/>
            <b-badge variant="" pill class="position-absolute badge-top-right">Hot</b-badge>
            <div class="pl-3 pt-2 pr-2 pb-2">
              <p class="list-item-heading">{{ course.name }}</p>
              <div class="pr-4">
                <p class="text-muted mb-1 text-small">{{ course.description }}</p>
              </div>
              <div class="text-primary text-small font-weight-medium d-none d-sm-block">{{ course.created_at }}</div>
            </div>
          </div>
        </b-card>
      </b-colxx>

      <b-colxx xxs="12">
        <b-card class="mb-4">
          <vuetable ref="vuetable"
                    :api-mode="false"
                    :data="lessons"
                    :fields="fields"
          >
            <template slot="actions" scope="props">
              <div class="table-button-container text-right">
                <router-link :to="`/listen/${props.rowData.id}`" class="btn btn-xs btn-primary">
                  Listen
                </router-link>
                <router-link :to="`/read/${props.rowData.id}`" class="btn btn-xs btn-primary">
                  Read
                </router-link>
                <router-link :to="`/write/${props.rowData.id}`" class="btn btn-xs btn-primary">
                  Write
                </router-link>
                <router-link :to="`/speak/${props.rowData.id}`" class="btn btn-xs btn-primary">
                  Speak
                </router-link>
              </div>
            </template>
          </vuetable>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePaginationBootstrap from '@/components/Common/VuetablePaginationBootstrap'
  import FactoryService from '../../../services/FactoryService'

  export default {
    components: {
      Vuetable,
      VuetablePaginationBootstrap
    },
    data () {
      return {
        items: [{
          text: 'Home',
          to: '/',
        }, {
          text: 'Sessions',
          to: '/courses',
        }, {
          text: 'Lessons',
          active: true
        },
        ],
        id: this.$route.params.id,
        lessons: [],
        course: {
          name: '',
          description: '',
        },
        fields: [
          {
            name: 'name',
            title: '<span class="orange glyphicon glyphicon-user"></span> Lesson',
          },
          '__slot:actions'
        ],
      }
    },
    async mounted () {
      this.course = await FactoryService.request('CourseService').show(this.id, {})
      this.lessons = this.course.crazies
    },
    methods: {
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
    }
  }
</script>

<style scoped>

</style>
