<template>
    <div class="modal-detail">
        <ModalDetail class="content-modal"  @close="showModalDetail = !showModalDetail">

                
            <template v-slot:header>
                Detail Pemesanan
            </template>
            <!-- departure -->
            <div class="departure">
                <div class="title-departure">Keberangkatan</div>
                <div class="airlines">
                    <div class="img-airline">
                        <img src="/garuda.svg" />
                    </div>
                    <div class="name-airline">
                        <div>Garuda indonesia</div>
                        <span>Ekonomi (Subclass V)</span>
                    </div>
                </div>
                <div class="schedule">
                    <div class="icon">
                        <img src="/estimat.svg" />
                    </div>
                    <div class="time-airport">
                        <div class="takeoff">
                            <div class="time-date">
                                <div class="time">16:00</div>
                                <div class="date">5 jul</div>
                            </div>
                            <div class="airport">
                                <div class="city">Jakarta (CKG)</div>
                                <span class="place">Soekarno-hatta Intl Airport</span>
                            </div>
                        </div>
                        <div class="estimation">
                            1j 30 m
                        </div>
                        <div class="landing">
                             <div class="time-date">
                                <div class="time">17:00</div>
                                <div class="date">5 jul</div>
                            </div>
                            <div class="airport">
                                <div class="city">Jakarta (CKG)</div>
                                <span class="place">Soekarno-hatta Intl Airport</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="luggage">
                    <div class="icon">
                        <img src="/luggage.svg" />
                    </div>
                    <div class="capacity">
                        Maks. bagasi terdaftar 20 Kg
                    </div>
                </div>
            </div>

                 <!-- if transit -->
                <div class="transit">
                <div class="card">
                    Transit 1j 30m di Yogyakarta (YIA)
                </div>
                 <div class="airlines">
                    <div class="img-airline">
                        <img src="/garuda.svg" />
                    </div>
                    <div class="name-airline">
                        <div>Garuda indonesia</div>
                        <span>Ekonomi (Subclass V)</span>
                    </div>
                </div>
                <div class="schedule">
                    <div class="icon">
                        <img src="/estimat.svg" />
                    </div>
                    <div class="time-airport">
                        <div class="takeoff">
                            <div class="time-date">
                                <div class="time">16:00</div>
                                <div class="date">5 jul</div>
                            </div>
                            <div class="airport">
                                <div class="city">Jakarta (CKG)</div>
                                <span class="place">Soekarno-hatta Intl Airport</span>
                            </div>
                        </div>
                        <div class="estimation">
                            1j 30 m
                        </div>
                        <div class="landing">
                             <div class="time-date">
                                <div class="time">17:00</div>
                                <div class="date">5 jul</div>
                            </div>
                            <div class="airport">
                                <div class="city">Jakarta (CKG)</div>
                                <span class="place">Soekarno-hatta Intl Airport</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="luggage">
                    <div class="icon">
                        <img src="/luggage.svg" />
                    </div>
                    <div class="capacity">
                        Maks. bagasi terdaftar 20 Kg
                    </div>
                </div>
                </div>
                <!-- if transit-->

            <!-- departure -->

            <hr />


             <!-- return -->
            <div class="return">
                <div class="title-return">Kepulangan</div>
                <div class="airlines">
                    <div class="img-airline">
                        <img src="/garuda.svg" />
                    </div>
                    <div class="name-airline">
                        <div>Garuda indonesia</div>
                        <span>Ekonomi (Subclass V)</span>
                    </div>
                </div>
                <div class="schedule">
                    <div class="icon">
                        <img src="/estimat.svg" />
                    </div>
                    <div class="time-airport">
                        <div class="takeoff">
                            <div class="time-date">
                                <div class="time">16:00</div>
                                <div class="date">5 jul</div>
                            </div>
                            <div class="airport">
                                <div class="city">Jakarta (CKG)</div>
                                <span class="place">Soekarno-hatta Intl Airport</span>
                            </div>
                        </div>
                        <div class="estimation">
                            1j 30 m
                        </div>
                        <div class="landing">
                             <div class="time-date">
                                <div class="time">17:00</div>
                                <div class="date">5 jul</div>
                            </div>
                            <div class="airport">
                                <div class="city">Jakarta (CKG)</div>
                                <span class="place">Soekarno-hatta Intl Airport</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="luggage">
                    <div class="icon">
                        <img src="/luggage.svg" />
                    </div>
                    <div class="capacity">
                        Maks. bagasi terdaftar 20 Kg
                    </div>
                </div>
            </div>

                 <!-- if transit -->
                <div class="transit">
                <div class="card">
                    Transit 1j 30m di Yogyakarta (YIA)
                </div>
                 <div class="airlines">
                    <div class="img-airline">
                        <img src="/garuda.svg" />
                    </div>
                    <div class="name-airline">
                        <div>Garuda indonesia</div>
                        <span>Ekonomi (Subclass V)</span>
                    </div>
                </div>
                <div class="schedule">
                    <div class="icon">
                        <img src="/estimat.svg" />
                    </div>
                    <div class="time-airport">
                        <div class="takeoff">
                            <div class="time-date">
                                <div class="time">16:00</div>
                                <div class="date">5 jul</div>
                            </div>
                            <div class="airport">
                                <div class="city">Jakarta (CKG)</div>
                                <span class="place">Soekarno-hatta Intl Airport</span>
                            </div>
                        </div>
                        <div class="estimation">
                            1j 30 m
                        </div>
                        <div class="landing">
                             <div class="time-date">
                                <div class="time">17:00</div>
                                <div class="date">5 jul</div>
                            </div>
                            <div class="airport">
                                <div class="city">Jakarta (CKG)</div>
                                <span class="place">Soekarno-hatta Intl Airport</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="luggage">
                    <div class="icon">
                        <img src="/luggage.svg" />
                    </div>
                    <div class="capacity">
                        Maks. bagasi terdaftar 20 Kg
                    </div>
                </div>
                </div>
                <!-- if transit-->

             <!-- return -->

            <!-- price departure-->
             <div class="price-departure">
                <div>
                    <div class="title-price-departure">
                    Harga Keberangkatan
                    </div>
                    <div class="content">
                        <div>Base Fare - 2 Adult</div>
                        <div>IDR 2.400.000</div>
                    </div>
                </div>
                <hr />
             </div>
            <!-- price departure-->

            <!-- price if return -->
                <div class="price-return">
                    <div class="title-price-return">
                    Harga Kepulangan
                    </div>
                    <div class="content">
                        <div>Base Fare - 2 Adult</div>
                        <div>IDR 2.400.000</div>
                    </div>
                    <hr />
                </div>
            <!-- price if return -->

            <!-- TOTAL -->
                <div class="total">
                    <div class="title-total">
                        TOTAL
                    </div>
                    <div class="price-total">
                        IDR 7.500.000
                    </div>
                </div>
            <!-- TOTAL -->


            <hr />

            <template v-slot:footer>
               Tutup
            </template>
        </ModalDetail>
    </div>
</template>

<script setup lang="ts">
    import {ref, watch , computed } from "vue"
    import ModalDetail from "../common-mobile/ModalWindow.vue"

    interface Props {
      showModalDetail: boolean;
    }
    
    const { showModalDetail } = defineProps<Props>();





</script>