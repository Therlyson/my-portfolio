import { technologies as technologiesPt } from '../../data/portfolioData'
import { technologies as technologiesEn } from '../../data/portfolioData.en'
import { technologies as technologiesEs } from '../../data/portfolioData.es'

export default defineEventHandler(async (event) => {
  const locale = getHeader(event, 'lang-code') || 'pt'

  const dataMap: Record<string, typeof technologiesPt> = {
    pt: technologiesPt,
    en: technologiesEn,
    es: technologiesEs,
  }

  return dataMap[locale] || technologiesPt
})
