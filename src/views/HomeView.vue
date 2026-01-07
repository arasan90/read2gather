<script setup>
import { CRow } from '@coreui/vue'
</script>

<!-- <template>
  <div class="landing-page-top-section flex">
    <div class="flex">
      <h1 :style="{ fontWeight: 'bold', fontSize: '4rem' }">
        Your Reading Journey, <br />
        <span :style="{ color: '#bd2835' }">Connected.</span>
      </h1>
    </div>
    <div class="flex">
      <h2>Discover, Share, and Grow with Fellow Book Lovers.</h2>
    </div>
  </div>
</template> -->

<template>
  <div class="landing-page-top-section">
    <CContainer>
      <CRow class="justify-content-center">
        <div>
          <h1 :style="{ fontWeight: 'bold', fontSize: '4rem' }">
            Your Reading Journey, <br />
            <span :style="{ color: '#bd2835' }">Connected.</span>
          </h1>
        </div>
      </CRow>
      <CRow class="justify-content-center mt-3">
        <div>
          <h2>Discover, Share, and Grow with Fellow Book Lovers.</h2>
        </div>
      </CRow>
      <CRow class="justify-content-center mt-4">
        <div>
          <button class="btn btn-primary btn-lg">Get Started</button>
        </div>
      </CRow>
    </CContainer>
  </div>
</template>
