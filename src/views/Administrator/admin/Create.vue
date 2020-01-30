<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
       <span>
        <h1>Lessons</h1>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <b-breadcrumb :items="items"/>
        </b-nav>
      </span>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>

    <b-card class="mb-4" :title="$t('Form create')">
      <b-form @submit.prevent="submit()">
        <b-row>
          <b-colxx xxs="12">
            <b-form-group :label="$t('Name')">
              <b-form-input required v-model="form.name" :state="!$v.form.name.$invalid"/>
              <div class="invalid-feedback" v-if="!$v.form.name.minLength">
                Name must have at least {{$v.form.name.$params.minLength.min}} letters.
              </div>
            </b-form-group>
          </b-colxx>
          <b-colxx xxs="12">
            <b-form-group :label="$t('Email')">
              <b-form-input required type="email" v-model="form.email" :state="!$v.form.email.$invalid"
                            class="form-control"></b-form-input>
              <div class="invalid-feedback" v-if="!$v.form.email.minLength">
                Name must have at least {{$v.form.email.$params.minLength.min}} letters.
              </div>
            </b-form-group>
          </b-colxx>

          <div class="form-group col-sm-12">
            <b-form-group :label="$t('Password')">
              <b-form-input required type="password" v-model="form.password"
                            :state="!$v.form.password.$invalid"></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-12">
            <b-form-group :label="$t('Password confirm')">
              <b-form-input required type="password" v-model="form.password_confirm"
                            :state="!$v.form.password_confirm.$invalid">
              </b-form-input>
            </b-form-group>
          </div>

          <b-colxx xxs="12">
            <button class="btn btn-primary btn-sm">Submit</button>
          </b-colxx>
        </b-row>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { validationMixin } from 'vuelidate'
import FactoryService from '../../../services/FactoryService'

const { required, minLength } = require('vuelidate/lib/validators')

export default {
  components: {
    draggable
  },
  async mounted () {
  },
  data () {
    return {
      items: [
        {
          text: 'Dashboard',
          to: '/administrator/dashboard'
        }, {
          text: 'Lessons',
          to: '/administrator/lessons'
        }, {
          text: 'Create',
          active: true
        }
      ],
      form: {
        name: '',
        email: '',
        password: '',
        password_confirm: '',
        is_active: 1
      }
    }
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        minLength: minLength(4)
      },
      password: {
        required
      },
      password_confirm: {
        required
      }
    }
  },
  methods: {
    addSentence () {
      this.form.details.push(Object.assign({}, this.baseSentence))
    },
    removeSentence (key) {
      this.form.details.splice(key, 1)
    },
    async submit () {
      console.log(JSON.stringify(this.form))
      try {
        const res = await FactoryService.request('AdminService', 'admin').create(this.form)
        this.form = {}
        this.$notify('success', 'Create Success', `Add new administrator successfully`, {
          duration: 1300,
          permanent: false
        })
        this.$router.push('/administrator/users')
      } catch (e) {
        this.$notify('success', 'Create Fail', `Server Error`, { duration: 1300, permanent: false })
      }
    }
  }
}
</script>

<style scoped>

</style>
