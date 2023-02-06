<template>
  <XyzTransition appear duration="auto">
    <div class="page-wrap">
      <div class="page-hero" xyz="fade small stagger ease-out-back">
        <v-avatar class="xyz-nested">
          <img src="https://avatars.githubusercontent.com/u/56793204?s=96&v=4" alt="Urturn">
        </v-avatar>
        <p class="hero-text xyz-nested">Hi! I'm urturn. Student of Titech.</p>
      </div>
      <div class="page-features" xyz="fade flip-down stagger duration-10 delay-2 ease-out-back">
        <Card class="xyz-nested" url="https://20jun01.github.io/topublish/" />
      </div>
      <div class="page-section" xyz="fade flip-down stagger duration-10 delay-2 ease-out-back">
        <Card class="xyz-nested" url="https://mushikui.trasta.dev/" />
      </div>
      <div class="page-footer" xyz="fade bottom ease-in-out delay-10">
        <div class="footer-logo xyz-nested" xyz="fade left ease-in-out delay-10"></div>
        <div class="footer-right" xyz="fade up stagger ease-in-out delay-10">
          <Card class="xyz-nested" url="" />
        </div>
      </div>
    </div>
  </XyzTransition>
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

</style>