<template>
    <div>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn text :style="customText" v-on="on">{{ mail }}</v-btn>
            </template>
            <span class="tooltip-custom">Replace [AT] to @</span>
        </v-tooltip>
    </div>
</template>
  
<script>
export default {
    computed: {
        customText() {
            return {
                fontSize: '1.5rem',
                color: `#B1D4E0`,
            }
        },
    },
    props: {
        mail: {
            type: String,
            required: true,
        },
    },
}
</script>
  
<style>
.tooltip-custom {
    background-color: transparent;
    color: inherit;
    border: none;
    padding: 0;
}

.tooltip-custom+.v-tooltip__arrow {
    display: none;
}
</style>