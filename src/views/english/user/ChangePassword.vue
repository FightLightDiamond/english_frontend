<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Change password')">
          <b-form @submit.prevent="submit()">
            <b-form-group :label="$t('forms.password')">
              <b-form-input required v-model="form.password"/>
            </b-form-group>
            <b-form-group :label="$t('New password')">
              <b-form-input required v-model="form.new_password"/>
            </b-form-group>
            <b-form-group :label="$t('Confirmation password')">
              <b-form-input required v-model="form.confirmation_password"/>
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
        form: {},
        courses: [],
        items: [{
          text: 'Home',
          to: '/english',
        },
        ],
      }
    },
    async mounted () {

    },
    methods: {
      async submit () {
        try {
          const res = await FactoryService.request('AuthService').changePass(this.form)

          this.$notify('success', 'Success', `Update successfully`, { duration: 13000, permanent: false })
        } catch (e) {
          this.$notify('error', 'Error', `Update fail`, { duration: 13000, permanent: false })
        }
      }
    }
  }
</script>

<style scoped>

</style>
