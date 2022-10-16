<script setup lang="ts">
import './assets/css/tailwind.css';
import Navigation from './components/Navigation.vue'
import { RouterView } from 'vue-router'

</script>

<template>
    <div class="wrapper">
      <Navigation />
      <RouterView />
    </div>
</template>

