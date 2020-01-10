import moment from 'moment'

export default {
  convertInputToPicker (datetime) {
    return this.convert(datetime)
  },
  convertPickerToInput (datetime) {
    return this.convert(datetime, 'YYYY/MM/DD H:mm')
  },
  convert (datetime, format = null) {
    return moment(datetime).format(format)
  },
}
