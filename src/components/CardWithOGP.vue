<template>
    <div>
        <template>
            <v-card v-on:click="showModal = true" shaped hover outlined color="transparent" v-if="url" v-bind="props">
                <div class="img-container">
                <v-img :src="image" :aspect-ratio="16 / 9" v-if="image"></v-img>
                <v-img :src="image_url" :aspect-ratio="16 / 9" v-else></v-img>
            </div>
                <v-card-title v-if="title">{{ title }}</v-card-title>
                <v-card-subtitle v-if="description" style="color: #B1D4E0;">{{ description }}</v-card-subtitle>
            </v-card>
        </template>

        <modal-component :url="url" :image="image" :title="title" :description="description"
            v-model="showModal" @close="showModal = false"></modal-component>
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
    transition: 1s;
}

.v-card__title {
    font-size: 1.5rem;
    color: #D0F6F6;
    font-family: fantasy, serif, 'Arial Narrow', Arial, sans-serif !important;
}
</style>

<script>
import ModalComponent from './ModalComponent.vue';

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
            showModal: false // モーダルの表示状態を管理するデータ
        }
    },
    components: {
        ModalComponent // モーダル用のコンポーネントを登録
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
