<template>
    <div>
        <v-card hover :href=url outlined color="transparent" v-if=url>
            <v-img :src="image" :aspect-ratio="16 / 9" v-if=image></v-img>
            <v-card-title v-if=title>{{ title }}</v-card-title>
            <v-card-subtitle v-if=description>{{ description }}</v-card-subtitle>
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
}

.v-card__subtitle {
    font-size: 1rem;
}

.v-card__text {
    font-size: 0.875rem;
}
</style>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            title: '',
            description: '',
            image: '',
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
                    } else if (prop === 'og:image') {
                        this.image = v.getAttribute("content")
                    }
                })
            })
        })
    }
}
</script>
