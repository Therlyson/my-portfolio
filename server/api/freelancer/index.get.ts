import { userData as userDataPt } from '../../data/portfolioData'
import { userData as userDataEn } from '../../data/portfolioData.en'
import { userData as userDataEs } from '../../data/portfolioData.es'

export default defineEventHandler(async (event) => {
  const locale = getHeader(event, 'lang-code') || 'pt'

  const dataMap: Record<string, typeof userDataPt> = {
    pt: userDataPt,
    en: userDataEn,
    es: userDataEs,
  }

  return dataMap[locale] || userDataPt
})
