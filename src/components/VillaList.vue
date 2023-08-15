<!-- eslint-disable no-unused-vars -->
<template>
    <NavbarItem />
    <div class="container-fluid">
        <div v-if="villas">
            <ul class="list-group">
                <li class="list-group-item list-group-item-light shadow p-3 mt-5 bg-body-tertiary rounded"
                    v-for="villa in villas" :key="villa._id">
                    <!-- <img :src="'/src/assets/thumbnails/1.jpg'" class="rounded float-start" :alt="thumbnail" /> -->
                    <div class="row">
                        <div class="col-sm">
                            <img :src="villa.thumbnail" class="rounded float-start border border-info-subtle border-4 p-2"
                                :alt="thumbnail" />
                        </div>
                        <div class="col-sm align-self-center">
                            <router-link :to="{ name: 'detail', params: { id: villa._id } }">
                                <p class="text-center fs-2 fw-semibold"> {{ villa.villaName }} </p>
                            </router-link>
                            <p class="text-center fs-5 fw-medium"> {{ villa.address.city }} </p>
                            <p class="text-center fs-6 fw-medium"> $ {{ villa.price }}</p>
                        </div>
                        <div class="col-sm d-flex justify-content-end align-items-center">
                            <p class="text-center fs-5 fw-medium p-5">
                                <span class="badge bg-primary rounded-pill p-2">Currently Available</span>
                            </p>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { ref, onMounted } from 'vue';
// eslint-disable-next-line no-unused-vars
import { useRouter } from 'vue-router';
import { getAll } from '../services/VillaService';
import NavbarItem from './NavbarItem.vue';

export default {
    setup() {
        const villas = ref([]);
        const fetchVillas = async () => {
            await getAll()
                .then(res => {
                villas.value = res;
            })
                .catch(err => {
                console.log(err);
            });
        };
        onMounted(() => {
            fetchVillas();
        });
        return {
            villas,
        };
    },
    components: { NavbarItem }
};
</script>
<style scoped>
img {
    margin: 0.8rem;
    width: 13rem;
    height: 12rem;
}

li {
    margin: 0.4rem;
}
</style>