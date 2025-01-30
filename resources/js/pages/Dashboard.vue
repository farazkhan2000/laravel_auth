<template>
  <section class="bg-dark text-light align-content-center" style="height: 100vh;">
      <div class="container-fluid ">
          <h1 class="text-light text-center">Dashboard</h1>
          <h4>{{ user }}</h4>
      </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters(['user']) 
  },
}
</script>