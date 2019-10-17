<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
       <span>
        <h1>Remind</h1>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <b-breadcrumb :items="items"/>
        </b-nav>
      </span>
        <div class="separator mb-5">
        </div>
      </b-colxx>
    </b-row>

    <b-colxx xxs="4" offset="4">
      <b-card class="mb-3" title="Set time">
        <p>Remind to study crazy english per day. Please set time to learn</p>
        <b-row class="form-group">
          <b-colxx xxs="6" class="form-group">
            <label>Hour</label>
            <select name="" class="form-control">
              <option v-for="index in 24" :key="index" :value="index - 1">{{index - 1}}</option>
            </select>
          </b-colxx>
          <b-colxx xxs="6" class="form-group">
            <label>Minutes</label>
            <select name="" class="form-control">
              <option v-for="index in 60" :key="index" :value="index - 1">{{index -1}}</option>
            </select>
          </b-colxx>
          <b-colxx xxs="12" class="form-group text-center">
            <button class="btn btn-primary btn-sm">Submit</button>
            <button class="btn btn-danger btn-sm">Clear</button>
          </b-colxx>
        </b-row>
      </b-card>
    </b-colxx>

  </div>
</template>

<script>
  // import FactoryService from '../../../services/FactoryService'
  import Vuetable from 'vuetable-2/src/components/Vuetable'

  export default {
    components: {
      Vuetable
    },
    data () {
      return {
        id: this.$route.params.id,
        lesson: [],
        items: [{
          text: 'Home',
          to: '/english',
        }, {
          text: 'Remind',
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
    async mounted () {
      // const res = await FactoryService.request('TestService').listen(this.id)
      // this.lesson = res
      // this.sentences = res.details
    },
  }
</script>

<style scoped>

</style>
