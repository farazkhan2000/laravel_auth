<template>
    <Navbar />
    <router-view v-slot="{ Component, route }">
        <div :key="route.name">
            <Component :is="Component" />
        </div>
    </router-view>
</template>

<script>
import Navbar from './components/common/Navbar.vue';

export default {
    components: {
        'Navbar': Navbar,
    }
}
</script>