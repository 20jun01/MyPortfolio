<template>
  <v-container>
    <div data-splitting>Hello World!</div>
  </v-container>
</template>
<style>
@import url(https://fonts.googleapis.com/css?family=Kanit:600);

html {
  height: 100%;
  display: flex;
}

body {
  margin: auto;
}

html,
body {
  background: #00043C;
  color: #FFF;
  font: normal 600 10vw/1.5 Kanit, sans-serif;
}

.splitting .char {
  animation: slide-in 1s cubic-bezier(.5, 0, .5, 1) both;
  animation-delay: calc(60ms * var(--char-index));
}

@keyframes slide-in {
  from {
    transform: translateY(-1em) rotate(-.5turn) scale(0.5);
    opacity: 0;
  }
}
</style>
<script>
export default {
  name: 'HomeView'
}
</script>