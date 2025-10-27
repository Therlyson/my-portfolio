import { hobbies as hobbiesPt } from '../../data/portfolioData'
import { hobbies as hobbiesEn } from '../../data/portfolioData.en'
import { hobbies as hobbiesEs } from '../../data/portfolioData.es'

export default defineEventHandler(async (event) => {
  const locale = getHeader(event, 'lang-code') || 'pt'

  const dataMap: Record<string, typeof hobbiesPt> = {
    pt: hobbiesPt,
    en: hobbiesEn,
    es: hobbiesEs,
  }

  return dataMap[locale] || hobbiesPt
})
