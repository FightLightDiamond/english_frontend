<template>
  <b-row>
    <b-colxx xxs="12">
       <span>
        <h1>Contracts</h1>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <b-breadcrumb :items="items"/>
        </b-nav>
      </span>
      <div class="separator mb-5"></div>
    </b-colxx>

    <b-colxx xxs="12">
      <b-card>
        <vuetable style="margin-top: -30px"
                  ref="vuetable"
                  :api-url="getApi()"
                  :fields="fields"
                  pagination-path
                  @vuetable:pagination-data="onPaginationData"
        >
        </vuetable>
        <vuetable-pagination-bootstrap
          ref="pagination"
          @vuetable-pagination:change-page="onChangePage"
        ></vuetable-pagination-bootstrap>
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
          text: 'Contracts',
          to: '/administrator/contacts',
        }, 
        ],
        fields: [
          // '__slot:image',
          {
            name: 'email',
            title: 'Email',
          },
          {
            name: 'phone_number',
            title: 'Phone number',
          },
          {
            name: 'message',
            title: 'Message',
          },
          {
            name: 'created_at',
            title: 'Created at',
          },
        ],
        course: [],
      }
    },
    methods: {
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      getApi () {
        const api = `/api/v1/admin/contacts`
        return FactoryService.request('BaseService')
          .url(api)
      }
    }
  }
</script>

<style scoped>

</style>
