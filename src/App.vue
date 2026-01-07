<script setup>
import { CContainer, CRow } from '@coreui/vue'
import HeaderVue from './components/HeaderVue.vue'
</script>

<template>
  <CContainer fluid class="main-container p-0">
    <CRow>
      <HeaderVue />
    </CRow>
    <div class="content-area p-0">
      <RouterView />
    </div>
  </CContainer>
</template>

<style lang="scss" scoped>
@use './assets/styles/main.scss';
</style>
