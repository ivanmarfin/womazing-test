<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/">
          Главная
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/ui">
          UI
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #eaeaea;
  padding: 20px 0;

  .nav-list {
    max-width: 1280px;
    margin: 0 auto;
    list-style: none;
    display: flex;
    gap: 20px;

    .nav-item > a {
      text-decoration: none;
      color: #2c3e50;
    }
  }
}
</style>
