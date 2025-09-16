import { projects } from '../../../data/portfolioData'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Slug parameter is required',
    })
  }

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    throw createError({
      statusCode: 404,
      statusMessage: `Project with slug '${slug}' not found`,
    })
  }

  return project
})
