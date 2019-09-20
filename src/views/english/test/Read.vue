<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
       <span>
        <h1>Sections</h1>
        <b-nav class="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <b-breadcrumb :items="items"/>
        </b-nav>
      </span>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('Read')">
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'Read'
  }
</script>

<style scoped>

</style>
