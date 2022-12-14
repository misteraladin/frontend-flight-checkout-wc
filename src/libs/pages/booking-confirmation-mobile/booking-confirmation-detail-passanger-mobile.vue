<template>
    <div class="detail-passanger">
        <div class="title">
            Detail Penumpang
        </div>
        <div class="same-passanger">
            <div class="content">
                Sama Seperti Pemesan
            </div>
            <div class="button-same-passanger">
                <Buttonslide />
            </div>
        </div>
        <div class="passanger">
            <div class="title-passanger">
                <span class="number">1. </span>
                <span class="name-passanger">Tuan Ananda Putrawan Iswanto</span>
            </div>
            <div class="luggage">
                <span> <img src="/booking-confirmation/luggage.svg" /></span>
                <span class="text-luggage">Maks bagasi terdaftar 20 Kg</span>
            </div>
            <hr />
        </div>
    </div>
</template>

<script setup lang="ts">
import Buttonslide from "../../atoms/button/buttonslide.vue"

</script>