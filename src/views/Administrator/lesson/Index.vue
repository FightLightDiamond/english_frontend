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
          <router-link :to="`/administrator/lessons/create`" class="btn btn-sm btn-outline-primary">
            <i class="simple-icon-plus"></i> {{ $t('Add new') }}
          </router-link>

        </div>
      </b-colxx>

      <b-colxx xxs="12">
        <b-card class="mb-4">
          <div class="">
            <label>Course</label>
            <select @change="changeCourse()" v-model="form.crazy_course_id" class="form-control">
              <option value=""></option>
              <option :value="course.id" v-for="course in courses">{{course.name}}</option>
            </select>
          </div>
          <vuetable
            ref="vuetable"
            :api-url="apiUrl"
            :fields="fields"
            pagination-path
            @vuetable:pagination-data="onPaginationData"
          >
            <template slot="image" scope="props">
              <div class="d-flex flex-row">
                <img :src="props.rowData.small_thumb" :alt="props.rowData.name" class="list-thumbnail border-theme-1"/>
                <div class="pl-3 pt-2 pr-2 pb-2">
                  <p class="list-item-heading">{{ props.rowData.name }}</p>
                  <div class="pr-4">
                    <p class="text-muted mb-1 text-small">{{ props.rowData.description &&
                      (props.rowData.description.length > 250) ? props.rowData.description.substring(0,250) + '...' :
                      props.rowData.description }}</p>
                  </div>
                  <div class="text-primary text-small font-weight-medium d-none d-sm-block">
                    {{ props.rowData.created_at }}
                  </div>
                </div>
              </div>
            </template>
            <template slot="actions" scope="props">
              <router-link :to="`/administrator/lessons/${props.rowData.id}/update`"
                           class="btn btn-xs btn-outline-primary form-group">
                <i class="simple-icon-pencil"></i>
              </router-link>
              <span class="btn btn-xs btn-outline-danger" @click="destroy (props.rowData.id)">
                  <i class="simple-icon-trash"></i>
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
        apiUrl: '',
        form: {
          crazy_course_id: null
        },
        items: [{
          text: 'Dashboard',
          to: '/administrator/dashboard',
        }, {
          text: 'Lessons',
          to: '/administrator/lessons',
        }, ],
        fields: [
          '__slot:image',
          '__slot:actions'
        ],
        courses: [],
      }
    },
    async mounted () {
      this.courses = await FactoryService.request('CourseService', 'admin').index();
      this.apiUrl = this.getApi();
      console.log(this.courses)
    },
    methods: {
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      getApi (params = '') {
        const api = `/api/v1/admin/crazies/${params}`
        return FactoryService.request('BaseService')
          .url(api)
      },
      async destroy (id) {
        let options = {
          okText: 'Yes',
          cancelText: 'No',
        }
        this.$dialog
          .confirm('Are you sure?', options)
          .then(async (dialog) => {
            try {
              await FactoryService.request('CrazyService', 'admin').destroy(id)
              this.$notify('success', 'Success', `Delete successfully`, { duration: 13000, permanent: false })
              this.$refs.vuetable.refresh()
            } catch (e) {
              this.$notify('error', 'Success', `Delete fail`, { duration: 13000, permanent: false })
            }
          })
      },
      changeCourse ()
      {
        this.apiUrl = this.getApi(`?crazy_course_id=${this.form.crazy_course_id}`);
      }
    }
  }
</script>

<style scoped>

</style>
