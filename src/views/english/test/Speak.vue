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

      <b-colxx xxs="12">
        <audio id="audio" ref="audio" v-bind:src="lesson.audio" type="audio/mpeg" preload>
          Your browser does not support the audio tag.
        </audio>
      </b-colxx>
    </b-card>

    <b-card class="mb-12" ::title="$t(lesson.name)">
      <b-row class="form-group">
        <b-colxx xxs="6">
          <audio-recorder
            upload-url="some url"
            :time="0.7"
            :before-recording="callback"
            :pause-recording="callback"
            :after-recording="callback"
            :select-record="callback"
            :before-upload="callback"
            :successful-upload="callback"
            :failed-upload="callback"/>
        </b-colxx>

        <b-colxx xxs="6">
          <p v-for="ka in kara">{{ka}}</p>
        </b-colxx>
      </b-row>
    </b-card>
  </div>
</template>

<script>
  // import AudioRecorder from 'vue-audio-recorder'
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import FactoryService from '../../../services/FactoryService'

  var _ = require('lodash')

  export default {
    name: 'Speak',
    components: {
      // AudioRecorder,
      Vuetable
    },
    watch: {

    },
    data () {
      return {
        lesson: [],
        items: [{
          text: 'Home',
          to: '/english',
        }, {
          text: 'Sessions',
          to: '/english/lesson',
        }, {
          text: 'Lesson',
          active: true
        }],
        sentences: [],
        sentencesPlay: [],
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
        kara: [],
        record: {
          play: false,
        },
        audio: null
      }
    },
    async mounted () {
      const res = await FactoryService.request('TestService').listen(this.$route.params.id)
      this.lesson = res
      this.sentences = res.details
      this.audio = document.getElementById('audio')
    },
    methods: {
      callback (msg) {
        if (msg === 'start recording') {
          if (this.record.play === true) {
            this.play()
          } else {
            this.karaoke()
          }
        }

        if (msg === 'pause recording') {
          this.audio.pause()
        }
        console.debug('Event: ', msg)
      },
      karaoke () {
        this.sentencesPlay = _.cloneDeep(this.sentences)
        this.kara = []
        const sen = this.sentencesPlay.shift()
        this.kara.push(sen.sentence)

        this.play()
        this.lyric();
      },
      play () {
        this.record.play = true
        this.audio.play()
        console.log(this.sentences)

      },
      lyric () {
        var interval_obj = setInterval(() => {
          const current = this.audio.currentTime

          for (let item of this.sentencesPlay) {
            if (item.time < current + 1.5) {
              const es = this.sentencesPlay.shift().sentence
              this.kara.push(es)
            }
          }

          if (this.sentencesPlay.length === 0 && this.record.play) {
            console.log(this.sentences);
            clearInterval(interval_obj)
            this.sentencesPlay = this.sentences
            this.kara = [];
            // this.record.play = false
          }
        }, 500)
      },
      reset () {

      }
    }
  }
</script>

<style scoped>

</style>
