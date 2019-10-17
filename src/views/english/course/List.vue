<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
       <span>
        <h1>Sections</h1>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <b-breadcrumb :items="items"/>
        </b-nav>
      </span>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card title="Crazy sections">
          <div class="d-flex flex-row mb-3" v-for="item in courses">
            <router-link tag="a" :to="`/courses/${item.id}`" class="d-block position-relative">
              <img :src="item.img" :alt="item.name" class="list-thumbnail border-0"/>
            </router-link>
            <div class="pl-3 pt-2 pr-2 pb-2">
              <router-link tag="a" :to="`/courses/${item.id}`">
                <p class="list-item-heading">{{ item.name }}</p>
                <div class="pr-4">
                  <p class="text-muted mb-1 text-small">{{ item.description }}</p>
                </div>
              </router-link>
            </div>
          </div>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
  import FactoryService from '../../../services/FactoryService'

  export default {
    data () {
      return {
        courses: [],
        items: [{
          text: 'Home',
          to: '#',
        }, {
          text: 'Sessions',
          to: '/courses',
        }, {
          text: 'List',
          active: true
        }]
      }
    },
    async mounted () {
      this.courses = await FactoryService.request('CourseService').index()
    },
  }
</script>

<style scoped>

</style>
