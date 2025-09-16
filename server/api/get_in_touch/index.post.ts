export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validação básica
  if (!body.name || !body.email || !body.subject || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: name, email, subject, message',
    })
  }

  // Validação de email básica
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format',
    })
  }

  const contactData = {
    id: Date.now().toString(),
    name: body.name.trim(),
    email: body.email.trim().toLowerCase(),
    subject: body.subject.trim(),
    message: body.message.trim(),
    timestamp: new Date().toISOString(),
    lang_code: getHeader(event, 'lang-code') || 'en',
  }

  // Log da mensagem (em produção, você salvaria no banco de dados ou enviaria por email)
  console.log('📧 Nova mensagem de contato recebida:', {
    name: contactData.name,
    email: contactData.email,
    subject: contactData.subject,
    timestamp: contactData.timestamp,
  })

  // Aqui você pode integrar com serviços de email como:
  // - Resend
  // - SendGrid
  // - Nodemailer
  // - AWS SES
  // etc.

  return {
    message: 'Message sent successfully',
    id: contactData.id,
    timestamp: contactData.timestamp,
  }
})
