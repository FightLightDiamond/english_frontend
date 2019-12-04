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
        <b-row class="form-group">
        <b-colxx xxs="6">
            <b-form-group :label="$t('Email')">
              <b-form-input @change="search()" v-model="filter.email" class="input-group-sm" />
            </b-form-group>
        </b-colxx>
        <b-colxx xxs="6">
          <label>Course</label>
          <select @change="search()" v-model="filter.is_active" class="form-control">
            <option value="">All</option>
            <option value="0">Inactive</option>
            <option value="1">Active</option>
          </select>
        </b-colxx>
        </b-row>
        <vuetable style="margin-top: -30px"
                  ref="vuetable"
                  :api-url="apiUrl"
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
        filter: {
          email: '',
          is_active: '',
        },
        apiUrl: '',
        items: [{
          text: 'Dashboard',
          to: '/administrator/dashboard',
        }, {
          text: 'Users',
          to: '/administrator/users',
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
    async mounted () {
      this.apiUrl = this.getApi()
    },
    methods: {
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      getApi (params = '') {
        const api = `/api/v1/admin/users/${params}`
        return FactoryService.request('BaseService')
          .url(api)
      },
      search ()
      {
        this.apiUrl = this.getApi(`?email=${this.filter.email}&is_active=${this.filter.is_active}`)
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
              this.$notify('success', 'Success', `Disable successfully`, { duration: 13000, permanent: false })
              this.$refs.vuetable.refresh()
            } catch (e) {
              this.$notify('error', 'Error', `Disable fail`, { duration: 13000, permanent: false })
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
              this.$notify('success', 'Success', `Enable successfully`, { duration: 13000, permanent: false })
              this.$refs.vuetable.refresh()
            } catch (e) {
              this.$notify('error', 'Error', `Enable fail`, { duration: 13000, permanent: false })
            }
          })
      }
    }
  }
</script>

<style scoped>

</style>
