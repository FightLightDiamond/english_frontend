<template>
  <div>

<!--    <b-row>-->
<!--      <b-colxx xxs="12">-->
<!--       <span>-->
<!--        <h1>Change password</h1>-->
<!--        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">-->
<!--            <b-breadcrumb :items="items"/>-->
<!--        </b-nav>-->
<!--      </span>-->
<!--        <div class="separator mb-5">-->
<!--        </div>-->
<!--      </b-colxx>-->
<!--    </b-row>-->

    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Change password')">
          <b-form @submit.prevent="submit()">

            <b-form-group :label="$t('forms.password')" >
              <b-form-input required type="email" v-model="form.password"/>
            </b-form-group>

            <b-form-group :label="$t('New password')" >
              <b-form-input required type="email" v-model="form.new_password"/>
            </b-form-group>

            <b-form-group :label="$t('Confirmation password')">
              <b-form-input required type="email" v-model="form.confirmation_password"/>
            </b-form-group>

            <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit') }}</b-button>
          </b-form>
        </b-card>
      </b-colxx>
    </b-row>
  </div>

</template>

<script>

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

      }
    }
  }
</script>

<style scoped>

</style>
