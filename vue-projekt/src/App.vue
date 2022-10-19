

<template>
    <div class="wrapper">
      <Navigation />
      <RouterView />
    </div>
</template>

<script setup lang="ts">
import './assets/styles/tailwind.css';
import Navigation from './components/Navigation.vue'
import { RouterView } from 'vue-router'

</script>