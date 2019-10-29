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

    <b-card class="mb-4" :title="$t('Form update')">
      <b-form @submit.prevent="submit()">
        <b-row>
          <b-colxx xxs="12" >
            <b-form-group :label="$t('Title')">
              <b-form-input v-model="form.name" :state="!$v.form.name.$invalid"/>
              <div class="invalid-feedback" v-if="!$v.form.name.minLength">Name must have at least {{$v.form.name.$params.minLength.min}} letters.</div>
            </b-form-group>
          </b-colxx>
          <b-colxx xxs="12" >
            <b-form-group :label="$t('Description')">
              <b-form-textarea v-model="form.description" :state="!$v.form.description.$invalid"
                               class="form-control"></b-form-textarea>
              <div class="invalid-feedback" v-if="!$v.form.description.minLength">
                Name must have at least {{$v.form.description.$params.minLength.min}} letters.
              </div>
            </b-form-group>
          </b-colxx>
          <div class="form-group col-sm-4">
            <b-form-group :label="$t('Course')">
              <b-form-select v-model="form.crazy_course_id" :state="!$v.form.crazy_course_id.$invalid">
                <option value=""></option>
                <option v-for="course in courses" :value="course.id">{{course.name}}</option>
              </b-form-select>
            </b-form-group>
            <div class="invalid-feedback" v-if="!$v.form.description.required">Field is required</div>
          </div>
          <div class="form-group col-sm-4">
            <b-form-group :label="$t('Audio')">
              <b-form-file ref="audio" v-model="form.audio" :state="!$v.form.audio.$invalid"></b-form-file>
            </b-form-group>
          </div>
          <div class="form-group col-sm-4">
            <b-form-group :label="$t('Image')">
              <b-form-file ref="img" v-model="form.img" :state="!$v.form.img.$invalid"></b-form-file>
            </b-form-group>
          </div>

          <b-colxx xxs="12" >
            <label>Content</label>
            <table class="table">
              <tr>
                <th></th>
                <th>Time</th>
                <th>English</th>
                <th>Vietnamese</th>
                <th class="text-right">
                    <span @click="addSentence()" class="btn btn-xs btn-outline-primary">
                      <i class="iconsminds-folder-add--"></i>
                    </span>
                </th>
              </tr>
              <tr v-for="(detail, key) in $v.form.details.$each.$iter">
                <td style="width: 5px"><i>
                  {{parseInt(key) + 1}}
                </i></td>
                <td style="width: 80px; max-width: 80px">
                  <div class="input-group input-group-sm">
                    <b-form-input type="number" v-model="detail.time.$model" :state="!detail.time.$invalid"/>
                  </div>

                  <div class="invalid-feedback" v-if="!detail.time.required">Name is required.</div>
                  <div class="invalid-feedback" v-if="!detail.time.minLength">Name is required.</div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <b-form-input v-model="detail.sentence.$model" :state="!detail.sentence.$invalid"/>
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <b-form-input v-model="detail.meaning.$model" :state="!detail.meaning.$invalid"/>
                  </div>
                </td>
                <td style="width: 20px" class="text-right">
                    <span @click="removeSentence(key)" class="btn btn-xs btn-outline-danger">
                      <i class="simple-icon-trash"></i>
                    </span>
                </td>
              </tr>
            </table>
          </b-colxx>

          <b-colxx xxs="12" >
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
  const { required, minLength } = require('vuelidate/lib/validators')
  import FactoryService from '../../../services/FactoryService'

  export default {
    components: {
      draggable,
    },
    async mounted () {
      this.courses = await FactoryService.request('CourseService', 'admin').index()
      this.form = await FactoryService.request('CrazyService', 'admin').show(this.id)
      console.log(this.lesson);
    },
    data () {
      return {
        id: this.$route.params.id,
        courses: [],
        baseSentence: { sentence: '', meaning: '', time: '' },
        items: [
          {
            text: 'Dashboard',
            to: '/administrator/dashboard',
          }, {
            text: 'Lessons',
            to: '/administrator/lessons',
          }, {
            text: 'Create',
            active: true
          },
        ],
        form: {
          name: '',
          description: '',
          audio: '',
          details: [],
          img: '',
          crazy_course_id: null,
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
        },
        crazy_course_id: {
          required,
        },
        img: {
          required,
        },
        audio: {
          required,
        },
        file: {
          required
        },
        details: {
          $each: {
            time: {
              required,
            },
            sentence: {
              required,
              minLength: minLength(2)
            },
            meaning: {
              required,
              minLength: minLength(2)
            },
          }
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
        console.log(this.form)
        const res = await FactoryService.request('CrazyService', 'admin').update(this.id, this.form);
      }
    }
  }
</script>

<style scoped>

</style>
