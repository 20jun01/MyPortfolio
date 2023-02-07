<template>
  <v-container>
    <XyzTransition appear duration="auto">
      <div>
        <v-row class="page-hero" xyz="fade small stagger ease-out-back">
          <v-col cols="12">
            <v-avatar class="xyz-nested">
              <img src="https://avatars.githubusercontent.com/u/56793204?s=96&v=4" alt="Urturn">
            </v-avatar>
          </v-col>
        </v-row>
        <v-row class="page-hero" xyz="fade small stagger ease-out-back">
          <v-card class="d-inline-flex justify-center mb-6 greet xyz-nested"
            flat tile>
            <div class="hero-text">
              Hi!I'm&nbsp; 
            </div>
            <div class="hero-text greet-name">urturn!</div>
          </v-card>
          <v-col cols="12" class="hero-text xyz-nested">I'm a Student of Titech.</v-col>
          <v-col cols="12" class="hero-text xyz-nested">I contributed to the following projects as a programmer.</v-col>
          <v-col cols="12" xl="2" lg="4" md="4" class="page-wrap">
            <div class="xyz-nested" xyz="fade flip-down stagger duration-10 delay-2 ease-out-back">
              <Card url="https://20jun01.github.io/topublish/" />
            </div>
          </v-col>
          <v-col cols="12" xl="2" lg="4" md="4" class="page-wrap">
            <div class="xyz-nested" xyz="fade flip-down stagger duration-10 delay-2 ease-out-back">
              <Card url="https://mushikui.trasta.dev/" />
            </div>
          </v-col>
          <v-col cols="12" xl="2" lg="4" md="4" class="page-wrap">
            <div class="xyz-nested" xyz="fade flip-down stagger duration-10 delay-2 ease-out-back">
              <Card url="https://sample-front-weld.vercel.app/" />
            </div>
          </v-col>
        </v-row>
      </div>
    </XyzTransition>
  </v-container>
</template>
<script>
import Card from '@/components/CardWithOGP.vue'
export default {
  name: 'HomeView',
  components: {
    Card
  }
}
</script>
<style scoped>
.hero-text {
  color: #B1D4E0;
}

.greet{
  background-color: transparent;
}
</style>