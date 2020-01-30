<template>
    <b-row class="h-100">
        <b-colxx xxs="12" md=10 class="mx-auto my-auto">
            <b-card class="auth-card" no-body>
                <div class="position-relative image-side ">
                    <p class=" text-white h2">{{ $t('Crazy English') }}</p>
                    <p class="white mb-0"> Please use this form to register. <br/>If you are a member, please
                        <router-link tag="a" to="/login" class="white">login</router-link>
                        .
                    </p>
                </div>
                <div class="form-side">

                    <h6 class="mb-4">{{ $t('register')}}</h6>
                    <b-form @submit.prevent="formSubmit">
                        <!-- <label class="form-group has-float-label mb-4">
                         <input  class="form-control" v-model="form.name">
                         <span>{{ $t('fullname') }}</span>
                       </label> -->
                        <label class="form-group has-float-label mb-4">
                            <input type="email" class="form-control" v-model="form.email">
                            <span>{{ $t('email') }}</span>
                        </label>
                        <label class="form-group has-float-label mb-4">
                            <input type="password" class="form-control" v-model="form.password">
                            <span>{{ $t('password') }}</span>
                        </label>
                        <label class="form-group has-float-label mb-4">
                            <input type="password" class="form-control" v-model="form.password_confirmation">
                            <span>{{ $t('password confirmation') }}</span>
                        </label>

                        <div class="d-flex justify-content-end align-items-center">
                            <router-link tag="a" class="btn btn-default" to="/login">{{ $t('Login')}}</router-link>
                            <b-button type="submit" variant="primary" size="lg" class="btn-shadow">{{ $t('register')}}
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

export default {
  data () {
    return {
      form: {
        name: 'Fight',
        email: 'aa@gmail.com',
        password: '123456',
        password_confirmation: '123456'
      }
    }
  },
  computed: {
    ...mapGetters(['currentUser', 'processing', 'msgError'])
  },
  methods: {
    ...mapActions(['register']),
    async formSubmit () {
      await this.register(this.form)

      if (this.msgError === null) {
        this.$notify('success', 'Register Success', `Hi, ${this.form.email} `, { duration: 1300, permanent: false })
        this.$router.push('/login')
      } else {
        this.$notify('error', 'Register Fail', 'Server Error', { duration: 1300, permanent: false })
      }
    }
  }
}
</script>
