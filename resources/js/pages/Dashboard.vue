<template>
  <section class="bg-dark text-light align-content-center" style="height: 100vh;">
      <div class="container-fluid ">
          <h1 class="text-light text-center">Welcome {{ user }}</h1>
      </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'dashboard',
  data() {
    return {
      user: null
    }
  },
  async mounted() {
    try {
      const response = await axios.get('/api/logged-in-user', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } 
      });

      this.user = response.data.user; 
      // console.log('User:', this.user);
    } catch (error) {
      console.error('Error fetching user:', error);
      this.$router.push('/login'); 
    }
  }
}
</script>
