import { whatIDo as whatIDoPt } from '../../data/portfolioData'
import { whatIDo as whatIDoEn } from '../../data/portfolioData.en'
import { whatIDo as whatIDoEs } from '../../data/portfolioData.es'

export default defineEventHandler(async (event) => {
  const locale = getHeader(event, 'lang-code') || 'pt'

  const dataMap: Record<string, typeof whatIDoPt> = {
    pt: whatIDoPt,
    en: whatIDoEn,
    es: whatIDoEs,
  }

  return dataMap[locale] || whatIDoPt
})
