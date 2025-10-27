import { seoInfo as seoInfoPt } from '../../data/portfolioData'
import { seoInfo as seoInfoEn } from '../../data/portfolioData.en'
import { seoInfo as seoInfoEs } from '../../data/portfolioData.es'

export default defineEventHandler(async (event) => {
  const locale = getHeader(event, 'lang-code') || 'pt'

  const dataMap: Record<string, typeof seoInfoPt> = {
    pt: seoInfoPt,
    en: seoInfoEn,
    es: seoInfoEs,
  }

  return dataMap[locale] || seoInfoPt
})
