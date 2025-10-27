import { projects as projectsPt } from '../../data/portfolioData'
import { projects as projectsEn } from '../../data/portfolioData.en'
import { projects as projectsEs } from '../../data/portfolioData.es'

export default defineEventHandler(async (event) => {
  const locale = getHeader(event, 'lang-code') || 'pt'

  const dataMap: Record<string, typeof projectsPt> = {
    pt: projectsPt,
    en: projectsEn,
    es: projectsEs,
  }

  const projects = dataMap[locale] || projectsPt
  const projectList = projects.map(({ gallery, ...project }) => project)

  return projectList
})
