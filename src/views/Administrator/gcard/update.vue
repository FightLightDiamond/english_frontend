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
          <b-colxx xxs="4">
            <b-form-group :label="$t('Name')">
              <b-form-input v-model="form.name" :state="!$v.form.name.$invalid"/>
              <div class="invalid-feedback" v-if="!$v.form.name.minLength">
                Name must have at least {{$v.form.name.$params.minLength.min}} letters.
              </div>
            </b-form-group>
          </b-colxx>
          <b-colxx xxs="4">
            <b-form-group :label="$t('Nick Name')">
              <b-form-input v-model="form.nickname" :state="!$v.form.nickname.$invalid"/>
              <div class="invalid-feedback" v-if="!$v.form.nickname.minLength">
                Name must have at least {{$v.form.nickname.$params.minLength.min}} letters.
              </div>
            </b-form-group>
          </b-colxx>
          <b-colxx xxs="4">
            <b-form-group :label="$t('Role')">
              <b-form-input v-model="form.role" :state="!$v.form.role.$invalid"/>
              <div class="invalid-feedback" v-if="!$v.form.role.minLength">
                Name must have at least {{$v.form.role.$params.minLength.min}} letters.
              </div>
            </b-form-group>
          </b-colxx>
          <b-colxx xxs="12">
            <b-form-group :label="$t('Sayings')">
              <b-form-textarea v-model="form.sayings" :state="!$v.form.sayings.$invalid"
                               class="form-control"></b-form-textarea>
              <div class="invalid-feedback" v-if="!$v.form.sayings.minLength">
                Name must have at least {{$v.form.sayings.$params.minLength.min}} letters.
              </div>
            </b-form-group>
          </b-colxx>

          <div class="form-group col-sm-4">
            <b-form-group :label="$t('Class')">
              <b-form-select v-model="form.class_id" :state="!$v.form.class_id.$invalid">
                <option value=""></option>
                <option v-for="course in classes" :value="course.id">{{course.name}}</option>
              </b-form-select>
            </b-form-group>
            <div class="invalid-feedback" v-if="!$v.form.sayings.required">Field is required</div>
          </div>
          <div class="form-group col-sm-4">
            <b-form-group :label="$t('Element')">
              <b-form-select v-model="form.element_id" :state="!$v.form.element_id.$invalid">
                <option value=""></option>
                <option v-for="course in elements" :value="course.id">{{course.name}}</option>
              </b-form-select>
            </b-form-group>
            <div class="invalid-feedback" v-if="!$v.form.element_id.required">Field is required</div>
          </div>
          <div class="form-group col-sm-4">
            <b-form-group :label="$t('Image')">
              <b-form-file ref="image" v-model="form.image" :state="!$v.form.image.$invalid"></b-form-file>
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
        classes: [
          {id: 1, name: 'Mage'},
          {id: 2, name: 'Fighter'},
          {id: 3, name: 'Tank'},
          {id: 4, name: 'Support'},
        ],
        elements: [
          {id: 1, name: 'Watter'},
          {id: 2, name: 'Fire'},
          {id: 3, name: 'Nature'},
          {id: 4, name: 'Light'},
          {id: 5, name: 'Dark'},
        ],
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
          nickname: '',
          role: '',
          sayings: '',
          image: '',
          class_id: null,
          element_id: null,
          status: 1
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
        nickname: {
          required,
          minLength: minLength(2)
        },
        role: {
          required,
          minLength: minLength(2)
        },
        sayings: {
          required,
          minLength: minLength(4)
        },
        class_id: {
          required
        },
        element_id: {
          required
        },
        image: {
          required
        }
      }
    },
    methods: {
      async submit () {
        console.log(this.form.details)
        const details = JSON.stringify(this.form.details)
        let formData = new FormData()

        for (let key in this.form) {
          if (this.form[key]) {
            formData.append(key, this.form[key])
          }
        }

        formData.append('details', details)

        console.log(formData)

        try {
          const res = await FactoryService.request('HeroService', 'admin').create(formData)
          this.$notify('success', 'Success', `Create successfully`, { duration: 1300, permanent: false })
          // this.$router.push('/administrator/heroes')
        } catch (e) {
          this.$notify('error', 'Fail', `Create fail`, { duration: 1300, permanent: false })
        }
      }
    }
  }
</script>

<style scoped>

</style>
