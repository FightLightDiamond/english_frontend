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
        <b-card class="mb-4" :title="$t(`${course.name}`)">
          <p>{{course.description}}</p>

          <vuetable ref="vuetable"
                    :api-mode="false"
                    :data="lessons"
                    :fields="fields"
          >
            <template slot="actions" scope="props">
              <div class="table-button-container text-right">
                <router-link :to="`/english/listen/${props.rowData.id}`" class="btn btn-xs btn-primary">
                  Listen
                </router-link>
                <router-link :to="`/english/read/${props.rowData.id}`" class="btn btn-xs btn-primary">
                  Read
                </router-link>
                <router-link :to="`/english/write/${props.rowData.id}`" class="btn btn-xs btn-primary">
                  Write
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
  import axios from 'axios'
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePaginationBootstrap from '@/components/Common/VuetablePaginationBootstrap'

  const API = 'http://localhost:8005'
  export default {
    components: {
      Vuetable,
      VuetablePaginationBootstrap
    },
    data () {
      return {
        items: [{
          text: 'Home',
          link: '/',
        }, {
          text: 'Sessions',
          link: '/english/courses',
        }, {
          text: 'Lessons',
          active: true
        },
        ],
        url: `${API}/api/crazy-courses/${this.$route.params.id}`,
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
    created () {
      axios.get('http://localhost:8005/api/crazy-courses/1').then((res) => {
        this.lessons = res.data.data.crazies
        this.course = res.data.data
      })
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
