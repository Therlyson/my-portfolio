import { testimonials as testimonialsPt } from '../../data/portfolioData'
import { testimonials as testimonialsEn } from '../../data/portfolioData.en'
import { testimonials as testimonialsEs } from '../../data/portfolioData.es'

export default defineEventHandler(async (event) => {
  const locale = getHeader(event, 'lang-code') || 'pt'

  const dataMap: Record<string, typeof testimonialsPt> = {
    pt: testimonialsPt,
    en: testimonialsEn,
    es: testimonialsEs,
  }

  return dataMap[locale] || testimonialsPt
})
