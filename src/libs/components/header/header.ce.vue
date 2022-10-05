<template>
  <header id="ma-header">
    <div class="container" :style="{ maxWidth: width }">
      <ma-logo lang="en" homepage-url="https://misteraladin.com/train" />
      <!-- <nav
        v-if="showMenu"
        aria-labelledby="main-navigation"
        class="header-navigation"
      >
        <HeaderMenu :data="data.menu" />
        <HeaderAccount v-if="isAuthenticated" :member="member" />
        <HeaderRegister v-else />
        <HeaderLanguage :product="product" />
      </nav> -->
    </div>
  </header>
</template>

<script lang="ts" setup>
const width = window.innerWidth;
</script>

<style lang="scss">
#ma-header {
  .line-separator {
    display: inline-block;
    margin-right: 0.75rem;
    height: 1.5rem;
    width: 1px;
    background-color: #ccc;
  }

  .link {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none !important;
    color: #333;

    &:hover {
      text-decoration: none !important;
    }

    @media screen and (max-width: 480px) {
      &.site-link {
        margin-right: 0;
      }
    }

    img {
      margin-right: 0.5rem;

      @media screen and (max-width: 480px) {
        margin-right: 0;
      }
    }
  }
}
</style>

<style lang="scss">
#ma-header {
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    margin: 0 auto;
    max-width: 1110px;

    @media screen and (max-width: 480px) {
      justify-content: center;
    }
  }

  .link {
    font-size: 0.875rem;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }
}

.header-navigation {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 70%;

  @media screen and (max-width: 480px) {
    display: none;
  }

  .link {
    display: flex;
    align-items: center;
    margin-right: 1rem;

    &:hover {
      text-decoration: none !important;
    }

    img {
      margin-right: 0.5rem;
    }
  }
}
</style>
