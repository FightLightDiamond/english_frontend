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
            <select v-model="form.hour" class="form-control">
              <option value=""></option>
              <option v-for="index in 24" :key="index" :value="index - 1">{{index - 1}}</option>
            </select>
          </b-colxx>
          <b-colxx xxs="6" class="form-group">
            <label>Minutes</label>
            <select v-model="form.minute" class="form-control">
              <option value=""></option>
              <option v-for="index in 60" :key="index" :value="index - 1">{{index -1}}</option>
            </select>
          </b-colxx>
          <b-colxx xxs="12" class="form-group text-center">
            <button @click="remind()" class="btn btn-primary btn-sm">Submit</button>
          </b-colxx>
        </b-row>
      </b-card>
    </b-colxx>

  </div>
</template>

<script>
  // import FactoryService from '../../../services/FactoryService'
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import FactoryService from '../../services/FactoryService'

  export default {
    components: {
      Vuetable
    },
    data () {
      return {
        id: this.$route.params.id,
        form: {
          minute: null,
          hour: null
        },
        items: [{
          text: 'Home',
          to: '/english',
        }, {
          text: 'Remind',
          active: true
        }],
      }
    },
    async mounted () {
      const res = await FactoryService.request('RemindService').index()
      this.form.hour = res.hour
      this.form.minute = res.minute
    },
    methods: {
      remind () {
        console.log(this.form)

        FactoryService.request('RemindService').create(this.form)

        this.$notify('success', 'Remind Success', `Remind for you at ${this.form.hour < 10 ? '0' + this.form.hour : this.form.hour} : ${this.form.minute < 10 ? '0' + this.form.minute : this.form.minute} per day `, {
          duration: 13000,
          permanent: false
        })
      }
    }
  }
</script>

<style scoped>

</style>
