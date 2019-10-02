<template>
  <b-row class="h-100">
    <b-colxx xxs="12" md=10  class="mx-auto my-auto">
      <b-card class="auth-card" no-body>
          <div class="position-relative image-side ">
            <p class=" text-white h2">{{ $t('Crazy English') }}</p>
              <p class="white mb-0">  Please use this form to register. <br />If you are a member, please
                <router-link tag="a" to="/login" class="white">login</router-link>.
              </p>
          </div>
          <div class="form-side">

            <h6 class="mb-4">{{ $t('user.register')}}</h6>
            <b-form @submit.prevent="formSubmit">
               <!-- <label class="form-group has-float-label mb-4">
                <input  class="form-control" v-model="user.name">
                <span>{{ $t('user.fullname') }}</span>
              </label> -->
              <label class="form-group has-float-label mb-4">
                <input type="email" class="form-control" v-model="user.email">
                <span>{{ $t('user.email') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <input type="password" class="form-control" v-model="user.password">
                <span>{{ $t('user.password') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <input type="password" class="form-control" v-model="user.password_confirmation">
                <span>{{ $t('user.password_confirmation') }}</span>
              </label>
              <div class="d-flex justify-content-end align-items-center">
                  <b-button type="submit" variant="primary" size="lg" class="btn-shadow">{{ $t('user.register-button')}}</b-button>
              </div>
          </b-form>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import AuthService from '../../services/AuthService';

export default {
  data () {
    return {
      user: {
        name: 'Fight',
        email: 'aa@gmail.com',
        password: '123456',
        password_confirmation: '123456'
      }
    }
  },
  methods: {
    async formSubmit () {
      console.log(this.user)

      try {
        const res = await AuthService.register(this.user);
      } catch(e) {
        console.log(1234);
      }

      // this.$router.push('/')
    }
  }
}
</script>
