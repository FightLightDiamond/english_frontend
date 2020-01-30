import moment from 'moment'

export default class ValidateDate {
  check (date) {
    if (!this.checkFormat(date)) return 'The field format is invalid. Ex: ' + moment().format('YYYY/MM/DD')
    if (!this.checkDay(date)) return 'The day of field is incorrect'

    return true
  }

  checkFormat (date) {
    const reGoodDate = /^((19|20)?[0-9]{2}[- /.](0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01]))*$/
    return reGoodDate.test(date)
  }

  isValidDateTime (dateTime) {
    console.log('checkDateTimeFormat', this.checkDateTimeFormat(dateTime))
    console.log('checkDateTimeValue', this.checkDateTimeValue(dateTime))
    return this.checkDateTimeFormat(dateTime) && this.checkDateTimeValue(dateTime)
  }

  checkDateTimeFormat (dateTime) {
    console.log('dateTime', dateTime)
    const reGoodDate = /^((19|20)?[0-9]{2}[- /.](0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])) (2[0-3]|[01][0-9]):(00|30)/
    return reGoodDate.test(dateTime)
  }

  checkDateTimeValue (dateTime) {
    const dateTimeArray = dateTime.split(' ')
    console.log(dateTimeArray)
    return this.checkDay(dateTimeArray[0])
  }

  checkDay (date) {
    const a = date.split('/')
    const endMonth = moment(a[0] + '/' + a[1]).endOf('month')
    const day = endMonth.format('DD')
    console.log(date)
    return a[2] <= day
  }
}
