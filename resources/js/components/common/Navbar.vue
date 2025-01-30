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
          <li v-if="!user" class="nav-item">
            <RouterLink class="nav-link" to="/register" @click="closeNavbar">Register</RouterLink>
          </li>
          <li v-if="!user" class="nav-item">
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
import { mapGetters, mapActions } from 'vuex';

export default {
   name: 'Navbar',
  computed: {
    ...mapGetters(['user']) // Map the 'user' getter from Vuex
  },
  methods: {
    ...mapActions(['fetchUser', 'logoutUser']), // Map Vuex actions
    closeNavbar() {
      const navbarCollapse = document.querySelector("#navbarSupportedContent");
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    }
  },
  created() {
    this.fetchUser(); // Fetch user data when the component is created
  }
};
</script>

<style>
.card {
  border-radius: 12px;
}
</style>