<template>
  <Navbar />
  <section class="bg-dark text-light d-flex align-items-center justify-content-center" style="height: 100vh;">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-md-8 col-lg-4">
          <div class="card text-white rounded-0 bg-dark shadow-md p-4 border-1 border-white">
            <h2 class="text-center mb-4">Login</h2>
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input 
                  type="email" 
                  class="form-control rounded-0" 
                  id="email" 
                  v-model="form.email" 
                  required 
                  :disabled="loading"
                >
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input 
                  type="password" 
                  class="form-control rounded-0" 
                  id="password" 
                  v-model="form.password" 
                  required 
                  :disabled="loading"
                >
              </div>
              <button type="submit" class="btn btn-light w-100 rounded-0 mt-5" :disabled="loading">
                {{ loading ? "Logging in..." : "Login" }}
              </button>
            </form>
            <p class="text-center mt-3">
              Don't have an account? 
              <router-link to="/register" class="text-white">Register</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      loading: false
    };
  },
  methods: {
    async login() {
      this.loading = true;
      try {
        const response = await axios.post('/api/login', this.form);
        const token = response.data.token;

        // Store token in Vuex and localStorage
        this.$store.commit('SET_TOKEN', token);
        localStorage.setItem('token', token);

        // Fetch user data
        await this.$store.dispatch('fetchUser');

        this.$toast.open({
          message: 'Login successful',
          type: 'success',
        });

        // Redirect to dashboard
        this.$router.push({ name: 'Dashboard' });

      } catch (error) {
        this.$toast.open({
          message: 'Login failed: ' + (error.response?.data?.message || 'Invalid credentials'),
          type: 'error',
        });
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style>
.card {
  border-radius: 12px;
}
</style>
