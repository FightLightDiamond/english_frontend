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
  import testService from '../../../services/TestService'
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
    async mounted () {
      const res = await testService.listen(this.$route.params.id);
      this.lesson = res
      this.sentences = res.details
    },
  }
</script>

<style scoped>

</style>
