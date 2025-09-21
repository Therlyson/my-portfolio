export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  // Log da visita (em produção, salvar no banco de dados)
  console.log('📊 Nova visita registrada:', {
    ip: query.ip || '127.0.0.1',
    referrer: query.referrer,
    platform: query.platform,
    user_agent: query.user_agent,
    timestamp: new Date().toISOString(),
    lang_code: getHeader(event, 'lang-code') || 'pt',
  })

  return {
    message: 'Visit recorded successfully',
    timestamp: new Date().toISOString(),
  }
})
