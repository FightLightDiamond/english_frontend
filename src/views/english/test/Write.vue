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
          <audio :src="crazy.audio"  controls></audio>
        </b-colxx>
      </b-row>
    </b-card>

    <b-card class="mb-12" :title="$t('Listen and write')">
      <b-row>
        <b-colxx xxs="12">
            <div class="input-group input-group-sm mb-3" v-for="(en, key) in ens">
              <div class="input-group-prepend" data-toggle="tooltip" data-placement="top" :title="randEns[key].sentence">
                <span  style="width: 40px" class="input-group-text" id="inputGroup-sizing-sm">{{key + 1}}</span>
              </div>
              <input :value="en.sentence" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
            </div>
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
  import testService from '../../../services/TestService'
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import draggable from 'vuedraggable'

  export default {
    components: {
      Vuetable,
      draggable,
    },
    data () {
      return {
        crazy: {'name': '', audio: ''},
        ens: [],
        randEns: [],
        items: [{
          text: 'Home',
          link: '#ee',
        }, {
          text: 'Sessions',
          link: '/english/lesson',
        }, {
          text: 'Exercise',
          active: true
        },{
          text: 'Write',
          active: true
        },
        ],
      }
    },
    async created () {
      const res = await testService.reading(this.$route.params.id);
      this.lesson = res
      this.crazy = res.crazy
      this.ens = res.ens
      this.randEns = res.randEns
      console.log(this.lesson)
    },
  }
</script>

<style scoped>

</style>
