<template>
  <nav class="navbar fixed-top">
    <div class="d-flex align-items-center navbar-left">
      <a class="menu-button d-none d-md-block"></a>
      <!--      <a class="menu-button d-none d-md-block"></a>-->
      <!--      <a class="menu-button-mobile d-xs-block d-sm-block d-md-none"></a>-->
      <div class="d-inline-block">
      </div>
      <div class="d-inline-block">
        <a
          class=" btn-sm ml-2"
          target="_top"
          href="/english"
        ><i class="simple-icon-home"></i> {{$t('Home')}}</a>
      </div>
      <div class="d-inline-block">
        <a class=" btn-sm ml-2" target="_top" href="/courses">
          <i class="iconsminds-books"></i> {{$t('Courses')}}
        </a>
      </div>
      <div class="d-inline-block">
        <a class=" btn-sm ml-2" target="_top" href="/histories">
          <i class="iconsminds-notepad"></i> {{$t('History')}}
        </a>
      </div>
      <div class="d-inline-block">
        <a class=" btn-sm ml-2" target="_top" href="/remind">
          <i class="simple-icon-clock"></i> {{$t('Remind')}}
        </a>
      </div>
    </div>
    <router-link class="" style="min-width: 200px" to='/english'>
      <h2 style="color: #145388"><big>Crazy English</big></h2>
      <!--      <span class="logo d-none d-xs-block"></span>-->
      <!--      <span class="logo-mobile d-block d-xs-none"></span>-->
    </router-link>

    <div class="navbar-right">
      <!--      <div class="d-inline-block">-->
      <!--        <a-->
      <!--          class=" btn-sm ml-2"-->
      <!--          target="_top"-->
      <!--          href="/blog"-->
      <!--        >{{$t('Blog')}}</a>-->
      <!--      </div>-->
      <div class="d-inline-block">
        <!--        <a-->
        <!--          class=" btn-sm ml-2"-->
        <!--          target="_top"-->
        <!--          href="/contact"-->
        <!--        ><i class="iconsminds-location-2"></i> {{$t('Contact')}}</a>-->
      </div>
      <!--      <div class="d-inline-block">-->
      <!--        <a-->
      <!--          class=" btn-sm ml-2"-->
      <!--          target="_top"-->
      <!--          href="/english"-->
      <!--        >{{$t('About')}}</a>-->
      <!--      </div>-->
      <div class="header-icons d-inline-block align-middle">
        <div class="position-relative d-none d-sm-inline-block ">
          <div class="btn-group">
            <b-button
              variant="empty"
              class="header-icon btn-sm"
              @click="toggleFullScreen">
              <i
                :class="{'d-inline-block':true,'simple-icon-size-actual':fullScreen,'simple-icon-size-fullscreen':!fullScreen }"/>
            </b-button>
          </div>
        </div>
      </div>
      <div class="user d-inline-block">
        <b-dropdown
          class="dropdown-menu-right"
          right
          variant="empty"
          toggle-class="p-0"
          menu-class="mt-3"
          no-caret
        >
          <template slot="button-content">
            <span class="name mr-1">{{user.email}}</span>
            <span>
              <img
                :src="user.avatar"/>
            </span>
          </template>
          <b-dropdown-item>
            <router-link :to="`/profiles`">
              Profile
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link :to="`/change-password`">
              Change password
            </router-link>
          </b-dropdown-item>
          <b-dropdown-divider/>
          <b-dropdown-item @click="logout">Sign out</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>
<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import { MenuIcon, MobileMenuIcon } from '@/components/Svg'
  import Switches from 'vue-switches'

  import notifications from '@/data/notifications'
  import {
    searchPath,
    menuHiddenBreakpoint,
    localeOptions,
    buyUrl,
    defaultColor
  } from '@/constants/config'
  import { getDirection, setDirection } from '@/utils'

  export default {
    components: {
      MenuIcon,
      MobileMenuIcon,
      Switches
    },
    data () {
      return {
        selectedParentMenu: '',
        searchKeyword: '',
        isMobileSearch: false,
        isSearchOver: false,
        fullScreen: false,
        menuHiddenBreakpoint,
        searchPath,
        localeOptions,
        buyUrl,
        notifications,
        user: {}
      }
    },
    methods: {
      ...mapMutations(['changeSideMenuStatus', 'changeSideMenuForMobile']),
      ...mapActions(['setLang', 'signOut']),

      changeLocale (locale, direction) {
        const currentDirection = getDirection().direction
        if (direction !== currentDirection) {
          setDirection(direction)
        }

        this.setLang(locale)
      },
      logout () {
        this.signOut().then(() => {
          this.$router.push('/login')
        })
      },

      toggleFullScreen () {
        const isInFullScreen = this.isInFullScreen()

        var docElm = document.documentElement
        if (!isInFullScreen) {
          if (docElm.requestFullscreen) {
            docElm.requestFullscreen()
          } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen()
          } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen()
          } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen()
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen()
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
          }
        }
        this.fullScreen = !isInFullScreen
      },
      getThemeColor () {
        return localStorage.getItem('themeColor')
          ? localStorage.getItem('themeColor')
          : defaultColor
      },
      isInFullScreen () {
        return (
          (document.fullscreenElement && document.fullscreenElement !== null) ||
          (document.webkitFullscreenElement &&
            document.webkitFullscreenElement !== null) ||
          (document.mozFullScreenElement &&
            document.mozFullScreenElement !== null) ||
          (document.msFullscreenElement && document.msFullscreenElement !== null)
        )
      }
    },
    computed: {
      ...mapGetters({
        currentUser: 'currentUser',
        menuType: 'getMenuType',
        menuClickCount: 'getMenuClickCount'
      })
    },
    beforeDestroy () {
      document.removeEventListener('click', this.handleDocumentforMobileSearch)
    },
    created () {
      const color = this.getThemeColor()
      this.user = JSON.parse(localStorage.getItem('user'))
    },
    watch: {
      '$i18n.locale' (to, from) {
        if (from !== to) {
          this.$router.go(this.$route.path)
        }
      },

    }
  }
</script>
