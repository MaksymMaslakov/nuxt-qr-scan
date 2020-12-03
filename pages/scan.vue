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
            Last result:
            <b>{{ result }}</b>
          </p>
          <qrcode-stream @decode="onDecode" @init="onInit" />
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: '',
      error: ''
    }
  },
  watch: {
    error(e) {
      this.$bvToast.toast(e, {
        title: 'Error',
        variant: 'danger',
        autoHideDelay: 3000
      })
    }
  },
  methods: {
    onDecode(result) {
      this.result = result
      this.$router.push({
        name: 'result',
        query: { r: result }
      })
    },

    async onInit(promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permission'
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device'
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)'
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?'
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable'
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser'
        }
      }
    }
  }
}
</script>
