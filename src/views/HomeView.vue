<script setup>
import { CContainer, CRow, CCard, CCardBody, CCardTitle, CCardText } from '@coreui/vue'
import { BookOpen, Users, Search, Trophy } from 'lucide-vue-next'
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
      <CRow class="mt-3">
        <div>
          <h4 :style="{ color: '#847062' }">Discover, Share, and Grow with Fellow Book Lovers.</h4>
        </div>
      </CRow>
      <CRow class="mt-4">
        <div>
          <button class="btn btn-primary btn-lg">Get Started</button>
        </div>
      </CRow>
    </CContainer>
  </div>
  <div class="landing-page-middle-section">
    <CContainer>
      <CRow class="mt-5 mb-4"><h3 :style="{ fontWeight: 'bold' }">Everything You Need to Share Your Love of Reading</h3> </CRow>
      <CRow>
        <CCard style="width: 18rem; height: 12rem; border-radius: 0.7rem; margin-right: 2rem">
          <CCardBody>
            <CCardTitle class="align-items-center">
              <div class="d-flex flex-column align-items-center justify-content-center w-100">
                <div class="circle-red mb-2">
                  <BookOpen color="darkred" stroke-width="2px" size="35px"></BookOpen>
                </div>
                <span>Personal Library</span>
              </div>
            </CCardTitle>
            <CCardText><h5 class="mt-3" :style="{ color: '#847062', fontSize: 'medium' }">Curate your collection and track your reading journey</h5></CCardText>
          </CCardBody>
        </CCard>
        <CCard style="width: 18rem; height: 12rem; border-radius: 0.7rem; margin-right: 2rem">
          <CCardBody>
            <CCardTitle class="align-items-center">
              <div class="d-flex flex-column align-items-center justify-content-center w-100">
                <div class="circle-orange mb-2">
                  <Search color="orange" stroke-width="2px" size="35px"></Search>
                </div>
                <span>Discover Books</span>
              </div>
            </CCardTitle>
            <CCardText><h5 class="mt-3" :style="{ color: '#847062', fontSize: 'medium' }">Search through curated books and add them instantly</h5></CCardText>
          </CCardBody>
        </CCard>
        <CCard style="width: 18rem; height: 12rem; border-radius: 0.7rem; margin-right: 2rem">
          <CCardBody>
            <CCardTitle class="align-items-center">
              <div class="d-flex flex-column align-items-center justify-content-center w-100">
                <div class="circle-red mb-2">
                  <Trophy color="darkred" stroke-width="2px" size="35px"></Trophy>
                </div>
                <span>Unlock Achievements</span>
              </div>
            </CCardTitle>
            <CCardText><h5 class="mt-3" :style="{ color: '#847062', fontSize: 'medium' }">Earn badges by reaching reading milestones</h5></CCardText>
          </CCardBody>
        </CCard>
        <CCard style="width: 18rem; height: 12rem; border-radius: 0.7rem">
          <CCardBody>
            <CCardTitle class="align-items-center">
              <div class="d-flex flex-column align-items-center justify-content-center w-100">
                <div class="circle-orange mb-2">
                  <Users color="orange" stroke-width="2px" size="35px"></Users>
                </div>
                <span>Connect with Readers</span>
              </div>
            </CCardTitle>
            <CCardText><h5 class="mt-3" :style="{ color: '#847062', fontSize: 'medium' }">Find readers who share your favorite genres</h5></CCardText>
          </CCardBody>
        </CCard>
      </CRow>
    </CContainer>
  </div>
  <div class="landing-page-bottom-section">
    <CContainer>
      <CRow class="justify-content-center">
        <div>
          <h1 class="mt-5" :style="{ fontWeight: 'bold' }">Ready to start your literary adventure?</h1>
        </div>
      </CRow>
      <CRow class="mt-3">
        <div>
          <h5 :style="{ color: '#847062' }">Join a community of passionate readers and never lose track of your next great read</h5>
        </div>
      </CRow>
      <CRow class="mt-4">
        <div>
          <button class="btn btn-primary btn-lg">Build your library now</button>
        </div>
      </CRow>
    </CContainer>
  </div>
</template>

<style scoped>
.landing-page-top-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/images/landing-bg.png');
  background-position-y: center;
  text-align: center;
}

.landing-page-middle-section {
  display: flex;
  justify-content: center;
  height: 25vh;
  background-color: rgba(231, 225, 218, 0.3);
  font-weight: bold;
  text-align: center;
}

.landing-page-bottom-section {
  display: flex;
  justify-content: center;
  height: 25vh;
  background-color: rgba(239, 235, 231, 0.3);
  font-weight: bold;
  text-align: center;
}

.circle-red {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 0, 0, 0.1);
}

.circle-orange {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(239, 164, 98, 0.227);
}

.btn-primary {
  background-color: #bd2835;
  border-color: #bd2835;
}
</style>
