<template>
    <v-container>

        <XyzTransition appear duration="auto">
            <div>
                <v-row no-gutters>
                    <v-col cols="12" class="text-center">
                        <h1>Skills</h1>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col cols="6" class="text-center">
                        Program
                    </v-col>
                    <v-col class="xyz-nested" v-for="icontext in languages" :key="icontext" cols="1" xyz="fade down stagger">
                        <i :class="icontext"></i>
                    </v-col>
                </v-row>
            </div>
        </XyzTransition>
    </v-container>
</template>
<script>
export default {
    name: "SkillView",
    data() {
        return {
            languages: ["devicon-go-plain text-center", "devicon-python-plain text-center", "devicon-csharp-plain colored text-center", "devicon-vuetify-line colored text-center"]
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