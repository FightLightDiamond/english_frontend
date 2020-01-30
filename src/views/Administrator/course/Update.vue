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
            <b-form-group :label="$t('Title')">
              <b-form-input v-model="form.name" :state="!$v.form.name.$invalid"/>
              <div class="invalid-feedback" v-if="!$v.form.name.minLength">
                Name must have at least {{$v.form.name.$params.minLength.min}} letters.
              </div>
            </b-form-group>
          </b-colxx>
          <b-colxx xxs="12">
            <b-form-group :label="$t('Description')">
              <b-form-textarea v-model="form.description" :state="!$v.form.description.$invalid"
                               class="form-control"></b-form-textarea>
              <div class="invalid-feedback" v-if="!$v.form.description.minLength">
                Name must have at least {{$v.form.description.$params.minLength.min}} letters.
              </div>
            </b-form-group>
          </b-colxx>

          <div class="form-group col-sm-12">
            <b-form-group :label="$t('Image')">
              <b-form-file ref="img" v-model="form.img"></b-form-file>
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
    const res = await FactoryService.request('CourseService', 'admin').show(this.id)
    this.form.name = res.name
    this.form.description = res.description
  },
  data () {
    return {
      id: this.$route.params.id,
      items: [
        {
          text: 'Dashboard',
          to: '/administrator/dashboard'
        }, {
          text: 'Courses',
          to: '/administrator/lessons'
        }, {
          text: 'Update',
          active: true
        }
      ],
      form: {
        name: '',
        description: '',
        img: '',
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
      description: {
        required,
        minLength: minLength(4)
      }
    }
  },
  methods: {
    async submit () {
      let formData = new FormData()

      for (let key of ['name', 'description', 'img']) {
        if (this.form[key]) {
          formData.append(key, this.form[key])
        }
      }

      formData.append('_method', 'PATCH')

      try {
        const res = await FactoryService.request('CourseService', 'admin').update(this.id, formData)
        this.$notify('success', 'Success', `Update successfully`, { duration: 1300, permanent: false })
        this.$router.push('/administrator/courses')
      } catch (e) {
        this.$notify('success', 'error', `Update fail`, { duration: 1300, permanent: false })
      }
    }
  }
}
</script>

<style scoped>

</style>
