<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.blog-detail')"/>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx md="12" xl="12" class="col-left">
        <b-card class="mb-4" no-body>
          <b-card-body>
            <div class="mb-5">
              <h2 class="card-title">{{lesson.title}}</h2>
              <viewer v-if="lesson.intro"
                      :initialValue="lesson.intro"
                      :value="lesson.intro"
              />
              <viewer v-if="lesson.content"
                      :initialValue="lesson.content"
                      :value="lesson.content"
              />

              <p>Lượt xem: {{lesson.views}}</p>
              <p>Viết ngày: {{lesson.created_at}}</p>

              <hr>
              <div class="form-group">
                <lable>Title</lable>
                <input class="form-control">
              </div>
              <b-row>
                <b-colxx class="form-group" md="6">
                  <lable>Tutorial</lable>
                  <select class="form-control"></select>
                </b-colxx>

                <b-colxx class="form-group" md="6">
                  <lable>Section</lable>
                  <select class="form-control"></select>
                </b-colxx>
              </b-row>
              <div class="form-group">
                <label>Intro</label>
                <editor
                  ref="intro"
                />
              </div>

              <div class="form-group">
                <label>Content</label>
                <editor
                  ref="content"
                  @change="onEditorChange"
                  :value="editorText"
                  :options="editorOptions"
                  :html="editorHtml"
                  :visible="editorVisible"
                  previewStyle="vertical"
                  height="500px"
                  mode="wysiwyg"
                />
              </div>

              <button class="btn btn-primary">Save</button>
            </div>
          </b-card-body>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
  import SingleLightbox from '../../components/Pages/SingleLightbox'
  import VideoPlayer from '../../components/Common/VideoPlayer'
  import RecentPost from '../../components/Common/RecentPost'
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  import {
    blogData,
    blogCategories
  } from '../../data/blog'

  import 'codemirror/lib/codemirror.css'
  import '@toast-ui/editor/dist/toastui-editor.css'
  import 'tui-editor/dist/tui-editor.css'

  import 'tui-editor/dist/tui-editor-contents.css'
  import 'highlight.js/styles/github.css'

  import { Editor } from '@toast-ui/vue-editor'
  import Viewer from '@toast-ui/vue-editor/src/Viewer.vue'

  export default {
    components: {
      'single-lightbox': SingleLightbox,
      'video-player': VideoPlayer,
      'recent-post': RecentPost,
      'editor': Editor,
      'viewer': Viewer
    },
    data () {
      return {
        recentPosts: blogData.slice(5),
        blogCategories,
        editorText: 'This is initialValue.',
        editorOptions: {
          minHeight: '200px',
          language: 'en_US',
          useCommandShortcut: true,
          useDefaultHTMLSanitizer: true,
          usageStatistics: true,
          hideModeSwitch: false,
          toolbarItems: [
            'heading',
            'bold',
            'italic',
            'strike',
            'divider',
            'hr',
            'quote',
            'divider',
            'ul',
            'ol',
            'task',
            'indent',
            'outdent',
            'divider',
            'table',
            'image',
            'link',
            'divider',
            'code',
            'codeblock'
          ]
        },
        editorHtml: '',
        editorVisible: true,
        viewerText: '# This 535 is Viewer.\n Hello World.',
        html: '',
        id: this.$route.params.id,
      }
    },
    async mounted () {
      await this.getLesson(this.id)
      console.log(this.lesson)
      this.html = this.lesson.content
    },
    computed: {
      ...mapGetters(['lesson'])
    },
    methods: {
      ...mapActions(['getLesson']),
      onEditorChange () {
        // this.html = this.lesson.content
        // this.getHtml()
      },
      getHtml () {
        this.html = this.$refs.content.invoke('getHtml')
      },
      onEditorLoad () {
        this.viewerText = '# This 535 is Viewer.\n Hello World.'
        // implement your code
      },
      onEditorFocus () {
        // implement your code
      },
      onEditorBlur () {
        // implement your code
      },
      onEditorStateChange () {
        // implement your code
      },

    }
  }
</script>
