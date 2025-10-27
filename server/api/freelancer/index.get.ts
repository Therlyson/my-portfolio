import { userData } from '../../data/portfolioData'

export default defineEventHandler(async (event) => {
  return userData
})
