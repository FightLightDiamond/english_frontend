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
      <b-row>
        <div class="form-group col-sm-3">
          <b-form-group :label="$t('Type')">
            <b-form-select v-model="question.type">
              <option value=""></option>
              <option v-for="type in types" :value="type.id">{{type.name}}</option>
            </b-form-select>
          </b-form-group>
        </div>

        <div class="form-group col-sm-3">
          <b-form-group :label="$t('Time')">
            <b-form-input v-model="question.time"></b-form-input>
          </b-form-group>
        </div>

        <div class="form-group col-sm-3">
          <b-form-group :label="$t('Status')">
            <b-form-select v-model="question.status">
              <option value=""></option>
              <option v-for="status in statuses" :value="status.id">{{status.name}}</option>
            </b-form-select>
          </b-form-group>
        </div>

        <div class="form-group col-sm-3">
          <b-form-group :label="$t('Level')">
            <b-form-select v-model="question.level">
              <option value=""></option>
              <option v-for="level in levels" :value="level.id">{{level.name}}</option>
            </b-form-select>
          </b-form-group>
        </div>

        <b-colxx xxs="12">
          <b-form-group :label="$t('Description')">
            <editor
              ref="question"
              :options="editorOptions"
              :visible="editorVisible"
              height="200px"
              previewStyle="tab"
            />
          </b-form-group>
        </b-colxx>

        <div class="form-group col-sm-12" v-if="question.type===1">
          <table class="table">
            <tr>
              <th>Answer</th>
              <th>Reply</th>
            </tr>
            <tr>
              <td><input name="answer" type="radio"></td>
              <td> True</td>
            </tr>
            <tr>
              <td><input name="answer" type="radio"></td>
              <td> False</td>
            </tr>
          </table>
        </div>

        <b-colxx xxs="12" v-else>
          <table class="table">
            <tr>
              <th>Answer</th>
              <th>Reply</th>
              <th class="text-right">
                    <span @click="addSentence()" class="btn btn-xs btn-outline-primary">
                      <i class="iconsminds-folder-add--"></i>
                    </span>
              </th>
            </tr>

            <tr v-for="(detail, key) in question.replies">
              <td style="width: 5px">
                <input v-if="question.type===2" type="radio">
                <input v-if="question.type===3" type="checkbox">
              </td>
              <td>
                <div class="form-group">
                  <editor
                    :initialValue="detail.reply"
                    ref="content"
                    :options="editorOptions"
                    :visible="editorVisible"
                    height="200px"
                    previewStyle="tab"
                  />
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
        <b-colxx xxs="12">
          <button class="btn btn-primary btn-sm">Submit</button>
        </b-colxx>
      </b-row>
    </b-card>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import { validationMixin } from 'vuelidate'
  import FactoryService from '../../../services/FactoryService'

  import 'codemirror/lib/codemirror.css'
  import '@toast-ui/editor/dist/toastui-editor.css'
  import 'tui-editor/dist/tui-editor.css'
  import 'tui-editor/dist/tui-editor-contents.css'
  import 'highlight.js/styles/github.css'

  import { Editor } from '@toast-ui/vue-editor'
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  const { required, minLength } = require('vuelidate/lib/validators')

  export default {
    components: {
      draggable, 'editor': Editor,

    },
    async mounted () {

    },
    computed: {
      ...mapGetters(['types', 'question', 'statuses', 'levels'])
    },
    data () {
      return {
        editorOptions: {
          usageStatistics: false,
          hideModeSwitch: false,
          previewStyle: 'tab',
        },
        editorVisible: true,
        baseSentence: { sentence: '', meaning: '', time: '' },
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
      }
    },
    mixins: [validationMixin],
    validations: {
      question: {
        question: {
          required,
          minLength: minLength(4)
        },
        replies: {
          $each: {
            time: {
              required
            },
            sentence: {
              required,
              minLength: minLength(2)
            },
            meaning: {
              required,
              minLength: minLength(2)
            }
          }
        }
      }
    },
    methods: {
      addSentence () {
        this.question.replies.push(Object.assign({}, this.baseSentence))
      },
      removeSentence (key) {
        this.question.replies.splice(key, 1)
      },
      async submit () {
        console.log(this.question.replies)
        const replies = JSON.stringify(this.question.replies)
        let questionData = new FormData()

        for (let key in this.question) {
          if (this.question[key]) {
            questionData.append(key, this.question[key])
          }
        }

        questionData.append('replies', replies)

        console.log(questionData)

        try {
          const res = await FactoryService.request('CrazyService', 'admin').create(questionData)
          this.$notify('success', 'Success', `Create successfully`, { duration: 1300, permanent: false })
          this.$router.push('/administrator/lessons')
        } catch (e) {
          this.$notify('error', 'Fail', `Create fail`, { duration: 1300, permanent: false })
        }
      }
    }
  }
</script>

<style scoped>

</style>
