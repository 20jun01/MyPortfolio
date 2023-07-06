<template>
    <div>
        <template>
            <v-card shaped hover :href=link outlined color="transparent" v-if=link>
                <v-img class="img-container" :src="imageSource" :aspect-ratio="16 / 9"></v-img>

                <v-card-title v-if=titleSource>{{ titleSource }}</v-card-title>
                <v-card-subtitle v-if=description style="color: #B1D4E0;">{{ description }}</v-card-subtitle>
            </v-card>
        </template>
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

.v-card:hover .img-container {
    transform: scale(1.0, 1.0);
    aspect-ratio: 16 / 9;

    object-fit: none;
    color: transparent;
}

.v-card .img-container {
    transform: scale(0.95, 0.95);
    transition: 0.5s;
}

.v-card__title {
    font-size: 1.5rem;
    color: #D0F6F6;
    font-family: fantasy, serif, 'Arial Narrow', Arial, sans-serif !important;
}
</style>
<script>
export default {
    props: {
        url: {
            type: String,
            required: false,
        },
        url_with_no_ogp: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: false,
        },
        long_description: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            title_: '',
            description: '',
            image_url: '',
            showModal: false,
            imageSource: '',
            titleSource: '',
            link: '',
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.link = this.url || this.url_with_no_ogp;
            this.description = this.long_description || this.description;

            if (this.url_with_no_ogp) {
                this.imageSource = this.image || this.image_url;
                this.titleSource = this.title || this.title_;
                return;
            }
            fetch(this.url).then(res => res.text()).then(text => {
                const el = new DOMParser().parseFromString(text, "text/html")
                const headEls = (el.head.children)
                Array.from(headEls).map(v => {
                    const prop = v.getAttribute('property')
                    if (!prop) return;
                    if (prop === 'og:title') {
                        this.title_ = v.getAttribute("content")
                    } else if (prop === 'og:description') {
                        this.description = v.getAttribute("content")
                    } else if (prop === 'og:image' && !this.image) {
                        this.image_url = v.getAttribute("content")
                    }
                })
                this.imageSource = this.image || this.image_url;
                this.titleSource = this.title || this.title_;
            }).catch(() => {
                this.imageSource = this.image || this.image_url;
            })
        })
    }
}
</script>
