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

    <b-card class="mb-12" :title="$t('Listen and write')">
      <b-row>
        <b-colxx xxs="12">
          <audio-recorder
            upload-url="some url"
            :attempts="3"
            :time="2"
            :before-recording="callback"
            :pause-recording="callback"
            :after-recording="callback"
            :before-upload="callback"
            :successful-upload="callback"
            :failed-upload="callback"/>
        </b-colxx>
      </b-row>
    </b-card>

    <b-card class="form-group" :title="$t(lesson.name)">
      <b-row class="form-group">
        <b-colxx xxs="12">
          <audio :src="lesson.audio"  controls></audio>
        </b-colxx>
      </b-row>
    </b-card>

    <b-row>
      <b-colxx xxs="12" >
        <b-card class="mb-4">
          <vuetable ref="vuetable" class="table-bordered table-hover"
                    :api-mode="false"
                    :data="sentences"
                    :fields="fields"
          >
          </vuetable>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
  import AudioRecorder from 'vue-audio-recorder'
  import Vuetable from 'vuetable-2/src/components/Vuetable'

  export default {
    name: 'Speak',
    components: {
      VueAudioRecorder,
      Vuetable
    },
    data () {
      return {
        headers: {
          'X-Custom-Header': 'some data'
        },
        lesson: [],
        items: [{
          text: 'Home',
          to: '#',
        }, {
          text: 'Sessions',
          to: '/english/lesson',
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
    async mounted () {
      const res = await testService.listen(this.$route.params.id);
      this.lesson = res
      this.sentences = res.details
    },
    methods: {
      callback (msg) {
        console.debug('Event: ', msg)
      }
    }
  }
</script>

<style scoped>

</style>
