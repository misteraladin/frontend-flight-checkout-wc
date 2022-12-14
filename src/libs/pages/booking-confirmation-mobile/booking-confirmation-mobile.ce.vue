<template>
    <div id="booking-confirmation-mobile">
            <Header>
                Konfirmasi
            </Header>
            <StatusOrder /> 
            <Departure />
            <hr />
            <div v-if="returnflight">
                 <Return />
                 <hr />
            </div>
            <DetailPassanger />
            <Promocode />
            <Pricedetail />
            <Footer>
            </Footer>
            <!-- <ModalWindow>
                 <template v-slot:header>
                    Detail Pemesanan
                </template>
            </ModalWindow> -->
    </div>
</template>

<script setup lang="ts">
import Header from "../common-mobile/mobile-header.vue";
import StatusOrder from "./booking-confirmation-status-order-mobile.vue"
import Departure from "./booking-confirmation-departure-mobile.vue"
import Return from "./booking-confrimation-return-mobile.vue"
import DetailPassanger from "./booking-confirmation-detail-passanger-mobile.vue"
import Promocode from "./booking-confirmation-promocode-mobile.vue"
import Pricedetail from "./booking-confirmation-pricedetail-mobile.vue"
import ModalWindow from "../common-mobile/ModalWindow.vue"
import { onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n"; // import i18n plugin
import messages from "./lang"; // import dictionary
import { ref } from "vue";




const props = defineProps({
  data: {
    type: String,
    required: true,
  },
});

const returnflight = ref(true)

</script>


<style lang="scss">
@use '@/styles/pages/booking-confirmation-mobile';
</style>