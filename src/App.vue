<script setup>
import { CContainer, CRow } from '@coreui/vue'
import HeaderVue from './components/HeaderVue.vue'
</script>

<template>
  <CContainer fluid class="main-container p-0">
    <CRow class="app-header-row">
      <HeaderVue />
    </CRow>
    <div class="content-area p-0">
      <RouterView />
    </div>
  </CContainer>
</template>

<style scoped>
.app-header-row {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
