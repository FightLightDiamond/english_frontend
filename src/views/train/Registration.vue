<template>
  <div id="registration">
    <h3>Register here</h3>
    <hr>
    <table class="table">
      <tr>
        <th>Name</th>
        <th></th>
      </tr>
      <tr v-for="user in users">
        <td>{{ user.name }}</td>
        <td class="text-right">
          <button class="btn btn-primary btn-xs" @click="registerUser(user.id)">Register</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Registration',
  // props: ['users'],
  computed: {
    ...mapGetters({
      users: 'unregisteredUsers'
    })
    // users () {
    //   // return this.$store.state.train.users.filter(user => {
    //   //   return !user.registered
    //   // })
    //   return this.$store.getters.unregisteredUsers
    // }
  },
  methods: {
    ...mapMutations({
      registerUser: 'register'
    })
    // registerUser (userId) {
    //   //this.$emit('userRegistered', user)
    //   // user.registered = true
    //   //
    //   // const date = new Date()
    //   // const userInfo = {
    //   //   userId: user.id,
    //   //   name: user.name,
    //   //   date: date.getMonth() + '/' + date.getDate()
    //   // }
    //   //
    //   // this.$store.state.train.registrations.push(userInfo)
    //
    //   //this.$store.commit('register', userId)
    //   this.$store.dispatch('register', userId)
    // }
  }
}
</script>

<style scoped>

</style>
