<template>
    <div>
        <b-row>
            <b-colxx xxs="12">
       <span>
        <h1>listen</h1>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <b-breadcrumb :items="items"/>
        </b-nav>
      </span>
                <div class="separator mb-5">
                </div>
            </b-colxx>
        </b-row>

        <b-card class="mb-4" :title="listen.name">
            <div class="d-flex flex-row mb-0">
                <img :src="listen.img" :alt="listen.name" class="list-thumbnail border-0"/>
                <b-badge variant="" pill class="position-absolute badge-top-right">Hot</b-badge>
                <div class="pl-3 pt-2 pr-2 pb-2">
                    <div class="pr-4">
                        <h3></h3>
                        <p class="text-muted mb-1 text-small">{{ listen.description }}</p>
                    </div>
                </div>
            </div>
        </b-card>

        <b-card class="mb-3" title="Play & listen">
            <b-row class="form-group">
                <b-colxx xxs="12">
                    <audio :src="listen.audio" controls></audio>
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
import Vuetable from 'vuetable-2/src/components/Vuetable'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    Vuetable
  },
  data () {
    return {
      id: this.$route.params.id,
      items: [{
        text: 'Home',
        to: '/english'
      }, {
        text: 'Sessions',
        to: `/courses/${this.$route.params.id}`
      }, {
        text: 'Listen',
        active: true
      }],
      sentences: [],
      fields: [
        {
          name: 'sentence',
          title: 'English'
        },
        {
          name: 'meaning',
          title: 'Vietnamese'
        },
        '__slot:actions'
      ]
    }
  },
  computed: {
    ...mapGetters(['listen'])
  },
  async mounted () {
    await this.getListen({ id: this.id })
    this.sentences = this.listen.details
  },
  methods: {
    ...mapActions(['getListen'])
  }
}
</script>

<style scoped>

</style>
