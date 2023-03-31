<template>
  <Navbar class="nav"/>
  <main class="layout">
    <router-view/>
  </main>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
