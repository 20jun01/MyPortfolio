<template>
    <div>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn text class="custom-text" v-on="on">Hover me</v-btn>
            </template>
            <span class="tooltip-custom">This is a tooltip</span>
        </v-tooltip>
    </div>
</template>
  
<style>
.custom-text {
    font-size: 1.5rem;
    color: #5c6bc0;
}

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