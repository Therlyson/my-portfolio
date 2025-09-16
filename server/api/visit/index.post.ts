export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Log da visita (em produção, você salvaria no banco de dados)
  console.log('📊 Nova visita registrada:', {
    ip: body.ip || '127.0.0.1',
    referrer: body.referrer,
    platform: body.platform,
    user_agent: body.user_agent,
    timestamp: new Date().toISOString(),
    lang_code: getHeader(event, 'lang-code') || 'en',
  })

  return {
    message: 'Visit recorded successfully',
    timestamp: new Date().toISOString(),
  }
})
