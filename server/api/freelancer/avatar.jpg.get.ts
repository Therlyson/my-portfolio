export default defineEventHandler(async (event) => {
  await sendRedirect(event, '/images/main_photo.jpg', 302)
})
