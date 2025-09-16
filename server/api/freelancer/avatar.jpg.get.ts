export default defineEventHandler(async (event) => {
  // Redirecionar para a imagem real no public
  await sendRedirect(event, '/images/main_photo.jpg', 302)
})
