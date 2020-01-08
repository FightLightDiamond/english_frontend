<template>
    <div>
        <div>
            <h2>Date</h2>
            <!--{{getDayEndMonth()}}-->
            <!--<datepicker @change="checkTime()" format="yyyy/MM/dd" placeholder="yyyy/MM/dd" :typeable="true"-->
            <!--v-model="date"></datepicker>-->
            <!--<input v-model="date" v-validate="{ date_format: 'yyyy/MM/dd', date_between:['01/01/1990', maxStartDate] }"/>-->
            <validation-provider rules="checkdate" v-slot="{ errors }">
                <input v-model="date" name="date"/>
                <span>{{ errors[0] }}</span>
            </validation-provider>
        </div>

        <div>
            <h2>Input</h2>
            <validation-provider rules="required" v-slot="{ errors }">
                <input v-model="value" name="myinput" type="text"/>
                <span>{{ errors[0] }}</span>
            </validation-provider>
        </div>
    </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'
  import ValidateDate from '../../../services/ValidateDate'
  import { ValidationProvider, extend } from 'vee-validate'
  import { required } from 'vee-validate/dist/rules'
  import { Validator } from 'vee-validate'
  // import { extend } from 'vee-validate';
  const validator = new ValidateDate

  extend('checkdate', value => {
    return validator.check(value)
  })

  // extend('checkdate',{
  //   validate: value => {
  //     return validator.check(value);
  //   },
  //   message: 'This {_field_} is invalid'
  // });

  extend('required', {
    ...required,
    message: 'This field is required'
  })

  export default {
    name: 'TestDate',
    components: {
      Datepicker: Datepicker,
      ValidationProvider
    },
    data () {
      return {
        date: null,
        value: ''
      }
    },
    methods: {
      checkDate () {

        const validator = new ValidateDate

        validator.check(this.date)
      },
      getDayEndMonth () {
        if (this.date) {
          const a = this.date.split('/')
          const endMonth = this.moment(a[0] + '/' + a[1]).endOf('month')
          const day = endMonth.format('DD')

          console.log('END MONTH', endMonth)
          console.log('END DAY', day)

          return day
        }
      },
      // validatorDate (date) {
      //   if (!this.checkFormat(date)) {
      //     alert('Format phải là yyyy/MM/dd. Ex: ' + this.moment().format('YYYY/MM/DD'))
      //     return;
      //   }
      //   if (!this.checkDay(date)) {
      //     alert('Giá trị ngày tháng chưa đúng. Vui lòng kiểm tra lại')
      //     return;
      //   }
      // },
      // checkFormat (date) {
      //   const reGoodDate = /^((19|20)?[0-9]{2}[- /.](0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01]))*$/
      //   return reGoodDate.test(date)
      // },
      // checkDay (date) {
      //   const a = date.split('/')
      //   const endMonth = this.moment(a[0] + '/' + a[1]).endOf('month')
      //   const day = endMonth.format('DD')
      //
      //   return a[2] <= day
      // },
    }
  }
</script>

<style scoped>

</style>
