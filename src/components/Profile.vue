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
        <v-row class="page-hero" xyz="fade small stagger ease-out-back delay-2">
          <v-card class="d-inline-flex justify-center mb-2 greet xyz-nested" flat tile>
            <div class="hero-text">
              Hi! I'm&nbsp;
            </div>
            <XyzTransition duration="auto">
              <div class="hero-text greet-name" @click="rotate" appear="false" xyz="flip-down duration-10" v-if="!isAnim">
                urturn!</div>
            </XyzTransition>
          </v-card>
          <v-col cols="12" class="hero-text xyz-nested">I'm a Student of Titech.</v-col>
          <v-col cols="12" class="hero-text xyz-nested">I contributed to the following projects as a programmer.</v-col>
        </v-row>
        <v-row class="page-hero" xyz="fade flip-down stagger duration-10 delay-4 ease-out-back">
          <v-col class="xyz-nested page-wrap" cols="12" xl="2" lg="4" md="4">
            <div>
              <Card url="https://20jun01.github.io/topublish/" image="/images/OGPImages/OGP_chain.webp" />
            </div>
          </v-col>
          <v-col cols="12" xl="2" lg="4" md="4" class="xyz-nested page-wrap">
            <div>
              <Card url="https://mushikui.trasta.dev/" />
            </div>
          </v-col>
          <v-col cols="12" xl="2" lg="4" md="4" class="xyz-nested page-wrap">
            <div>
              <Card url="https://sample-front-weld.vercel.app/" image="/images/OGPImages/OGP_eat.webp" />
            </div>
          </v-col>
          <v-col cols="12" xl="2" lg="4" md="4" class="xyz-nested page-wrap">
            <div>
              <Card url_with_no_ogp="https://mecab.trap.show/" image="/images/OGPImages/OGP_mecab.webp" title="めかぶ" long_description="めかぶか惑わすひらがなゲーム    ハッカソン作品"/>
            </div>
          </v-col>
          <v-col cols="12" xl="2" lg="4" md="4" class="xyz-nested page-wrap">
            <div>
              <Card url_with_no_ogp="http://no9.co.jp" image="/images/OGPImages/OGP_no_image.png" title="ナンバーナイン" long_description="インターンとしてサーバーサイドの開発をしている(2022/12~)"/>
            </div>
          </v-col>
          <v-col cols="12" xl="2" lg="4" md="4" class="xyz-nested page-wrap">
            <div>
              <Card url="https://my-portfolio-20jun01.vercel.app/" />
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
  },
  data() {
    return {
      isAnim: false,
      interval: null
    }
  },
  methods: {
    rotate() {
      console.log('rotate')
      if (this.isAnim === true || this.interval !== null) {
        return
      }
      // animation start
      this.isAnim = true
      // set interval
      this.interval = setInterval(() => {
        // animation stop
        this.isAnim = false
        // clear interval
        clearInterval(this.interval)
        this.interval = null
      }, 1100)
    }
  }
}
</script>
<style scoped>
.hero-text {
  color: #B1D4E0;
  font-family: 'Courier New', Courier, monospace;
}

.greet {
  background-color: transparent;
}
</style>