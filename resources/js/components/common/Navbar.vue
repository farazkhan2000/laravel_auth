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
          <li class="nav-item">
            <RouterLink class="nav-link" to="/dashboard" @click="closeNavbar">Dashboard</RouterLink>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/register" @click="closeNavbar">Register</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/login" @click="closeNavbar">Login</RouterLink>
          </li>
          <li class="nav-item">
            <button class="nav-link" @click="logoutUser">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    closeNavbar() {
      const navbarCollapse = document.querySelector("#navbarSupportedContent");
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    },
    async logoutUser() {
      try {
        const response = await axios.post('/api/logout');
        
        this.$toast.open({
          message: 'logout successful',
          type: 'success',
        });

        this.$router.push('/login');
      } catch (error) {
        this.$toast.open({
          message: 'Logout failed: ' + (error.response?.data?.message || 'Invalid credentials'),
          type: 'error',
        });

      }
    }
  }
};
</script>
