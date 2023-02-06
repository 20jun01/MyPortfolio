<template>
    <div>
        <v-card hover :href=url v-if=url>
            <v-img :src="image" :aspect-ratio="16/9" v-if=image></v-img>
            <v-card-title v-if=title>{{ title }}</v-card-title>
            <v-card-subtitle v-if=description>{{ description }}</v-card-subtitle>
        </v-card>
    </div>
</template>

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
