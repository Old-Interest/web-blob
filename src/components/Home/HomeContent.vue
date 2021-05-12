<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imageList" :key="item.id">
                <img :src="item.url" alt="">
            </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    props:["imageList"],
    data() {
        return {

        }
    },
    mounted() {
        new Swiper('.swiper-container',{
            loop: true,
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        })
    }
}
</script>
<style lang="less">
.swiper-container {
    // height: 500px;
    width: 100%;
    .swiper-slide {
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
}
</style>