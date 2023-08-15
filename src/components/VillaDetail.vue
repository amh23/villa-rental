<template>
    <NavbarItem />
    <div class="container">
        <div v-if="villa">
            <ul class="list-group">
                <li class="list-group-item list-group-item-light shadow p-3 my-5 bg-body-tertiary rounded">
                    <div class="row">
                        <div class="col-sm">
                            <ImageSlider :imageUrlsData="villa.images"></ImageSlider>
                        </div>
                        <div class="col-sm d-flex flex-column align-items-center justify-content-evenly">
                                <span class="text-center fs-2 fw-medium rounded-circle badge bg-primary py-4 me-2">
                                    ${{ villa.price }}
                                </span>
                                <button class="btn btn-primary btn-lg mx-5 ps-3" type="submit" @click.prevent="bookVilla">
                                    <span class="text-center fs-4 fw-medium">Book</span>
                                </button>
                        </div>
                        <div class="col-sm align-self-center">
                            <p class="text-center fs-5 fw-medium"> {{ villa.villaName }} </p>
                            <p class="text-center fs-6 fw-medium"> {{ villa.address.city + villa.address.state }} </p>
                            <p class="text-center fs-6 fw-medium"> {{ villa.address.country }} </p>
                            <p class="text-center fs-6 fw-medium">
                                BedRoom : {{ villa.facilities.bedroom }}
                            </p>
                            <p class="text-center fs-6 fw-medium">
                                Bathroom : {{ villa.facilities.bathroom }}
                            </p>
                            <div v-if="villa.facilities.pool">
                                <p class="text-center fs-6 fw-medium">
                                    The villa has pool.
                                </p>
                            </div>
                            <div v-if="villa.facilities.kitchen">
                                <p class="text-center fs-6 fw-medium">
                                    The villa has kitchen.
                                </p>
                            </div>
                        </div>
                        <div class="col-sm d-flex justify-content-end align-items-center">
                            <button class="btn btn-secondary btn-lg mx-5 ps-3" type="submit" @click.prevent="goBack">
                                <span class="text-center fs-4 fw-medium">Back</span>
                            </button>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
        <div v-else>
            <p>Loading..</p>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getById } from '../services/VillaService';
import ImageSlider from './ImageSlider.vue';
import NavbarItem from './NavbarItem.vue';
export default {
    components: {
        ImageSlider,
        NavbarItem
    },
    setup() {
        const villa = ref(null);
        const route = useRoute();
        const router = useRouter();
        const villaId = ref(route.params.id);

        const fetchVilla = async () => {
            await getById(villaId.value)
                .then(res => {
                    villa.value = res;
                })
                .catch(err => {
                    console.log(err);
                })
        };

        const goBack = () => {
            router.go(-1);
        };
        // const d = new Date();

        // let dates = [`${d.getDate()}-${d.getMonth()}-${d.getDay()}`];
        // const bookVilla = (villa, dates) => {

        // }
        onMounted(() => {
            fetchVilla();
        });

        return {
            villa,
            goBack
        };
    },
};
</script>