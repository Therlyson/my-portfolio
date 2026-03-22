# Therlyson Ryan - Portfolio

Bem-vindo ao repositório do meu portfólio pessoal. Este projeto é uma aplicação web moderna, desenvolvida para apresentar minha trajetória profissional, habilidades, projetos e certificações, refletindo minhas competências como Engenheiro de Dados e Desenvolvedor Full Stack.

[**Acesse o Portfólio Online Aqui**](https://therlysonryan.vercel.app/)

## 🚀 Tecnologias e Arquitetura

Este portfólio foi totalmente reescrito e modernizado para utilizar o que há de melhor em ecossistema Vue:

- **[Nuxt 3](https://nuxt.com/)**: Framework Vue.js escalável, com Server-Side Rendering (SSR) e Static Site Generation (SSG). 
- **[Vue 3 (Composition API)](https://vuejs.org/)**: Motor de UI reativo e focado em performance.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework utilitário de CSS para design ágil, responsivo e estética refinada.
- **[SASS/SCSS](https://sass-lang.com/)**: Pré-processamento de estilos para temas e customizações complexas.
- **[Vite](https://vitejs.dev/)**: Handshake de servidor de desenvolvimento ultra-rápido.
- **i18n (Internacionalização)**: Suporte nativo para múltiplos idiomas (Português, Inglês e Espanhol).
- **Nuxt OG Image e SEO**: Geração dinâmica de tags meta e imagens Open Graph para um compartilhamento perfeito em redes sociais.

## ✨ Funcionalidades

- **Design Minimalista e Dinâmico**: Focado em UX interativa e micro-interações fluidas.
- **Multi-idioma**: Alternância fácil de conteúdo (PT/EN/ES) baseada na preferência ou clique do usuário.
- **Servidor Integrado (Nitro)**: Rotas API servidas a partir da própria base de código (`/server/api`) provendo dados estáticos e processamento de contatos.
- **Integração de Contato**: Envio de e-mails diretamente da plataforma através da rota back-end com transponder SMTP configurado (`nodemailer`).
- **Deploy Otimizado na Vercel**: Compilação em ambiente de Edge/Severless utilizando Nuxt.js Preset.

## 🛠️ Como Executar Localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

### 1. Pré-requisitos
Certifique-se de que o **Node.js** (versão 18+) e o gerenciador de pacotes **npm** estão instalados.

### 2. Clonando o repósitorio e Instalando Dependências
```bash
git clone https://github.com/Therlyson/portfolio_projeto.git
cd portfolio_projeto
# O projeto é otimizado e baseia-se unicamente em npm (não utilize yarn).
npm install
```

### 3. Configuração de Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto, se baseando no `.env.example`:
```ini
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_API_BASE=http://localhost:3000

# Credenciais do SMTP para Formulário de Contato
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=SEU_EMAIL
SMTP_PASS=SUA_SENHA_DE_APP
SMTP_FROM="Portfolio Contact <seu-email@gmail.com>"
CONTACT_TO_EMAIL=SEU_EMAIL_DE_RECEBIMENTO
```

### 4. Iniciando o Servidor de Desenvolvimento
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação ativa.

## 📦 Construindo para Produção

Para realizar a *build* e testar os arquivos gerados, rode:
```bash
npm run build
```
Inicie a versão de produção gerada usando o motor servidor do Nitro:
```bash
node .output/server/index.mjs
```

## 📩 Contato

Gostou do que viu? Fique à vontade para entrar em contato:
- [LinkedIn](https://www.linkedin.com/in/therlyson-ryan/)
- [GitHub](https://github.com/Therlyson)

---
Feito com ☕ e muito código por Therlyson Ryan.
