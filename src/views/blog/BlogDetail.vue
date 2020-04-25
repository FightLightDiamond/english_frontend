<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.blog-detail')"/>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx md="12" xl="8" class="col-left">
        <b-card class="mb-4" no-body>
          <b-card-body>
            <div class="mb-5" id="export">
              <h2 class="card-title">{{lesson.title}}</h2>
              <viewer ref="intro"/>
              <viewer ref="content"/>

              <p>Lượt xem: {{lesson.views}}</p>
              <p>Viết ngày: {{lesson.created_at}}</p>
            </div>
            <div class="text-right">
              <button class="btn btn-primary btn-sm" @click="Export2Doc('export')"><i class="iconsminds-data-download"></i> Download word</button>
              <button class="btn btn-danger btn-sm" ><i class="iconsminds-like"></i> 123</button>
            </div>
          </b-card-body>
        </b-card>
      </b-colxx>

      <b-colxx xxs="12" md="12" xl="4" class="col-left">
<!--        <b-card class="mb-4" no-body>-->
<!--          <b-card-body class="p-0">-->
<!--&lt;!&ndash;            <video-player class-name="video-js side-bar-video card-img-top"&ndash;&gt;-->
<!--&lt;!&ndash;                          :autoplay="false" :controls="true"&ndash;&gt;-->
<!--&lt;!&ndash;                          :controlBar="{pictureInPictureToggle: false}"&ndash;&gt;-->
<!--&lt;!&ndash;                          poster="/assets/img/detail-1.jpg"&ndash;&gt;-->
<!--&lt;!&ndash;                          :sources="[{ src: 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4', type: 'video/mp4'}]" />&ndash;&gt;-->
<!--          </b-card-body>-->
<!--          <b-card-body>-->
<!--            <p class="list-item-heading mb-4">Homemade Cheesecake with Fresh Berries and Mint</p>-->
<!--            <footer>-->
<!--              <p class="text-muted text-small mb-0 font-weight-light">09.04.2018</p>-->
<!--            </footer>-->
<!--          </b-card-body>-->
<!--        </b-card>-->

        <b-card class="mb-4" no-body>
          <b-card-body>
            <b-card-title>{{$t('Lessons')}} </b-card-title>
            <div class="remove-last-border remove-last-margin remove-last-padding">
              <div class="pl-3 pt-2 pr-2 pb-2" v-for="lessonList in lessonLists" >
                <router-link :to="`/blog/detail/${lessonList.id}`" >
                  {{lessonList.title}}
                </router-link>
              </div>
            </div>
          </b-card-body>
        </b-card>

        <b-card class="mb-4" no-body>
          <b-card-body>
            <b-card-title>{{$t('Sections')}} </b-card-title>
            <div v-for="(sectionList, cIndex) in sectionLists" :key="`category_${cIndex}`" class="d-flex flex-row align-items-center mb-3">
<!--              <router-link :to="sectionList. link">-->
<!--                <i :class="`large-icon initial-height ${sectionList. icon}`"></i>-->
<!--              </router-link>-->
              <div class="pl-3 pt-2 pr-2 pb-2">
                <router-link :to="`/section/${sectionList.id}`">
                  {{sectionList.name}}
                </router-link>
              </div>
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
        id: this.$route.params.id,
        lessonLists: [],
        section: {},
        sectionLists: {}
      }
    },
    async mounted () {
      await this.getLesson(this.id)
      this.section = this.lesson.section;
      this.lessonLists = this.section.lessons;
      this.sectionLists = this.section.tutorial.sections;

      this.$refs.intro.invoke('setMarkdown', this.lesson.intro)
      this.$refs.content.invoke('setMarkdown', this.lesson.content)
    },
    computed: {
      ...mapGetters(['lesson'])
    },
     watch: {
      '$route.params.id': async function (id) {
        await this.getLesson(id)
        this.$refs.intro.invoke('setMarkdown', this.lesson.intro)
        this.$refs.content.invoke('setMarkdown', this.lesson.content)
      }
    },
    methods: {
      ...mapActions(['getLesson']),

      Export2Doc(element, filename = 'test') {
        var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
        var postHtml = "</body></html>";
        var html = preHtml+ document.getElementById(element).innerHTML +postHtml;

        var blob = new Blob(['\ufeff', html], {
          type: 'application/msword'
        });

        // Specify link url
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

        // Specify file name
        filename = filename?filename+'.doc':'document.doc';

        // Create download link element
        var downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);

        if(navigator.msSaveOrOpenBlob ){
          navigator.msSaveOrOpenBlob(blob, filename);
        }else{
          // Create a link to the file
          downloadLink.href = url;

          // Setting the file name
          downloadLink.download = filename;

          //triggering the function
          downloadLink.click();
        }

        document.body.removeChild(downloadLink);
      }

    }
  }
</script>
