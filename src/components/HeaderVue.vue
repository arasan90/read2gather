<script setup>
import { CButton, CContainer } from '@coreui/vue'
import { BookOpen, Search, Users, Library, Trophy, LogIn, MessageCircle } from 'lucide-vue-next'
</script>

<template>
  <div style="background-color: #ffffff">
    <CContainer class="d-flex justify-content-between align-items-center py-2 px-3">
      <div class="d-flex align-items-center">
        <RouterLink to="/" class="text-decoration-none d-flex align-items-center gap-2 highlighted-text"> <BookOpen size="36" style="color: #bd2835" />Read 2 Gather </RouterLink>
      </div>
      <div class="d-flex align-items-center gap-4">
        <RouterLink to="/library" class="text-decoration-none link-text"> <Library class="w-5 h-5 me-2" />My Library </RouterLink>
        <RouterLink to="/discover" class="text-decoration-none link-text"> <Search class="w-5 h-5 me-2" />Discover </RouterLink>
        <RouterLink to="/achievements" class="text-decoration-none link-text"> <Trophy class="w-5 h-5 me-2" />Achievements </RouterLink>
        <RouterLink to="/friends" class="text-decoration-none link-text"> <Users class="w-5 h-5 me-2" /> Friends </RouterLink>
        <RouterLink to="/messages" class="text-decoration-none link-text"> <MessageCircle class="w-5 h-5 me-2" />Messages </RouterLink>
        <CButton color="secondary" size="sm"><LogIn class="w-4 h-4 me-2" />Sign In</CButton>
      </div>
    </CContainer>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/main.scss';
</style>
