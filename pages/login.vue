<template>
  <b-overlay :show="isLoading" rounded="sm">
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
            <b-form @submit.prevent="onSubmit">
              <h1 class="h3 mb-3 text-center font-weight-normal">Sign in</h1>
              <b-form-group label="Email:" label-for="email">
                <b-form-input
                  id="email"
                  v-model="loginData.email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter email"
                />
              </b-form-group>

              <b-form-group size="sm" label="Password:" label-for="password">
                <b-form-input
                  id="password"
                  v-model="loginData.password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                />
              </b-form-group>
              <b-button block type="submit" variant="primary">Sign in</b-button>
            </b-form>
          </b-card-body>
        </b-card>
      </div>
    </div>
  </b-overlay>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'full-page',
  data() {
    return {
      loginData: {
        email: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    onSubmit() {
      this.isLoading = true
      try {
        this.login(this.loginData)
        this.$router.push({ name: 'scan' })
      } catch (error) {
        alert(error)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
