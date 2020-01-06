<template>
  <b-row>
    <b-colxx xxs="12">
       <span>
        <h1>Users</h1>
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
          <template slot="actions" scope="props">
            <!--            <span class="btn btn-xs btn-outline-danger">-->
            <!--                  <i class="simple-icon-trash"></i>-->
            <!--                </span>-->
            <span @click="disable(props.rowData.id)" class="btn btn-xs btn-outline-danger"
                  v-if="props.rowData.is_active">
                  <i class="simple-icon-ban"></i> Disable
                </span>
            <span @click="enable(props.rowData.id)" class="btn btn-xs btn-outline-success"
                  v-if="!props.rowData.is_active">
                  <i class="iconsminds-yes"></i> Enable
                </span>
            <!--            <span class="btn btn-xs btn-outline-primary">-->
            <!--                  <i class="simple-icon-refresh"></i>-->
            <!--                </span>-->
          </template>
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
          text: 'Users',
          to: '/administrator/users',
        }, {
          text: 'List',
          active: true
        },
        ],
        fields: [
          // '__slot:image',
          {
            name: 'email',
            title: 'Email',
          },
          {
            name: 'first_name',
            title: 'First name',
          },
          {
            name: 'last_name',
            title: 'Last name',
          },
          {
            name: 'created_at',
            title: 'Created at',
          },
          {
            name: 'is_active',
            title: 'Active',
          },
          '__slot:actions'
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
        const api = `/api/v1/admin/users`
        return FactoryService.request('BaseService')
          .url(api)
      },
      async disable (id) {
        let options = {
          okText: 'Yes',
          cancelText: 'No',
        }

        this.$dialog
          .confirm('Are you sure?', options)
          .then(async (dialog) => {
            try {
              await FactoryService.request('UserService', 'admin').update(id, { is_active: 0 })
              this.$notify('success', 'Success', `Disable successfully`, { duration: 1300, permanent: false })
              this.$refs.vuetable.refresh()
            } catch (e) {
              this.$notify('error', 'Error', `Disable fail`, { duration: 1300, permanent: false })
            }
          })
      },
      async enable (id) {
        let options = {
          okText: 'Yes',
          cancelText: 'No',
        }

        this.$dialog
          .confirm('Are you sure?', options)
          .then(async (dialog) => {
            try {
              await FactoryService.request('UserService', 'admin').update(id, { is_active: 1 })
              this.$notify('success', 'Success', `Enable successfully`, { duration: 1300, permanent: false })
              this.$refs.vuetable.refresh()
            } catch (e) {
              this.$notify('error', 'Error', `Enable fail`, { duration: 1300, permanent: false })
            }
          })
      }
    }
  }
</script>

<style scoped>

</style>
