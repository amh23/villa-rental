<template>
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img :src="imageUrls[0]" class="d-block w-100" alt="Villa Image">
            </div>
            <div class="carousel-item">
                <img :src="imageUrls[1]" class="d-block w-100" alt="Villa Image">
            </div>
            <div class="carousel-item">
                <img :src="imageUrls[2]" class="d-block w-100" alt="Villa Image">
            </div>
        </div>
        <button class="carousel-control-prev" type="button">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>
</template>
  
<script>
import { ref, computed } from 'vue';

export default {
    props: {
        imageUrlsData: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const imageUrls = ref(props.imageUrlsData);
        const currentIndex = ref(0);

        const prevSlide = () =>{
            if(currentIndex.value == 0){
                currentIndex.value = props.imageUrlsData.length;
            }
            else if(currentIndex.value == props.imageUrlsData.length){
                currentIndex.value = 0
            }
            else{
                currentIndex.value += 1;
            }
            return currentIndex;
        }
        const  nextSlide = () => {
           if(currentIndex.value == props.imageUrlsData.length){
                currentIndex.value = 0;
           }
           else {
                currentIndex.value += 1;
           }
           return currentIndex;
        }

        const currentImage = computed(() => props.imageUrls[currentIndex.value]);

        return {
            imageUrls,
            currentImage,
            prevSlide,
            nextSlide,
        };
    },
};
</script>
  
<style scoped>
.image-slider {
    position: relative;
    width: 100%;
    text-align: center;
}

.prev-btn,
.next-btn {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
}

.prev-btn {
    margin-right: 10px;
}

.next-btn {
    margin-left: 10px;
}
</style>
  