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
          <p class="decode-result">
            Result:
            <b>
              <a v-if="isUrl" :href="result" target="_blank">{{ result }}</a>
              <span v-else>{{ result }}</span>
            </b>
          </p>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
import isUrl from 'is-url'
export default {
  data() {
    return {
      isUrl: false,
      result: null
    }
  },
  mounted() {
    this.result = this.$route.query.r
    this.isUrl = isUrl(this.result)
  }
}
</script>
