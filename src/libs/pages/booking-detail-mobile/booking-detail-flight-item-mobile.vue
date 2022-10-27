<template>
  <section class="flight-item">
    <div class="flight-item__title">
      <h2>Keberangkatan</h2>

      <a class="btn-link" @click="$emit('showDetail')"> Lihat Detail </a>
    </div>

    <div class="flight-item__info">
      <div class="flight-item__info-image">
        <img
          src="https://s3-ap-southeast-1.amazonaws.com/i.misteraladin.com/flight-gateway/airlines/GA/logo.png"
          alt="Garuda Indonesia"
          height="24px"
        />
      </div>

      <div class="flight-item__info-description">
        <div class="flight-item__info--title">Garuda Indonesia</div>

        <div class="flight-item__info--subtitle">Ekonomi (Subclass V)</div>
      </div>
    </div>

    <div class="flight-item__route">
      <div class="flight-item__route-name">
        <div class="flight-item__route--airport">Jakarta (CGK)</div>

        <div class="flight-item__route--arrow">
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.47017 1.13684C6.21048 0.877147 5.78944 0.877146 5.52975 1.13684C5.27022 1.39636 5.27003 1.81708 5.52933 2.07684L8.77996 5.33329H1.33329C0.965103 5.33329 0.666626 5.63177 0.666626 5.99996C0.666626 6.36815 0.965103 6.66663 1.33329 6.66663H8.77996L5.52933 9.92308C5.27003 10.1828 5.27022 10.6036 5.52975 10.8631C5.78944 11.1228 6.21048 11.1228 6.47017 10.8631L10.6262 6.70707C11.0167 6.31654 11.0167 5.68338 10.6262 5.29285L6.47017 1.13684Z"
              fill="#424242"
            />
          </svg>
        </div>

        <div class="flight-item__route--airport">Surabaya (SUB)</div>
      </div>

      <div class="flight-item__route-time">
        <span>05 Jul 2022</span>
        <span>16:00 - 17:30</span>
        <span>1j 00m</span>
        <span>Langsung</span>
      </div>
    </div>
  </section>
</template>
