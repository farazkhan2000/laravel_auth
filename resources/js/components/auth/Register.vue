<template>
<Navbar />
<section class="bg-dark text-light d-flex align-items-center justify-content-center" style="height: 100vh;">
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-8 col-lg-4">
        <div class="card text-white rounded-0 bg-dark shadow-md p-4 border-1 border-white">
          <h2 class="text-center mb-4">Register</h2>
          <form @submit.prevent="register">
            <div class="mb-3">
              <label for="name" class="form-label">Full Name</label>
              <input type="text" class="form-control rounded-0" id="name" placeholder="Enter your Name" v-model="form.name" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control rounded-0" id="email" placeholder="Enter your Email" v-model="form.email" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control rounded-0" id="password" placeholder="Password" v-model="form.password" required>
            </div>
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Confirm Password</label>
              <input type="password" class="form-control rounded-0" id="confirmPassword" placeholder="Re-enter your Password" v-model="form.confirmPassword" required>
            </div>
            <button type="submit" class="btn btn-light w-100 mt-4 rounded-0">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  mounted() {},
  methods: {
    async register() {
      if (this.form.password !== this.form.confirmPassword) {
        this.$toast.open({
          message: 'Passwords do not match',
          type: 'error',
        });
        return;
      }

      try {
        const response = await axios.post('/api/register', this.form);
        this.$toast.open({
          message: 'Registration successful',
          type: 'success',
        });
        this.form.name = '';
        this.form.email = '';
        this.form.password = '';
        this.form.confirmPassword = '';

        this.$router.push('/login')
      } catch (error) {
        this.$toast.open({
          message: 'Registration failed: ' + error.response.data.message,
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
