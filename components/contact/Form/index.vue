<script setup lang="ts">
import type { PluginConfigs } from '@formkit/vue'
import { reset } from '@formkit/core'
import { ApiEndpoints } from '@/utils/apiEndpoints'

const submitted = ref(false)
const submitError = ref(false)

interface ContactFormPayload {
  full_name: string
  email: string
  subject: string
  text: string
}

const { public: publicEnv } = useRuntimeConfig()
const language = useCookie('language')

const submitHandler = async (data: ContactFormPayload) => {
  try {
    await $fetch(ApiEndpoints.GET_IN_TOUCH, {
      baseURL: publicEnv.apiBase,
      method: 'POST',
      headers: {
        'lang-code': language.value ?? locale.value,
      },
      body: {
        name: data.full_name,
        email: data.email,
        subject: data.subject,
        message: data.text,
      },
    })

    reset('contactForm')
    submitted.value = true
    submitError.value = false
  } catch {
    submitted.value = false
    submitError.value = true
  }
}

const handleFormInput = () => {
  submitted.value = false
  submitError.value = false
}

const config = inject<PluginConfigs>(Symbol.for('FormKitConfig'))
const { locale } = useI18n()

const setFormLocale = () => {
  if (config) config.locale = locale.value
}
onMounted(() => {
  setFormLocale()
})

watch(
  () => locale.value,
  () => setFormLocale(),
)
</script>

<template>
  <div class="contact-form">
    <FormKit
      id="contactForm"
      class="contact-form__form"
      type="form"
      :actions="false"
      @submit="submitHandler"
      @input="handleFormInput"
    >
      <div class="contact-form__wrapper">
        <SiteTitle class="contact-form__title">{{
          $t('contact.form_title')
        }}</SiteTitle>
        <div class="contact-form__body">
          <div class="contact-form__inputs">
            <div class="contact-form__group">
              <FormKit
                type="text"
                name="full_name"
                :label="$t('contact.form_name')"
                :placeholder="$t('contact.form_name')"
                validation="required"
              />
            </div>
            <div class="contact-form__group">
              <FormKit
                type="text"
                name="email"
                :label="$t('contact.form_email')"
                :placeholder="$t('contact.form_email')"
                validation="required|email"
              />
            </div>
            <div class="contact-form__group">
              <FormKit
                type="text"
                name="subject"
                :label="$t('contact.form_subject')"
                :placeholder="$t('contact.form_subject')"
                validation="required"
              />
            </div>
          </div>
          <div class="contact-form__textarea">
            <FormKit
              type="textarea"
              name="text"
              rows="7"
              :label="$t('contact.form_message')"
              :placeholder="$t('contact.form_message')"
              validation="required"
            />
          </div>
        </div>
        <SiteButton
          type="submit"
          class="contact-form__button"
          intent="primary"
          >{{ $t('contact.submit') }}</SiteButton
        >
      </div>
    </FormKit>
    <div v-if="submitted" class="contact-form__alert">
      {{ $t('contact.success') }}
    </div>
    <div
      v-if="submitError"
      class="contact-form__alert contact-form__alert--error"
    >
      {{ $t('contact.error') }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-form {
  // .contact-form__form

  &__form {
  }
  // .contact-form__wrapper

  &__wrapper {
  }

  // .contact-form__title

  &__title {
    @apply mb-7;
  }

  // .contact-form__body

  &__body {
    @apply mb-7 flex gap-5 max-sm:flex-col max-sm:gap-2;
  }

  // .contact-form__inputs

  &__inputs {
    @apply flex flex-1 flex-col gap-1.5 max-sm:gap-2;
  }

  // .contact-form__textarea

  &__textarea {
    @apply flex-1;
    > textarea {
      @apply h-full;
    }
  }

  // .contact-form__group

  &__group {
  }

  // .contact-form__button

  &__button {
  }

  // .contact-form__alert

  &__alert {
    @apply mt-2 text-green-500;
  }

  &__alert--error {
    @apply text-red-500;
  }
}
</style>
