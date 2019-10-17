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
    </b-card>

    <b-card class="mb-3" title="Play & listen">
      <b-row class="form-group">
        <b-colxx xxs="12">
          <audio :src="lesson.audio" controls></audio>
        </b-colxx>
      </b-row>
    </b-card>

    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" title="Read sentence">
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
  import FactoryService from '../../../services/FactoryService'
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
          text: 'Sessions',
          to: `/courses/${this.$route.params.id}`,
        }, {
          text: 'Listen',
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
      const res = await FactoryService.request('TestService').listen(this.id)
      this.lesson = res
      this.sentences = res.details
    },
  }
</script>

<style scoped>

</style>
