<script setup>
import { CContainer, CRow } from '@coreui/vue'
import HeaderVue from './components/HeaderVue.vue'
</script>

<template>
  <CContainer fluid class="main-container">
    <CRow>
      <HeaderVue />
    </CRow>
    <div class="content-area">
      <RouterView />
    </div>
  </CContainer>
</template>

<style lang="scss" scoped>
@use './assets/styles/main.scss';
</style>
