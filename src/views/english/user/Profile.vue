<template>
  <div>

    <b-row>
      <b-colxx xxs="12">
       <span>
        <h1>Profile</h1>
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
        <b-card class="mb-4" :title="$t('Profile')">
          <b-form @submit.prevent="submit()">
            <b-form-group :label="$t('forms.email')" :description="$t('forms.email-muted')">
              <b-form-input readonly required type="email" v-model="form.email"/>
            </b-form-group>
            <b-form-group :label="$t('First name')">
              <b-form-input required v-model="form.first_name"/>
            </b-form-group>
            <b-form-group :label="$t('Last name')">
              <b-form-input required v-model="form.last_name"/>
            </b-form-group>
            <b-form-group :label="$t('Phone number')">
              <b-form-input required v-model="form.phone_number"/>
            </b-form-group>
            <b-form-group :label="$t('Avatar')">
              <b-form-file v-model="form.avatar"/>
            </b-form-group>
            <b-form-group :label="$t('Address')">
              <textarea required v-model="form.address" class="form-control"></textarea>
            </b-form-group>
            <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit') }}</b-button>
          </b-form>
        </b-card>
      </b-colxx>
    </b-row>
  </div>

</template>

<script>
  import FactoryService from '../../../services/FactoryService'

  export default {
    components: {},
    data () {
      return {
        id: JSON.parse(localStorage.getItem('user')).id,
        form: {},
        courses: [],
        items: [{
          text: 'Home',
          to: '/english',
        }],
      }
    },
    async mounted () {
      this.form = await FactoryService.request('UserService').show(this.id)
      console.log(this.form)
    },
    methods: {
      async submit () {
        const formData = new FormData()

        for (let en in this.form) {
          if (this.form[en]) {
            formData.append(en, this.form[en])
          }
        }
        formData.append('_method', 'PATCH')
        console.log(formData)

        try {
          await FactoryService.request('UserService').update(this.id, formData)

          this.$notify('success', 'Success', `Update successfully`, { duration: 1300, permanent: false })
        } catch (e) {
          this.$notify('error', 'Error', `Update fail`, { duration: 1300, permanent: false })
        }
      }
    }
  }
</script>

<style scoped>

</style>
