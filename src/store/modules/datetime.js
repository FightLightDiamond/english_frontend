const state = {

}

const getters = {

}

const mutations = {
  convertInputToPicker (datetime) {
    return this.convertDateTime(datetime)
  },
  convertPickerToInput (datetime) {
    return this.convertDateTime(datetime, 'YYYY/MM/DD H:mm')
  },
  convertDateTime (datetime, format = null) {
    return this.moment(datetime).format(format)
  },
}



export default {
  state,
  getters,
  mutations,
  actions
}
