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
        <div class="text-right form-group">
          <button class="btn btn-primary"><i class="fa fa-plus"></i> Add new</button>
        </div>
      </b-colxx>
      <b-colxx xxs="12">
        <b-card class="mb-4">
          <vuetable
            ref="vuetable"
            :api-url="getApi()"
            :fields="fields"
            pagination-path
            @vuetable:pagination-data="onPaginationData"
          >
            <template slot="image" scope="props">
                <img :src="props.rowData.small_thumb" alt="">
            </template>
            <template slot="actions" scope="props">
              <div class="table-button-container text-right">
                <router-link :to="`/listen/${props.rowData.id}`" class="btn btn-xs btn-primary">
                  Update
                </router-link>
                <router-link :to="`/read/${props.rowData.id}`" class="btn btn-xs btn-danger">
                  Delete
                </router-link>
              </div>
            </template>
          </vuetable>
          <vuetable-pagination-bootstrap
            ref="pagination"
            @vuetable-pagination:change-page="onChangePage"
          ></vuetable-pagination-bootstrap>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
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
          text: 'Lessons',
          to: '/administrator/lessons',
        }, {
          text: 'List',
          active: true
        },],
        fields: [
          '__slot:image',
          {
            name: 'name',
            title: 'Lesson',
          },
          '__slot:actions'
        ],
        lessons: []
      }
    },
    async mounted () {
      this.lessons = await FactoryService.request('CrazyService', 'admin').index()
      console.log(this.lessons)
    },
    methods: {
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      getApi () {
        const api = `/api/v1/admin/crazies`
        return FactoryService.request('BaseService')
          .url(api)
      },
    }
  }
</script>

<style scoped>

</style>
