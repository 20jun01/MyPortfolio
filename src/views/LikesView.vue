<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12" class="text-title">
                <h1>Favorites</h1>
            </v-col>
        </v-row>
        <v-row dense>
            <XyzTransition appear xyz="origin-center fade stagger">
                <v-col cols="12" xl="4" lg="4" md="4">
                    <v-row>
                    <v-col cols="12" class="text-title">
                        Games
                    </v-col>
                </v-row>
                    <v-col cols="12" class="text-description">
                        (play more than 6 months)
                    </v-col>
                    <v-col cols="12" class="text-subtitle">
                        Now Playing
                    </v-col>
                    <ul>
                        <XyzTransitionGroup appear xyz="fade left stagger-2 thick short delay-4">
                            <li v-for="game in gamesNow" :key="game.name">
                                <v-row>
                                    <v-col cols="12" class="text-main">
                                        {{ game.name }}
                                    </v-col>
                                </v-row>
                                <v-row no-gutters v-if="game.description">
                                    <v-col cols="1">
                                    </v-col>
                                    <v-col cols="8" class="text-mid">
                                        {{ game.description }}
                                    </v-col>
                                </v-row>
                            </li>
                        </XyzTransitionGroup>
                    </ul>
                    <v-col cols="12" class="text-subtitle">
                        Used to Play
                    </v-col>
                    <ul>
                        <XyzTransitionGroup appear xyz="fade left stagger-2 thick short delay-4">
                            <li v-for="game in gamesUsed" :key="game.name">
                                <v-row>
                                    <v-col cols="12" class="text-main">
                                        {{ game.name }}
                                    </v-col>
                                </v-row>
                                <v-row no-gutters v-if="game.description">
                                    <v-col cols="1">
                                    </v-col>
                                    <v-col cols="" class="text-mid">
                                        {{ game.description }}
                                    </v-col>
                                </v-row>
                            </li>
                        </XyzTransitionGroup>
                    </ul>
                </v-col>
            </XyzTransition>
            <XyzTransition appear xyz="origin-center fade stagger delay-4">
                <v-col cols="12" xl="4" lg="4" md="4">
                    <v-row>
                        <v-col cols="12" class="text-title">
                            Music
                        </v-col>
                    </v-row>
                    <ul>
                        <li v-for="music in musics" :key="music.genre">
                            <v-row>
                                <v-col cols="12" class="text-main">
                                    {{ music.genre }}
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="1">
                                </v-col>
                                <v-col cols="11" class="text-mid">
                                    <ul>
                                        <XyzTransitionGroup appear xyz="fade left stagger-2 thick short delay-8">
                                            <li v-for="music in music.musics" :key="music">
                                                {{ music }}
                                            </li>
                                        </XyzTransitionGroup>
                                    </ul>
                                </v-col>
                            </v-row>
                        </li>
                    </ul>
                </v-col>
            </XyzTransition>
            <XyzTransition appear xyz="origin-center fade stagger delay-8">
                <v-col cols="12" xl="4" lg="4" md="4">
                    <v-row>
                        <v-col cols="12" class="text-title">
                            Anime
                        </v-col>
                    </v-row>
                </v-col>
            </XyzTransition>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "HobbyView",
    data() {
        return {
            gamesNow: [
                { name: "Mahjong", desc: "" },
                { name: "Poker", desc: "" }
            ],
            gamesUsed: [
                { name: "Mario", description: "esp Galaxy2" },
                { name: "Mobile Legends", description: "" },
                { name: "Monster Strike", description: "" },
                { name: "Othellonia", description: "" },
                { name: "Pokemon", description: "esp BW2" },
                { name: "Uma Musume", description: "" },
                { name: "And More More", description: "" }
            ],
            musics: [
                { genre: "VOCALOID", musics: ["??????????????????", "DAYBREAK FRONTLINE", "Calc.", "And More More"] },
                { genre: "J-POP", musics: ["?????????", "?????????????????????", "Mela!", "And More More"] },
                { genre: "Anime Song", musics: ["?????????????????????", "Catch the Moment", "this game", "And More More"] },
            ],
        }
    }
}
</script>

<style scoped>
.text-title {
    color: #B1D4E0 !important;
    font-size: 2em !important;
    font-family: 'Courier New', Courier, monospace;
}

.text-subtitle {
    color: #B1D4E0 !important;
    font-size: 1.8em !important;
    font-family: 'Courier New', Courier, monospace;
}

.text-main {
    color: #B1D4E0 !important;
    font-size: 1.5em !important;
    font-family: 'Courier New', Courier, monospace;
    text-align: left;
}

.text-mid {
    color: #B1D4E0 !important;
    font-size: 1.2em !important;
    font-family: 'Courier New', Courier, monospace;
    text-align: left;
}

.text-description {
    color: #B1D4E0 !important;
    font-size: 1.2em !important;
    font-family: 'Courier New', Courier, monospace;
    text-align: left;
}
</style>