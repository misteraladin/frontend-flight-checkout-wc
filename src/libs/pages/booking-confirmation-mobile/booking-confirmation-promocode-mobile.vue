<template>
    <div class="promo-code">
       <div class="title">
            Kode Promo
       </div>
       <div class="cupon">
            <a @click="showModal" >
                <img src="/booking-confirmation/cupon.svg" />
            </a>
       </div>
       
    </div>

    <ModalPeek v-if="isShowModal" @close="isShowModal = false" class="modal-codepromo" placeholder="hh/bb/tt">
        <div class="title">
            Kode Promo
        </div>
        <FormInput />
        <template #footer>
        <button class="btn btn-primary-outline" @click="isShowModal = false">
            Batal
        </button>
        <button class="btn btn-primary">
            Gunakan
        </button>
      </template>
    </ModalPeek>     

</template>

<script setup lang="ts">
import ModalPeek from "../common-mobile/ModalPeek.vue";
import FormInput from "../common-mobile/FormInput.vue";   

import { ref } from 'vue'

const isShowModal = ref(false)

const showModal = () => {
    isShowModal.value =!isShowModal.value;
}

</script>