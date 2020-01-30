<template>
    <b-row class="h-100">
        <b-colxx xxs="12" md=10 class="mx-auto my-auto">
            <b-card class="auth-card" no-body>
                <div class="position-relative image-side ">
                    <p class=" text-white h2">{{ $t('Crazy English') }}</p>
                    <p class="white mb-0">Please use your e-mail to reset your password. <br>If you are not a member,
                        please
                        <router-link tag="a" to="/user/register" class="white">register</router-link>
                        .
                    </p>
                </div>
                <div class="form-side">

                    <h6 class="mb-4">{{ $t('user.forgot-password')}}</h6>
                    <b-form @submit.prevent="formSubmit">
                        <label class="form-group has-float-label mb-4">
                            <input type="email" class="form-control" v-model="form.email">
                            <span>{{ $t('user.email') }}</span>
                        </label>
                        <div class="d-flex justify-content-end align-items-center">
                            <b-button type="submit" variant="primary" size="lg" class="btn-shadow">{{
                                $t('user.reset-password-button')}}
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
        email: 'i.am.m.cuong@gmail.com'
      }
    }
  },
  computed: {
    ...mapGetters(['currentUser', 'processing', 'msgError'])
  },
  methods: {
    ...mapActions(['forgotPassword']),
    async formSubmit () {
      await this.forgotPassword(this.form)

      if (this.msgError === null) {
        this.$notify('success', 'Success', 'We send you link to reset password. Please check email',
          { duration: 1300, permanent: false })
      } else {
        this.$notify('error', 'Fail', this.msgError,
          { duration: 1300, permanent: false })
      }
      console.log('this.msgError', this.msgError)
    }
  }
}
</script>
