<script lang="ts" setup>
const { parallaxStyle } = useParallaxBackground()
</script>

<template>
  <ClientOnly>
    <div class="parallax-background" :style="parallaxStyle" />
  </ClientOnly>
</template>

<style lang="scss" scoped>
.parallax-background {
  @apply fixed -bottom-5 -left-5 -right-5 -top-5 -z-10 h-auto w-auto bg-cover bg-no-repeat transition-all duration-0;
  background-image: url('/images/main_bg.png');
}
</style>
