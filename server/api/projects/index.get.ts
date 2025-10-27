import { projects } from '../../data/portfolioData'

export default defineEventHandler(async (event) => {
  const projectList = projects.map(({ gallery, ...project }) => project)

  return projectList
})
