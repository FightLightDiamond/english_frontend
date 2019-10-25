<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
       <span>
        <h1>Contacts</h1>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <b-breadcrumb :items="items"/>
        </b-nav>
      </span>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [{
          text: 'Dashboard',
          to: '/administrator/dashboard',
        }, {
          text: 'Courses',
          to: '/administrator/courses',
        }, {
          text: 'List',
          active: true
        },
        ],
        fields: [
          {
            name: 'name',
            title: '<span class="orange glyphicon glyphicon-user"></span> Lesson',
          },
          '__slot:actions'
        ],
      }
    },
  }
</script>

<style scoped>

</style>
