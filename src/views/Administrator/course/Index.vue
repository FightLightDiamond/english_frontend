<template>
  <b-row>
    <b-colxx xxs="12">
       <span>
        <h1>Courses</h1>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <b-breadcrumb :items="items"/>
        </b-nav>
      </span>
      <div class="separator mb-5"></div>
    </b-colxx>
    <b-colxx xxs="12">
      <div class="form-group text-right">
        <router-link :to="`/administrator/courses/create`" class="btn btn-sm btn-outline-primary">
          <i class="simple-icon-plus"></i> Create
        </router-link>
      </div>
    </b-colxx>
    <b-colxx xxs="12">
      <b-card>
        <vuetable style="margin-top: -30px"
                  ref="vuetable"
                  :api-url="getApi()"
                  :fields="fields"
        >
          <template slot="image" scope="props">
            <div class="d-flex flex-row">
              <img :src="props.rowData.small_thumb" :alt="props.rowData.name" class="list-thumbnail border-0"/>
              <div class="pl-3 pt-2 pr-2 pb-2">
                <p class="list-item-heading">{{ props.rowData.name }}</p>
                <div class="pr-4">
                  <p class="text-muted mb-1 text-small">{{ props.rowData.description }}</p>
                </div>
                <div class="text-primary text-small font-weight-medium d-none d-sm-block">
                  {{ props.rowData.created_at }}
                </div>
              </div>
            </div>
          </template>
          <template slot="actions" scope="props">
            <router-link :to="`/administrator/courses/${props.rowData.id}/update`"
                         class="btn btn-xs btn-outline-primary form-group">
              <i class="simple-icon-pencil"></i>
            </router-link>
            <span class="btn btn-xs btn-outline-danger">
                  <i class="simple-icon-trash"></i>
                </span>
          </template>
        </vuetable>
        <!--        <vuetable-pagination-bootstrap-->
        <!--          ref="pagination"-->
        <!--          @vuetable-pagination:change-page="onChangePage"-->
        <!--        ></vuetable-pagination-bootstrap>-->
      </b-card>
    </b-colxx>
  </b-row>
</template>

<script>
  import FactoryService from '../../../services/FactoryService'
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import VuetablePaginationBootstrap from '@/components/Common/VuetablePaginationBootstrap'

  export default {
    components: {
      Vuetable,
      VuetablePaginationBootstrap
    },
    data () {
      return {
        items: [{
          text: 'Dashboard',
          to: '/administrator/dashboard',
        }, {
          text: 'Courses',
          to: '/administrator/courses',
        }, {
          text: 'List',
          active: true
        },
        ],
        fields: [
          '__slot:image',
          // {
          //   name: 'name',
          //   title: 'Course',
          // },
          '__slot:actions'
        ],
        course: [],
      }
    },
    methods: {
      // onPaginationData (paginationData) {
      //   this.$refs.pagination.setPaginationData(paginationData)
      // },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      getApi () {
        const api = `/api/v1/admin/crazy-courses`
        return FactoryService.request('BaseService')
          .url(api)
      }
    }
  }
</script>

<style scoped>

</style>
