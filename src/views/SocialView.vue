<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12" class="text-center">
                <h1>Social</h1>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="6" class="text-center">
                <v-btn icon href="https://github.com/20jun01"><font-awesome-icon
                        icon="fa-brands fa-github fa-2xl" /></v-btn>
            </v-col>
            <v-col cols="6" class="text-center">
                <a class="link03" href="https://github.com/20jun01">20jun01</a>
            </v-col>
            <v-col cols="6" class="text-center">
                <a class="link03" href="https://atcoder.jp/users/urturn">AtCoder</a>
            </v-col>
            <v-col cols="6" class="text-center">
                <a class="link03" href="https://atcoder.jp/users/urturn">urturn</a>
            </v-col>
            <v-col cols="6" class="text-center">
                <v-btn icon><font-awesome-icon
                        icon="fa-solids fa-envelope" /></v-btn>
            </v-col>
            <v-col cols="6" class="text-center">
                <HoverMailText mail="lunchmaru250[at]gmail.com"></HoverMailText>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import HoverMailText from '@/components/CursorHoverMailText.vue'

export default {
    name: "SocialView",
    data() {
        return {
        }
    },
    components: {
        HoverMailText
    }
}
</script>

<style scoped>
.text-center {
    color: #B1D4E0 !important;
    font-size: 2em !important;
    font-family: 'Courier New', Courier, monospace;
}

.link03 {
    color: #B1D4E0;
    text-decoration: none;
    display: inline-block;
    position: relative;
}

.link03::after {
    content: "";
    width: 0%;
    height: 1px;
    background-color: #B1D4E0;
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: all .25s linear;
}

.link03:hover::after {
    width: 100%;
}

.v-btn {
    color: #B1D4E0 !important;
    font-size: 1em !important;
    font-family: 'Courier New', Courier, monospace;
    background-color: transparent;
}
</style>