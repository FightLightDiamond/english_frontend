<template>
    <div>
        <div>
            <h2>Date</h2>
            <ValidationObserver v-slot="{ invalid }">
                <form @submit.prevent="onSubmit">
                    <validation-provider rules="checkdate|required" v-slot="{ errors }">
                        <input v-model="date" placeholder="yyyy/MM/dd" name="date"/>
                        <span>{{ errors[0] }}</span>
                    </validation-provider>

                    <button type="submit" :disabled="invalid">Submit</button>
                </form>
            </ValidationObserver>

            <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(onSubmit)">
                    <validation-provider rules="checkdate|required" v-slot="{ errors }">
                        <input v-model="date" name="date"/>
                        <span>{{ errors[0] }}</span>
                    </validation-provider>

                    <button type="submit">Submit</button>
                </form>
            </ValidationObserver>
        </div>

        <div>
            <h2>Input</h2>
            <validation-provider rules="required" v-slot="{ errors }">
                <input v-model="value" name="myinput" type="text"/>
                <span>{{ errors[0] }}</span>
            </validation-provider>
        </div>

        <div>
            <hr>
            <h2>Datetime</h2>
            <datetime v-model="datetime"
                      format="yyyy/MM/dd HH:mm"
                      name="datetime"
                      type="datetime"
                      input-id="startDate"
            ></datetime>

            <validation-provider rules="checkdate|required" v-slot="{ errors }">
                <input v-model="datetimeInput" @change="changeDatetime()">
                <span>{{ errors[0] }}</span>
            </validation-provider>
            {{datetimeInput}}
        </div>


    </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'
  import { Datetime } from 'vue-datetime'
  import 'vue-datetime/dist/vue-datetime.css'
  import ValidateDate from '../../../services/ValidateDate'

  import { ValidationProvider, extend } from 'vee-validate'
  import { required } from 'vee-validate/dist/rules'
  import { Validator } from 'vee-validate'
  import { ValidationObserver } from 'vee-validate'

  const validator = new ValidateDate

  extend('checkdate', value => {
    return validator.check(value)
  })

  import formatDatetime from '../../../helpers/datetime'

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
      ValidationProvider,
      ValidationObserver,
      datetime: Datetime
    },
    mounted () {

    },
    watch: {
      datetime: function (val) {
        console.log('Date time watch')
        this.datetimeInput = formatDatetime.convertPickerToInput(val)
      },
    },
    data () {
      return {
        datetime: formatDatetime.convertInputToPicker('2020/12/12/ 12:12'),
        datetimeInput: formatDatetime.convertPickerToInput(this.datetime),
        date: '2020/12/12',
        value: ''
      }
    },
    methods: {
      changeDatetime () {
        this.datetime = formatDatetime.convertInputToPicker(this.datetimeInput)
      },
      checkDate () {
        const validator = new ValidateDate
        validator.check(this.date)
      },
    }
  }
</script>

<style scoped>

</style>
