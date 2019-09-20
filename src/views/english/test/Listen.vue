<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
       <span>
        <h1>Lesson</h1>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <b-breadcrumb :items="items"/>
        </b-nav>
      </span>
        <div class="separator mb-5">
        </div>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx xxs="12">
        <h1>{{lesson.name}}</h1>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx xxs="12">
        <audio :src="lesson.audio" autoplay controls></audio>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx xxs="12" >
        <vuetable ref="vuetable" class="table-bordered table-hover"
                  :api-mode="false"
                  :data="sentences"
                  :fields="fields"
        >
        </vuetable>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  export default {
    components: {
      Vuetable
    },
    data () {
      return {
        lesson: [],
        items: [{
          text: 'Home',
          link: '#',
        }, {
          text: 'Sessions',
          link: '/english/lesson',
        }, {
          text: 'Lesson',
          active: true
        }],
        sentences: [],
        fields: [
          {
            name: 'sentence',
            title: 'English',
          },
          {
            name: 'meaning',
            title: 'Vietnamese',
          },
          '__slot:actions'
        ],
      }
    },
    created () {
      axios.get(`http://cuongpm.viralsoft.vn/api/test/crazy-listening/${this.$route.params.id}`).then((res) => {
        this.lesson = res.data.data
        this.sentences = res.data.data.details
        console.log(this.lesson)
      })
    },
  }
</script>

<style scoped>

</style>
