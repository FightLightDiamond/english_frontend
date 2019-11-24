<template>

  <div>
    <b-row>
      <b-colxx xxs="12">
       <span>
        <h1>Contract</h1>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <b-breadcrumb :items="items"/>
        </b-nav>
      </span>
        <div class="separator mb-5">
        </div>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Contact us')">
          <b-form @submit.prevent="submit()">
            <b-form-group :label="$t('forms.email')" :description="$t('forms.email-muted')">
              <b-form-input required type="email" v-model="form.email"/>
            </b-form-group>
            <b-form-group :label="$t('Phone number')">
              <b-form-input required type="number" v-model="form.phone_number"/>
            </b-form-group>
            <b-form-group :label="$t('Message')">
              <textarea required v-model="form.message" class="form-control"></textarea>
            </b-form-group>
            <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit') }}</b-button>
          </b-form>
        </b-card>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Google map')">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3571080652955!2d105.77413541493245!3d21.018392586003998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454abd8d06f6f%3A0x9c864fbed0cdde0e!2zMTU0IMSQw6xuaCBUaMO0biwgTeG7uSDEkMOsbmgsIFThu6sgTGnDqm0sIEjDoCBO4buZaQ!5e0!3m2!1sen!2s!4v1571673259983!5m2!1sen!2s"
            width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </b-card>
      </b-colxx>
    </b-row>

  </div>

</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import FactoryService from '../../services/FactoryService'
  import IconCard from '@/components/Cards/IconCard'

  export default {
    components: {
      swiper,
      swiperSlide,
      IconCard,
    },
    data () {
      return {
        form: {},
        items: [{
          text: 'Home',
          to: '/english',
        }, {
          text: 'Contact',
          active: true
        }],
      }
    },
    async mounted () {

    },
    methods: {
      async submit () {
        console.log(this.form)
        try {
          const res = await FactoryService.request('ContactService').create(this.form)
          this.form = {}
          this.$notify('success', 'Contact Success', `We will contact you soon`, { duration: 13000, permanent: false })
        } catch (e) {
          this.$notify('error', 'Contact Fail', `Server error`, { duration: 13000, permanent: false })
        }
      }
    }
  }
</script>

<style scoped>

</style>
