<template>
    <div>
        <v-card shaped hover :href=url outlined color="transparent" v-if=url>
            <v-img :src="image" :aspect-ratio="16 / 9" v-if=image></v-img>
            <v-img :src="image_url" :aspect-ratio="16 / 9" v-else></v-img>
            <v-card-title v-if=title>{{ title }}</v-card-title>
            <v-card-subtitle v-if=description style="color: #B1D4E0;">{{ description }}</v-card-subtitle>
        </v-card>
    </div>
</template>

<style>
.v-card {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    opacity: 0.9;
}

.v-card:hover .v-image {
    transform: scale(1.2, 1.2);
    aspect-ratio: 16 / 9;
    transition: 1s;
    object-fit: none;
    color: transparent;
}

.v-card__title {
    font-size: 1.5rem;
    color: #D0F6F6;
    font-family:  fantasy, serif,'Arial Narrow', Arial, sans-serif !important;
}
</style>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            title: '',
            description: '',
            image_url: '',
        }
    },
    mounted() {
        this.$nextTick(() => {
            const url = this.url

            fetch(url).then(res => res.text()).then(text => {
                const el = new DOMParser().parseFromString(text, "text/html")
                const headEls = (el.head.children)
                Array.from(headEls).map(v => {
                    const prop = v.getAttribute('property')
                    if (!prop) return;
                    if (prop === 'og:title') {
                        this.title = v.getAttribute("content")
                    } else if (prop === 'og:description') {
                        this.description = v.getAttribute("content")
                    } else if (prop === 'og:image' && !this.image) {
                        this.image_url = v.getAttribute("content")
                    }
                })
            })
        })
    }
}
</script>
