import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig(event)

  const name = (body.name ?? body.full_name ?? '').toString().trim()
  const email = (body.email ?? '').toString().trim().toLowerCase()
  const subject = (body.subject ?? '').toString().trim()
  const message = (body.message ?? body.text ?? '').toString().trim()

  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: name, email, subject, message',
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format',
    })
  }

  const contactData = {
    id: Date.now().toString(),
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
    lang_code: getHeader(event, 'lang-code') || 'en',
  }

  if (
    !config.smtpHost ||
    !config.smtpPort ||
    !config.smtpUser ||
    !config.smtpPass ||
    !config.smtpFrom ||
    !config.contactToEmail
  ) {
    throw createError({
      statusCode: 500,
      statusMessage:
        'SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO_EMAIL.',
    })
  }

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: Number(config.smtpPort) === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  })

  const html = `
    <h2>Nova mensagem do formulário do portfólio</h2>
    <p><strong>Nome:</strong> ${contactData.name}</p>
    <p><strong>Email:</strong> ${contactData.email}</p>
    <p><strong>Assunto:</strong> ${contactData.subject}</p>
    <p><strong>Idioma:</strong> ${contactData.lang_code}</p>
    <p><strong>Data:</strong> ${contactData.timestamp}</p>
    <hr />
    <p>${contactData.message.replace(/\n/g, '<br/>')}</p>
  `

  await transporter.sendMail({
    from: config.smtpFrom,
    to: config.contactToEmail,
    replyTo: contactData.email,
    subject: `[Portfólio] ${contactData.subject}`,
    text: `Nome: ${contactData.name}\nEmail: ${contactData.email}\nIdioma: ${contactData.lang_code}\nData: ${contactData.timestamp}\n\n${contactData.message}`,
    html,
  })

  return {
    message: 'Message sent successfully',
    id: contactData.id,
    timestamp: contactData.timestamp,
  }
})
