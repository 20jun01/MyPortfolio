<template>
    <v-dialog v-model="dialog" max-width="70%" hide-overlay>
        <v-card class="centered-dialog" color="transparent">
            <div class="image-container">
                <v-img :src="image" :aspect-ratio="16 / 9" contain class="dialog-image" v-if="image"></v-img>
                <v-img :src="image_url" :aspect-ratio="16 / 9" contain class="dialog-image" v-else></v-img>
                <v-card-actions class="close-btn">
                    <v-btn text icon @click="closeModal">
                        <v-icon color="black">mdi-close</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>
            <v-card-title class="headline">{{ title }}</v-card-title>
            <v-spacer></v-spacer>
            <v-card-subtitle style="color: #B1D4E0;">{{ short_description }}</v-card-subtitle>
            <v-spacer></v-spacer>
            <v-card-text style="color: #B1D4E0">
                link: <a :href="url" target="_blank" class="link03">{{ url }}</a>
                {{ long_description }}
            </v-card-text>
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
        image_url: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        short_description: {
            type: String,
            required: false
        },
        long_description: {
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
    font-weight: bold;
    line-height: 1.2;
    color: #D0F6F6;
}

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

</style>
