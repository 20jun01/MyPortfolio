<template>
    <v-tooltip v-model="tooltip" bottom>
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" @mouseover="updateTooltipText" @mouseleave="resetTooltipText">{{ mail }}</v-btn>
        </template>
        <span>{{ tooltipText }}</span>
    </v-tooltip>
</template>

<script>
export default {
    data() {
        return {
            tooltip: false,
            tooltipText: '',
            position: {}
        };
    },
    methods: {
        updateTooltipText() {
            this.tooltipText = "Replace [at] to @";
        },
        resetTooltipText() {
            
        },
        updatePosition(event) {
            this.position.x = event.clientX;
            this.position.y = event.clientY;
        }
    },
    props: {
        mail: {
            type: String,
            required: true,
        }
    },
    watch: {
        position() {
            const tooltip = document.querySelector('.v-tooltip__content');
            tooltip.style.left = this.position.x + 20 + 'px';
            tooltip.style.top = this.position.y + 20 + 'px';
        }
    },
    beforeUnmount() {
        document.removeEventListener('mousemove', this.updatePosition);
    },
    mounted() {
        document.addEventListener('mousemove', this.updatePosition);
    }
};
</script>