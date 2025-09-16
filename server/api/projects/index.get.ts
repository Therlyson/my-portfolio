import { projects } from '../../data/portfolioData'

export default defineEventHandler(async (event) => {
  // Retornar apenas dados necessários para a lista (sem gallery)
  const projectList = projects.map(({ gallery, ...project }) => project)

  return projectList
})
