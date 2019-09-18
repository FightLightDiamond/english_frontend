<template>
  <div>
    <!--    <b-card class="mb-4" :title="$t('table.bootstrap-hoverable')">-->
    <b-card class="mb-4" :title="$t(`${course.name}`)">
      <p>{{course.description}}</p>
      <vuetable ref="vuetable"
                :api-url="url"
                :fields="fields"
                @vuetable:loading="onLoading"
                @vuetable:loaded="onLoaded"
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
        url: `${API}/api/crazy-course/${this.$route.params.id}`,
        items: [],
        course: {
          name: '',
          description: '',
        },
        fields: [
          {
            name: 'name',
            title: '<span class="orange glyphicon glyphicon-user"></span> Lession',
          },
          '__slot:actions'
        ],
      }
    },
    created () {
      // axios.get('http://localhost:8005/api/crazy-course/1').then((res) => {
      //   this.items = res.data.data
      //   this.course = res.data.data.course
      //   console.log(res.data)
      //   console.log(items)
      // })
    },
    methods: {
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      },
      editRow (rowData) {
        alert('You clicked edit on' + JSON.stringify(rowData))
      },
      deleteRow (rowData) {
        alert('You clicked delete on' + JSON.stringify(rowData))
      },
      onLoading () {
        console.log('loading... show your spinner here')
      },
      onLoaded () {
        console.log('loaded! .. hide your spinner here')
      }
    }
  }
</script>

<style scoped>

</style>
