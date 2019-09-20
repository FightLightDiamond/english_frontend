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
            <router-link tag="a" :to="`/english/course/${item.id}`" class="d-block position-relative">
              <img :src="item.img" :alt="item.name" class="list-thumbnail border-0"/>
            </router-link>
            <div class="pl-3 pt-2 pr-2 pb-2">
              <router-link tag="a" :to="`/english/course/${item.id}`">
                <p class="list-item-heading">{{ item.name }}</p>
                <div class="pr-4">
                  <p class="text-muted mb-1 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam amet cum delectus deserunt doloremque eius id illo illum incidunt ipsam, mollitia odio quo
                    rerum sequi soluta, tenetur, ullam veniam voluptate.{{ item.description }}</p>
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
  import axios from 'axios'

  export default {
    data () {
      return {
        courses: [],
        items:  [{
          text: 'Home',
          link: '#',
        }, {
          text: 'Sessions',
          link: '/english/courses',
        }, {
          text: 'List',
          active: true
        }]
      }
    },
    created () {
      axios.get('http://cuongpm.viralsoft.vn/api/crazy-courses').then((res) => {
        this.courses = res.data.data
      })
    },
  }
</script>

<style scoped>

</style>
