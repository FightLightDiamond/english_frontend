<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
       <span>
        <h1>History</h1>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <b-breadcrumb :items="items"/>
        </b-nav>
      </span>
        <div class="separator mb-5">
        </div>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx xxs="6">
        <div class="icon-cards-row" lg="12">
          <router-link :to="`/histories/listen`">
            <icon-card
              :title="$t('LISTEN')"
              icon="simple-icon-earphones-alt"
              :value="count.listen"
            />
          </router-link>
        </div>
      </b-colxx>
      <b-colxx xxs="6">
        <div class="icon-cards-row" lg="12">
          <router-link :to="`/histories/read`">
            <icon-card
              :title="$t('READ')"
              icon="simple-icon-book-open"
              :value="count.read"
            />
          </router-link>
        </div>
      </b-colxx>
      <b-colxx xxs="6">
        <div class="icon-cards-row" lg="12">
          <router-link :to="`/histories/write`">
            <icon-card
              :title="$t('WRITE')"
              icon="simple-icon-note"
              :value="count.write"
            />
          </router-link>
        </div>
      </b-colxx>
      <b-colxx xxs="6">
        <div class="icon-cards-row" lg="12">
          <router-link :to="`/histories/speak`">
            <icon-card
              :title="$t('SPEAK')"
              icon="iconsminds-speaker"
              :value="count.speak"
            />
          </router-link>
        </div>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import IconCard from '@/components/Cards/IconCard'
import FactoryService from '../../../services/FactoryService'

export default {
  async mounted () {
    const data = await FactoryService.request('HistoryService').index()
    console.log('------------------')
    console.log(data)
    this.count = data
  },
  components: {
    IconCard
  },
  data () {
    return {
      count: {
        read: 0,
        listen: 0,
        write: 0,
        speak: 0
      },
      lesson: [],
      items: [{
        text: 'Home',
        to: '/english'
      }, {
        text: 'History',
        to: '/english/histories'
      }
      ]
    }
  }
}
</script>

<style scoped>

</style>
