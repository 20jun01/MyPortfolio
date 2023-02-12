<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12" class="text-center">
                <h1>Skills</h1>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="6" class="text-center">
                Program
            </v-col>
            <v-col cols="1">
                <i class="devicon-go-plain text-center"></i>
            </v-col>
            <v-col cols="1">
                <i class="devicon-python-plain text-center"></i>
            </v-col>
            <v-col cols="1">
                <i class="devicon-csharp-plain colored text-center"></i>
            </v-col>
            <v-col cols="1">
                <i class="devicon-vuetify-line colored text-center"></i>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "SkillView",
    data() {
        return {
        }
    }
}
</script>
<style scoped>
.text-center {
    color: #B1D4E0 !important;
    font-size: 2em !important;
    font-family: 'Courier New', Courier, monospace;
}
</style>