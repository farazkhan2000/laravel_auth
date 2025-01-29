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
                <input type="email" class="form-control rounded-0" id="email" v-model="form.email" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control rounded-0" id="password" v-model="form.password" required>
              </div>
              <button type="submit" class="btn btn-light w-100 rounded-0 mt-5">Login</button>
            </form>
            <p class="text-center mt-3">
              Don't have an account? <router-link to="/register" class="text-white" >Register</router-link>
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
      }
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/login', this.form);
        const token = response.data.token; 
        console.log('token: ', token);
        localStorage.setItem('token', token); 

        this.$toast.open({
          message: 'Login successful',
          type: 'success',
        });

        // Redirect to dashboard after successful login
        this.$router.push('/dashboard');
      } catch (error) {
        this.$toast.open({
          message: 'Login failed: ' + (error.response?.data?.message || 'Invalid credentials'),
          type: 'error',
        });
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
