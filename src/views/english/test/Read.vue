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

    <b-card class="form-group" :title="$t(crazy.name)">
      <b-row class="form-group">
        <b-colxx xxs="12">
          <audio :src="crazy.audio" autoplay controls></audio>
        </b-colxx>
      </b-row>
    </b-card>

    <b-card class="mb-12" >
      <b-row>
        <b-colxx xxs="6">
          <h4>English</h4>
          <draggable type="ul" class="list-unstyled" v-model="ens">
            <li v-for="(en, key) in ens"><p>{{key + 1}}, {{en.sentence}}</p></li>
          </draggable>
        </b-colxx>

        <b-colxx xxs="6">
          <h4>Vietnamese</h4>
          <draggable type="ul" class="list-unstyled">
            <li v-for="(vi, key) in vis"><p>{{key + 1}}, {{vi.meaning}}</p></li>
          </draggable>
        </b-colxx>

      </b-row>
      <b-row>
        <b-colxx xxs="12">
          <button class="btn btn-primary btn-sm">Submit</button>
        </b-colxx>
      </b-row>
    </b-card>

  </div>
</template>

<script>
  import axios from 'axios'
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import draggable from 'vuedraggable'

  export default {
    components: {
      Vuetable,
      draggable,
    },
    data () {
      return {
        crazy: [],
        ens: [],
        vis: [],
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
      }
    },
    created () {
      axios.get(`http://cuongpm.viralsoft.vn/api/test/crazy-read/${this.$route.params.id}`).then((res) => {
        this.lesson = res.data.data
        this.crazy = res.data.data.crazy
        this.ens = res.data.data.ens
        this.vis = res.data.data.vis
        console.log(this.lesson)
      })
    },
  }
</script>

<style scoped>

</style>
