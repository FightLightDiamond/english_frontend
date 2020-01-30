import { currentUser } from '@/constants/config'
import FactoryService from '../../services/FactoryService'
import Auth from '../../config/Auth'

export default {
  state: {
    swiperInfiniteOption: {
      slidesPerView: 4,
      loop: true
    },
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  },
  getters: {
    swiperInfiniteOption: state => state.swiperInfiniteOption,
    swiperOption: state => state.swiperOption
  },
  mutations: {

  },
  actions: {

  }
}
