import { education as educationPt } from '../../data/portfolioData'
import { education as educationEn } from '../../data/portfolioData.en'
import { education as educationEs } from '../../data/portfolioData.es'

export default defineEventHandler(async (event) => {
  const locale = getHeader(event, 'lang-code') || 'pt'

  const dataMap: Record<string, typeof educationPt> = {
    pt: educationPt,
    en: educationEn,
    es: educationEs,
  }

  return dataMap[locale] || educationPt
})
