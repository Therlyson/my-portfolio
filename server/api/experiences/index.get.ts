import { experiences as experiencesPt } from '../../data/portfolioData'
import { experiences as experiencesEn } from '../../data/portfolioData.en'
import { experiences as experiencesEs } from '../../data/portfolioData.es'

export default defineEventHandler(async (event) => {
  const locale = getHeader(event, 'lang-code') || 'pt'

  const dataMap: Record<string, typeof experiencesPt> = {
    pt: experiencesPt,
    en: experiencesEn,
    es: experiencesEs,
  }

  return dataMap[locale] || experiencesPt
})
