<template>
    <v-dialog v-model="dialog" max-width="70%" hide-overlay>
        <v-card class="centered-dialog" color="transparent">
            <div class="image-container">
                <v-img :src="image" :aspect-ratio="16 / 9" contain class="dialog-image"></v-img>
                <v-card-actions class="close-btn">
                    <v-btn text icon @click="closeModal">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>
            <v-card-title class="headline primary--text">{{ title }}</v-card-title>
            <v-card-subtitle class="grey--text">{{ description }}</v-card-subtitle>
        </v-card>
    </v-dialog>
</template>


<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            dialog: this.value
        };
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    },
    watch: {
        dialog(newVal) {
            this.$emit('input', newVal);
        },
        value(newVal) {
            this.dialog = newVal;
        }
    },
};
</script>

<style scoped>
.v-card__title {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.2;
}

.v-card__subtitle {
    font-size: 14px;
    line-height: 1.4;
}

/* layout center */
.v-dialog__content {
    padding: 0;
}

.centered-dialog {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.image-container {
    position: relative;
    width: 100%;
}

.close-btn {
    position: absolute;
    top: 0;
    right: 0;
}
</style>
