<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
       <span>
        <h1>Admins</h1>
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
          <router-link :to="`/administrator/admins/create`" class="btn btn-sm btn-outline-primary">
            <i class="simple-icon-plus"></i> {{ $t('Add new') }}
          </router-link>

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
            <template slot="actions" scope="props">
              <span @click="disable(props.rowData.id)" class="btn btn-xs btn-outline-danger"
                    v-if="props.rowData.is_active">
                  <i class="simple-icon-ban"></i> Disable
                </span>
              <span @click="enable(props.rowData.id)" class="btn btn-xs btn-outline-success"
                    v-if="!props.rowData.is_active">
                  <i class="iconsminds-yes"></i> Enable
                </span>
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
        form: {
          crazy_course_id: null
        },
        items: [{
          text: 'Dashboard',
          to: '/administrator/dashboard',
        }, {
          text: 'Admins',
          to: '/administrator/admins',
        }, {
          text: 'List',
          active: true
        },],
        fields: [
          '__slot:image',
          {
            name: 'email',
            title: 'Email',
          },
          {
            name: 'name',
            title: 'Name',
          },
          '__slot:actions'
        ],
        courses: [],
      }
    },
    async mounted () {
    },
    methods: {
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      getApi () {
        const api = `/api/v1/admin/admins`
        return FactoryService.request('BaseService')
          .url(api)
      },
      async disable (id) {
        await FactoryService.request('AdminService', 'admin').update(id, { is_active: 0 })
        this.$notify('success', 'Success', `Disable successfully`, { duration: 13000, permanent: false })
        this.$refs.vuetable.refresh()
      },
      async enable (id) {
        await FactoryService.request('AdminService', 'admin').update(id, { is_active: 1 })
        this.$notify('success', 'Success', `Enable successfully`, { duration: 13000, permanent: false })
        this.$refs.vuetable.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
