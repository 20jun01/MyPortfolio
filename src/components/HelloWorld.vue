<template>
  <v-container>
    <div class="object" :class="{ animation: isAnim }">
      ur<span @click="rotate">turn</span>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
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
.animation span {
  transform: rotate(360deg);
  /* 回転 */
  transition: 1s;
  /* 1秒かけて動く */
}
</style>