<template>
  <div>
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
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card title="Crazy sections" class="mb-4">
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
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      items: [{
        text: 'Home',
        to: '/english'
      }, {
        text: 'Courses',
        to: '/courses'
      } ]
    }
  },
  computed: {
    ...mapGetters(['courses'])
  },
  async mounted () {
    await this.getCourses({ type: 'getCourses' })
  },
  methods: {
    ...mapActions(['getCourses'])
  }
}
</script>

<style scoped>

</style>
