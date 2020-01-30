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

        <b-card class="mb-4" :title="read.name">
            <div class="d-flex flex-row mb-0">
                <img :src="read.img" :alt="read.name" class="list-thumbnail border-0"/>
                <b-badge variant="" pill class="position-absolute badge-top-right">Hot</b-badge>
                <div class="pl-3 pt-2 pr-2 pb-2">
                    <div class="pr-4">
                        <h3></h3>
                        <p class="text-muted mb-1 text-small">{{ read.description }}</p>
                    </div>
                </div>
            </div>
        </b-card>

        <b-card class="mb-3" title="Play & listen">
            <b-row class="form-group">
                <b-colxx xxs="12">
                    <audio id="audio" ref="audio" v-bind:src="read.audio" type="audio/mpeg" controls preload>
                        Your browser does not support the audio tag.
                    </audio>
                </b-colxx>
            </b-row>
        </b-card>

        <b-card class="mb-4" title="Sort sentence">
            <b-row>
                <b-colxx xxs="6">
                    <h4 class="form-group">English</h4>
                    <draggable type="ul" class="list-unstyled" v-model="ens">
                        <li
                                v-bind:class="{ 'text-danger': result[key] && !result[key].is_correct, 'text-success': result[key] && result[key].is_correct }"
                                v-for="(en, key) in ens"><p>{{key + 1}}, {{en.sentence}}</p>
                        </li>
                    </draggable>
                </b-colxx>

                <b-colxx xxs="6">
                    <h4 class="form-group">Vietnamese</h4>
                    <draggable type="ul" class="list-unstyled" v-model="vis">
                        <li
                                v-bind:class="{ 'text-danger': result[key] && !result[key].is_correct, 'text-success': result[key] && result[key].is_correct }"
                                v-for="(vi, key) in vis"><p>{{key + 1}}, {{vi.meaning}}</p></li>
                    </draggable>
                </b-colxx>

            </b-row>
            <b-row>
                <b-colxx xxs="12">
                    <button @click="submit()" class="btn btn-primary btn-sm">Submit</button>
                    <!--          <button class="btn btn-primary btn-sm" v-shortkey="['ctrl', 'q']" @shortkey="back()">Open</button>-->
                    <!--          <button class="btn btn-primary btn-sm" v-shortkey="['ctrl', 'w']" @shortkey="play()">Open</button>-->
                    <!--          <button class="btn btn-primary btn-sm" v-shortkey="['ctrl', 'e']" @shortkey="next()">Open</button>-->
                </b-colxx>
            </b-row>
        </b-card>

    </div>
</template>

<script>
import FactoryService from '../../../services/FactoryService'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import draggable from 'vuedraggable'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    Vuetable,
    draggable
  },
  data () {
    return {
      ens: [],
      vis: [],
      colors: {},
      result: {},
      id: this.$route.params.id,
      items: [{
        text: 'Home',
        to: '/english'
      }, {
        text: 'Sessions',
        to: `/courses/${this.$route.params.id}`
      }, {
        text: 'Read',
        active: true
      }],
      track: {}
    }
  },
  computed: {
    ...mapGetters(['read'])
  },
  async mounted () {
    await this.getRead({ id: this.id })
    this.ens = this.read.ens
    this.vis = this.read.vis
  },
  methods: {
    ...mapActions(['getRead']),
    async submit () {
      const params = {
        sentences: this.ens,
        meanings: this.vis
      }

      const res = await FactoryService.request('TestService').read(this.$route.params.id, params)
      this.$notify('info', 'Result test of you', `Score is ${res.score}/${res.result.length} `, {
        duration: 1300,
        permanent: false
      })
      this.result = res.result
    },
    play () {
      if (this.$refs.audio.paused === true) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    },
    next () {
      this.$refs.audio.currentTime = this.$refs.audio.currentTime + 5
    },
    back () {
      this.$refs.audio.currentTime -= 5
    }
  }
}
</script>

<style scoped>

</style>
