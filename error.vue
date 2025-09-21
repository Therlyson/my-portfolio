<script setup lang="ts">
import type { NuxtError } from '#app'

interface Props {
  error: NuxtError | null
}

defineProps<Props>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <div class="error-page">
      <div class="error-page__wrapper">
        <h4 class="error-page__title">{{ error?.statusCode }}</h4>
        <p class="error-page__subtitle">
          {{
            error?.statusCode === 404 ? $t('error.subtitle') : error?.message
          }}
        </p>
        <SiteButton
          intent="primary"
          class="error-page__button"
          @click="handleError"
        >
          {{ $t('error.button') }}
        </SiteButton>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.error-page {
  &__wrapper {
    @apply mb-32 mt-20 flex flex-col items-center justify-center;
  }

  &__title {
    @apply mb-2 text-[10rem] leading-snug text-dark-300;
  }

  &__subtitle {
    @apply mb-4 text-base;
  }

  &__button {
  }
}
</style>
