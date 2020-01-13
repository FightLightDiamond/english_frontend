<template>
  <div>
    <!--    <app-registration @userRegistered="userRegistered" :users="unregisteredUsers"></app-registration>-->
    <!--    <app-registrations @userUnregistered="userRegistered" :registrations="registrations"></app-registrations>-->
    <!--<b-row>-->
      <!--<b-colxx xss="12">-->
        <!--<t-grid></t-grid>-->
      <!--</b-colxx>-->
    <!--</b-row>-->
    <!--<b-row>-->
      <!--<b-colxx xss="12">-->
        <!--<e-grid></e-grid>-->
      <!--</b-colxx>-->
    <!--</b-row>-->

    <!--<b-row>-->
      <!--<b-colxx xxs="6">-->
        <!--<app-registration></app-registration>-->
      <!--</b-colxx>-->
      <!--<b-colxx xxs="6">-->
        <!--<app-registrations></app-registrations>-->
      <!--</b-colxx>-->
    <!--</b-row>-->
    <test-date></test-date>
  </div>
</template>

<script>
  import Registration from './Registration'
  import Registrations from './Registrations'
  import TGrid from './grid/TGrid'
  import EGrid from './grid/EGrid'
  import TestDate from './grid/TestDate'

  export default {
    name: 'Register',
    components: {
      appRegistration: Registration,
      appRegistrations: Registrations,
      tGrid: TGrid,
      eGrid: EGrid,
      testDate: TestDate,
    },
    // data() {
    //   return {
    //
    //   }
    // },
    // computed: {
    //   unregisteredUsers() {
    //     return this.users.filter((user) => {
    //       return !user.registered
    //     })
    //   }
    // },
    // methods: {
    // userRegistered(user) {
    //   const date = new Date()
    //   const userInfo = {
    //     userId: user.id,
    //     name: user.name,
    //     data: date.getMonth() + '/' + date.getDate()
    //   };
    //   this.registrations.push(userInfo)
    // },
    // userUnregistered(registration) {
    //   const user = this.users.find(user => {
    //     return user.id === registration.userId
    //   })
    //   user.registered = false
    //   this.registrations.splice(this.registrations.indexOf(registration), 1)
    // }
    // }
  }
</script>

<style>
  .vue-grid-item {
    background: silver;
  }
</style>

<style scoped>

</style>
