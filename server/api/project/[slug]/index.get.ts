import { projects as projectsPt } from '../../../data/portfolioData'
import { projects as projectsEn } from '../../../data/portfolioData.en'
import { projects as projectsEs } from '../../../data/portfolioData.es'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Slug parameter is required',
    })
  }

  const locale = getHeader(event, 'lang-code') || 'pt'

  const dataMap: Record<string, typeof projectsPt> = {
    pt: projectsPt,
    en: projectsEn,
    es: projectsEs,
  }

  const projects = dataMap[locale] || projectsPt
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    throw createError({
      statusCode: 404,
      statusMessage: `Project with slug '${slug}' not found`,
    })
  }

  return project
})
