<template>
  <div>
    <div class="form-group">
      <label>Title</label>
      <input class="form-control" v-model="lesson.title">
    </div>
    <b-row>
      <b-colxx class="form-group" md="6">
        <label>Tutorial</label>
        <select class="form-control" v-model="lesson.tutorial_id">
          <option value="1">1</option>
        </select>
      </b-colxx>

      <b-colxx class="form-group" md="6">
        <label>Section</label>
        <select class="form-control" v-model="lesson.section_id">
          <option value="1">1</option>
        </select>
      </b-colxx>
    </b-row>
    <div class="form-group">
      <label>Intro</label>
      <editor v-if="lesson.intro"
        ref="intro"
        :initialValue="lesson.intro"
      />
    </div>


    <div class="form-group">
      <label>Content</label>
      <editor v-if="lesson.content"
        ref="content"
        :initialValue="lesson.content"
        :options="editorOptions"
        :visible="editorVisible"
        height="500px"
      />
    </div>

    <button @click="submit" class="btn btn-primary">Save</button>
  </div>
</template>

<script>
  import 'codemirror/lib/codemirror.css'
  import '@toast-ui/editor/dist/toastui-editor.css'
  import 'tui-editor/dist/tui-editor.css'

  import 'tui-editor/dist/tui-editor-contents.css'
  import 'highlight.js/styles/github.css'

  import { Editor } from '@toast-ui/vue-editor'
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'create',
    data () {
      return {
        editorOptions: {
          usageStatistics: false,
          hideModeSwitch: false
        },
        editorHtml: '',
        editorVisible: true,
        id: this.$route.params.id,
      }
    },
    async mounted() {
      await this.getLesson(this.id);

    },
    components: {
      'editor': Editor,
    },
    computed: {
      ...mapGetters(['lesson'])
    },
    methods: {
      ...mapActions(['getLesson', 'updateLesson']),
      submit () {
        this.lesson.intro = this.$refs.intro.invoke('getMarkdown')
        this.lesson.content = this.$refs.content.invoke('getMarkdown')
        console.log('this.lesson', this.lesson)
        this.updateLesson(this.lesson)
      },
    }
  }
</script>

<style scoped>

</style>
