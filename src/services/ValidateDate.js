import moment from 'moment'

export default class ValidateDate {
  check (date) {
    if (!this.checkFormat(date)) return 'The format field must yyyy/MM/dd. Ex: ' + moment().format('YYYY/MM/DD')
    if (!this.checkDay(date)) return 'The day of field is incorrect'
    return true
  }

  checkFormat (date) {
    const reGoodDate = /^((19|20)?[0-9]{2}[- /.](0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01]))*$/
    return reGoodDate.test(date)
  }

  checkDay (date) {
    const a = date.split('/')
    const endMonth = moment(a[0] + '/' + a[1]).endOf('month')
    const day = endMonth.format('DD')

    return a[2] <= day
  }
}
