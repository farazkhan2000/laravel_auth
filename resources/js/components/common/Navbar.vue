<template>
  <nav class="navbar fixed-top bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <RouterLink class="nav-link navbar-brand" aria-current="page" to="/">laravue</RouterLink>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-if="user" class="nav-item">
            <RouterLink class="nav-link" to="/dashboard" @click="closeNavbar">Dashboard</RouterLink>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-if="user == null" class="nav-item">
            <RouterLink class="nav-link" to="/register" @click="closeNavbar">Register</RouterLink>
          </li>
          <li v-if="user == null" class="nav-item">
            <RouterLink class="nav-link" to="/login" @click="closeNavbar">Login</RouterLink>
          </li>
          <li v-if="user" class="nav-item">
            <button class="nav-link" @click="logoutUser">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
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
    } catch (error) {
      console.error('Error fetching user:', error);
      this.$router.push('/login');
    }
  },
  methods: {
    closeNavbar() {
      const navbarCollapse = document.querySelector("#navbarSupportedContent");
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    },
    async logoutUser() {
      try {
        await axios.post('/api/logout', {}, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } 
        });
        
        this.$toast.open({
          message: 'Logout successful',
          type: 'success',
        });

        localStorage.removeItem('token'); // Clear the token from local storage
        this.user = null; // Clear user data
        this.$router.push('/login'); // Redirect to login page
      } catch (error) {
        this.$toast.open({
          message: 'Logout failed: ' + (error.response?.data?.message || 'Invalid credentials'),
          type: 'error',
        });
      }
    },
  }
};
</script>

<style>
.card {
  border-radius: 12px;
}
</style>