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

    <b-card class="mb-4" :title="lesson.name">
      <div class="d-flex flex-row mb-0">
        <img :src="lesson.img" :alt="lesson.name" class="list-thumbnail border-0"/>
        <b-badge variant="" pill class="position-absolute badge-top-right">Hot</b-badge>
        <div class="pl-3 pt-2 pr-2 pb-2">
          <div class="pr-4">
            <h3></h3>
            <p class="text-muted mb-1 text-small">{{ lesson.description }}</p>
          </div>
        </div>
      </div>
    </b-card>

    <b-card class="mb-3" title="Play & listen">
      <b-row class="form-group">
        <b-colxx xxs="12">
          <audio id="audio" ref="audio" v-bind:src="lesson.audio" type="audio/mpeg" controls preload >
            Your browser does not support the audio tag.
          </audio>
        </b-colxx>
      </b-row>
    </b-card>

    <b-card class="mb-12" :title="$t('Listen and write')">
      <b-row>
        <b-colxx xxs="12">
          <div class="input-group input-group-sm mb-3" v-for="(en, key) in ens">
            <div class="input-group-prepend" data-toggle="tooltip" data-placement="top" :title="randEns[key].sentence">
                <span style="width: 40px"
                      v-bind:class="{
                        'text-danger': result[key] && !result[key].is_correct,
                        'text-success': result[key] && result[key].is_correct,
                        'input-group-text' : true
                        }"
                      id="inputGroup-sizing-sm">{{key + 1}}</span>
            </div>
            <input v-model="en.sentence"
                   v-bind:class="{
                        'text-danger': result[key] && !result[key].is_correct,
                        'text-success': result[key] && result[key].is_correct,
                        'form-control' : true
                        }"
                   aria-label="Small"
                   aria-describedby="inputGroup-sizing-sm">
          </div>
        </b-colxx>
      </b-row>
      <b-row>
        <b-colxx xxs="12">
          <button class="btn btn-primary btn-sm" @click="submit()">Submit</button>
        </b-colxx>
      </b-row>
    </b-card>
  </div>
</template>

<script>
  import FactoryService from '../../../services/FactoryService'
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import draggable from 'vuedraggable'

  export default {
    components: {
      Vuetable,
      draggable,
    },
    data () {
      return {
        id: this.$route.params.id,
        lesson: { 'name': '', audio: '' },
        ens: [],
        randEns: [],
        result: {},
        colors: {},
        items: [{
          text: 'Home',
          to: '/english',
        }, {
          text: 'Sessions',
          to: `/courses/${this.$route.params.id}`,
        }, {
          text: 'Write',
          active: true
        }],
      }
    },
    async created () {
      const res = await FactoryService.request('TestService').write(this.id)
      this.lesson = res.crazy
      this.ens = res.ens
      this.randEns = res.randEns
      console.log(this.lesson)
    },
    methods: {
      async submit () {
        const params = {
          sentences: {},
        }

        for (let en of this.ens) {
          params.sentences[en.id] = en.sentence
        }

        const res = await FactoryService.request('TestService').written(this.id, params)
        this.$notify('info', 'Result test of you', `Score is ${res.score}/${res.result.length} `, {
          duration: 13000,
          permanent: false
        })

        this.result = res.result
      },
    }
  }
</script>

<style scoped>

</style>
