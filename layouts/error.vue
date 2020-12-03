<template>
  <div
    class="container d-flex min-vh-100 justify-content-center align-items-center"
  >
    <div class="row w-100">
      <b-card
        header-tag="header"
        footer-tag="footer"
        class="col-12 col-md-8 col-lg-5 mx-auto"
      >
        <b-card-body>
          <h1 v-if="error.statusCode === 404">404 Page not found</h1>
          <h1 v-else>An error occurred</h1>
          <NuxtLink :to="{ name: 'scan' }">Home page</NuxtLink>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
