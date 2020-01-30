<template>
  <div id="registrations">
    <div class="summary">
      <h3>Registrations: {{ total }}</h3>
    </div>
    <hr>

    <table class="table table-bordered">
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th></th>
      </tr>
      <tr v-for="registration in registrations">
        <td>{{ registration.name }}</td>
        <td class="date">{{ registration.date }}</td>
        <td class="text-right">
          <button class="btn btn-xs btn-danger" @click="unregister(registration)">Unregister</button>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Registrations',
  // props: ['registrations'],
  computed: {
    ...mapGetters({
      registrations: 'registrations',
      total: 'totalRegistrations'
    })

    // registrations () {
    //   //return this.$store.state.train.registrations
    //   return this.$store.getters.registrations
    // },
    // total () {
    //   //return this.$store.state.train.registrations.length
    //   return this.$store.getters.totalRegistrations
    // },
  },
  methods: {
    ...mapActions(['unregister'])
    // unregister (registration) {
    //   //this.$emit('userUnregistered', registration)
    //   // const user = this.$store.state.train.users.find(user => {
    //   //   return user.id === registration.userId
    //   // })
    //   //
    //   // user.registered = false
    //   // this.$store.state.train.registrations.splice(this.$store.state.train.registrations.indexOf(registration), 1)
    //   const payload = {
    //     type: 'unregister',
    //     userId: registration.userId,
    //   };
    //
    //   //this.$store.commit(payload)
    //   this.$store.dispatch(payload)
    // }
  }
}
</script>

<style scoped>

</style>
