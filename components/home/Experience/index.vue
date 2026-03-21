<script lang="ts" setup>
import type { Experience } from '@/types'

const { data: experiences } = await useMyFetch<Experience[]>(
  ApiEndpoints.EXPERIENCE,
)
</script>

<template>
  <section v-if="experiences?.length" class="experience">
    <div class="experience__wrapper">
      <SiteTitle class="experience__title">{{
        $t('experience.title')
      }}</SiteTitle>
      <div class="experience__body">
        <HomeExperienceItem
          v-for="experience of experiences"
          :key="experience.period"
          :experience="experience"
          class="experience__item"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.experience {
  // .experience__wrapper

  &__wrapper {
  }

  // .experience__title

  &__title {
    @apply mb-7;
  }

  // .experience__body

  &__body {
    @apply relative;
    @apply sm:before:absolute sm:before:left-1/2 sm:before:top-0 sm:before:h-full sm:before:w-0.5 sm:before:-translate-x-1/2 sm:before:bg-primary sm:before:opacity-50;
  }

  // .experience__item

  &__item {
  }
}
</style>
