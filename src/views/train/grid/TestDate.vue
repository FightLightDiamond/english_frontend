<template>
    <div>
        {{moment()
        .startOf('month')
        .add(1, 'months')
        .endOf('month').format('DD/MM/YYYY')}}
        <datepicker @change="checkTime()" format="yyyy/MM/dd" placeholder="yyyy/MM/dd" :typeable="true"
                    v-model="date"></datepicker>
        <input
                v-model="date"
                v-validate="{ date_format: 'yyyy/MM/dd', date_between:['01/01/1990', maxStartDate] }"/>
    </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'

  export default {
    name: 'TestDate',
    methods: {
      checkTime () {
        var re = /[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])/
        var m

        if ((m = regex.exec(str)) !== null) {
          // The result can be accessed through the `m`-variable.
          m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`)
          })
        }

        while ((m = re.exec(this.date)) != null) {
          if (m.index === re.lastIndex) {
            re.lastIndex++
          }
        }
      },
      checkDate () {
        var myRegExp = /^\d{4}-[0-1][0-2]-[0-3]\d\s([0-1][0-9]|2[0-3]):[0-5]\d$/

        if (this.date.match(myRegExp)) {
          console.log('Good format')
        }
      },
      maxStartDate: function () {
        return moment()
          .startOf('month')
          .add(1, 'months')
          .endOf('month').format('DD/MM/YYYY')
      }
    }
  }
</script>

<style scoped>

</style>
