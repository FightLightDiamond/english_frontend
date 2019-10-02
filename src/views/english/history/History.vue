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
              :value="14"
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
              :value="32"
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
              :value="74"
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
              :value="25"
            />
          </router-link>
        </div>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
  import IconCard from '@/components/Cards/IconCard'

  export default {
    components: {
      IconCard,
    },
    data () {
      return {
        lesson: [],
        items: [{
          text: 'Home',
          link: '#',
        }, {
          text: 'History',
          link: '/english/lesson',
        }
        ],
      }
    },

  }
</script>

<style scoped>

</style>
