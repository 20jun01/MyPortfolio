<template>
    <v-app-bar dense flat color="transparent" app>
        <v-spacer />
        <v-row class="justify-end">
            <v-col cols="2" xs="2" sm="2" md="2" lg="1" xl="1" v-for="link in links" :key="link.name">
                <router-link class="router_text" :to=link.href>{{ link.name }}</router-link>
            </v-col>
            <v-col cols="1"></v-col>
        </v-row>
    </v-app-bar>
</template>

<script>
export default {
    name: "TheHeader",
    data() {
        return {
            links: [
                { name: "HOME", href: "/" },
                { name: "SKILL", href: "/skill" },
                { name: "LIKES", href: "/likes" },
                { name: "SOCIAL", href: "/social" },
            ]
        }
    }
}
</script>

<style>
.router_text {
    text-decoration:none;
}

.router_text:hover {
    color:rgb(31, 69, 103);
}
</style>