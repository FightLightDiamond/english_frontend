import moment from 'moment'
const error = 'Invalid date'

export default {
  convertInputToPicker (datetime) {
    const data = this.convert(datetime)

    if (data === error) {
      return ''
    }
    return data
  },
  convertPickerToInput (datetime) {
    const data = this.convert(datetime, 'YYYY/MM/DD H:mm')

    if (data === error) {
      return ''
    }
    return data
  },
  convert (datetime, format = null) {
    const data = moment(datetime).format(format)

    if (data === error) {
      return ''
    }
    return data
  }
}
