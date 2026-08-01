# Sai Praveen Sanapalli — Portfolio

Personal portfolio website for **Sai Praveen Sanapalli**, Senior Software Engineer. Built with React and Vite.

## Features

- Responsive single-page layout (Home, About, Skills, Experience, Education, Projects, Contact)
- Animated UI with Framer Motion
- Project gallery with image preview
- Contact form powered by [Web3Forms](https://web3forms.com)
- Configurable social links, email, and resume via environment variables

## Tech stack

- React 19
- Vite 7
- Tailwind CSS
- Framer Motion
- React Icons
- Web3Forms

## Getting started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
git clone https://github.com/saipraveen446/saipraveen-portfolio.git
cd saipraveen-portfolio
npm install
```

### Environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Access key from [web3forms.com](https://web3forms.com) |
| `VITE_LINKEDIN_URL` | LinkedIn profile URL |
| `VITE_GITHUB_URL` | GitHub profile URL |
| `VITE_BLOG_URL` | Blog / Dev.to URL |
| `VITE_EMAIL` | Contact email |
| `VITE_RESUME_URL` | Resume view link (e.g. Google Drive) |
| `VITE_RESUME_DOWNLOAD_URL` | Resume direct download URL |



### Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
public/          Static assets (favicon, project screenshots)
src/
  components/    Page sections and UI
  config/        Shared links / config
  App.jsx        App shell and section order
  index.css      Global styles
.env.example     Environment variable template
```

