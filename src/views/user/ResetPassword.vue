<template>
  <b-row class="h-100">
    <b-colxx xxs="12" md=10 class="mx-auto my-auto">
      <b-card class="auth-card" no-body>
        <div class="position-relative image-side ">
          <p class=" text-white h2">{{ $t('Crazy English') }}</p>
          <p class="white mb-0">Please use your e-mail to reset your password. <br>If you are not a member, please
            <router-link tag="a" to="/user/register" class="white">register</router-link>
            .
          </p>
        </div>
        <div class="form-side">
          <h6 class="mb-4">{{ $t('Reset Password')}}</h6>
          <b-form @submit.prevent="formSubmit">
            <label class="form-group has-float-label mb-4">
              <input type="password" class="form-control" v-model="form.password">
              <span>{{ $t('user.password') }}</span>
            </label>
            <label class="form-group has-float-label mb-4">
              <input type="password" class="form-control" v-model="form.password_confirmation">
              <span>{{ $t('user.password_confirmation') }}</span>
            </label>
            <div class="d-flex justify-content-end align-items-center">
              <b-button type="submit" variant="primary" size="lg" class="btn-shadow">{{ $t('user.register-button')}}
              </b-button>
            </div>
          </b-form>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import FactoryService from '../../services/FactoryService'

  export default {
    data () {
      return {
        form: {
          token: '04aedc70c5c64bbd796a44d81501ffdb830aac8fc219ab724e80737df45740bc',
          email: 'i.am.m.cuong@gmail.com',
          password: 'PMC1704bnfrv',
          password_confirmation: 'PMC1704bnfrv'
        }
      }
    },
    methods: {
      async formSubmit () {
        try {
          const res = await FactoryService.request('AuthService').resetPass(this.form)
          console.log(res)
        } catch (e) {
          console.log(e)
        }
        // this.$router.push('/')
      }
    }
  }
</script>
