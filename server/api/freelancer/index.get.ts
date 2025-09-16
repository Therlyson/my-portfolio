import { userData } from '../../data/portfolioData'

export default defineEventHandler(async (event) => {
  // Simular delay de API real (opcional)
  // await new Promise(resolve => setTimeout(resolve, 100))

  return userData
})
