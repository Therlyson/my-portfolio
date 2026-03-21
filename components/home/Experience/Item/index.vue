<script lang="ts" setup>
import type { Experience } from '@/types'

interface Props {
  experience: Experience
}

const { experience } = defineProps<Props>()
</script>

<template>
  <div class="experience-item">
    <div class="experience-item__wrapper">
      <div class="experience-item__content">
        <div class="experience-item__info">
          <h3 class="experience-item__position">{{ experience.title }}</h3>
          <p class="experience-item__description">{{ experience.text }}</p>
        </div>
        <div class="experience-item__company">
          <h4 class="experience-item__company--name">
            {{ experience.sub_title }}
          </h4>
          <SiteTimeBlock class="experience-item__company--date">{{
            experience.period
          }}</SiteTimeBlock>
        </div>
      </div>
      <div class="experience-item__icon">
        <NuxtPicture
          :src="experience.image"
          :alt="experience.title"
          fit="cover"
          sizes="80px sm:80px"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience-item {
  @apply relative overflow-visible pb-10 last:pb-0;
  @apply max-sm:before:absolute max-sm:before:left-1/2 max-sm:before:top-0 max-sm:before:h-full max-sm:before:w-0.5 max-sm:before:-translate-x-1/2 max-sm:before:bg-primary;
  &:nth-child(even) {
    .experience-item__wrapper {
      @apply sm:flex-row-reverse;
    }
    .experience-item__content {
      @apply sm:flex-row-reverse;
    }
    .experience-item__icon {
      @apply sm:ml-10 sm:mr-16;
      @apply sm:after:left-full sm:after:right-auto;
    }
  }
  // .experience-item__wrapper

  &__wrapper {
    @apply flex items-center max-sm:flex-col-reverse;
  }

  // .experience-item__icon

  &__icon {
    @apply relative z-20 flex w-full items-center justify-center overflow-hidden rounded-t-xl bg-primary-400 sm:ml-16 sm:mr-10 sm:aspect-square sm:w-20 sm:rounded-full;
    @apply sm:ring-2 sm:ring-primary-200 sm:ring-offset-2 sm:ring-offset-background;
    @apply sm:after:absolute sm:after:right-full sm:after:top-1/2 sm:after:h-0.5 sm:after:w-10 sm:after:-translate-y-1/2 sm:after:bg-primary sm:after:opacity-70;
    img,
    picture {
      @apply h-full w-full;
    }
    img {
      @apply object-cover object-center;
    }
  }

  // .experience-item__content

  &__content {
    @apply relative z-10 flex w-full rounded-b-xl border-2 border-solid border-dark-100 bg-background max-sm:flex-col-reverse sm:rounded-lg;
  }

  // .experience-item__company

  &__company {
    @apply flex shrink-0 flex-col items-center justify-center bg-dark-50 px-4 py-6 text-center max-sm:px-3 max-sm:py-4 sm:min-w-[9rem];
  }

  // .experience-item__company--name

  &__company--name {
    @apply mb-2 text-base text-dark-600;
  }

  // .experience-item__company--date

  &__company--date {
  }

  // .experience-item__info

  &__info {
    @apply w-full px-8 py-6 max-sm:px-5 max-sm:py-4;
  }

  // .experience-item__position

  &__position {
    @apply mb-1.5;
  }

  // .experience-item__description

  &__description {
  }
}
</style>
