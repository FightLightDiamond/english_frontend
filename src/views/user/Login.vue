<template>
  <b-row class="h-100">
    <b-colxx xxs="12" md=10 class="mx-auto my-auto">
      <b-card class="auth-card" no-body>
        <div class="position-relative image-side ">
          <p class=" text-white h2">{{ $t('Crazy English') }}</p>
          <p class="white mb-0">Please use your credentials to login.<br>If you are not a member, please
            <router-link tag="a" to="/user/register" class="white">register</router-link>
            .
          </p>
        </div>
        <div class="form-side">

          <h6 class="mb-4">{{ $t('user.login-title')}}</h6>
          <b-form @submit.prevent="formSubmit">
            <label class="form-group has-float-label mb-4">
              <input type="email" class="form-control" v-model="email">
              <span>{{ $t('user.email') }}</span>
            </label>
            <label class="form-group has-float-label mb-4">
              <input type="password" class="form-control" v-model="password">
              <span>{{ $t('user.password') }}</span>
            </label>
            <div class="d-flex justify-content-between align-items-center">
              <router-link tag="a" to="/forgot-password">{{ $t('user.forgot-password-question')}}</router-link>
              <router-link tag="a" to="/register">{{ $t('user.register')}}</router-link>
              <b-button type="submit" variant="primary" size="lg" class="btn-shadow" :disabled="processing">{{
                $t('user.login-button')}}
              </b-button>
            </div>
          </b-form>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>

  import Auth from '../../config/Auth'
  import FactoryService from '../../services/FactoryService'

  export default {
    data () {
      return {
        email: 'fightlightdiamond@gmail.com',
        password: '123456',
        processing: false
      }
    },
    methods: {
      async formSubmit () {
        this.processing = true
        let auth = Auth.passpost()
        auth.username = this.email
        auth.password = this.password
        console.log(auth)

        try {
          const res = await FactoryService.request('AuthService').login(auth)

          localStorage.setItem('user', JSON.stringify(res))
          console.log(res)

          this.$notify('success', 'Login Success', `Hi, ${this.email} `, { duration: 13000, permanent: false })
          this.$router.push('/english')
        } catch (e) {
          this.$notify('error', 'Error', 'Login Fail', { duration: 13000, permanent: false })
          this.processing = false
        }
      }
    },
  }
</script>
