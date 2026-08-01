const env = import.meta.env;

export const LINKS = {
  linkedin: env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/saipraveen446/',
  github: env.VITE_GITHUB_URL || 'https://github.com/saipraveen446',
  blog: env.VITE_BLOG_URL || 'https://dev.to/saipraveen446',
  email: env.VITE_EMAIL || 'saipraveensanapalli@gmail.com',
  resumeView:
    env.VITE_RESUME_URL ||
    'https://drive.google.com/file/d/1eBMM7xGNxJy82wKjll9itliWHmoSMmqM/view?usp=drive_link',
  resumeDownload:
    env.VITE_RESUME_DOWNLOAD_URL ||
    'https://drive.google.com/uc?export=download&id=1eBMM7xGNxJy82wKjll9itliWHmoSMmqM',
};

export const mailto = `mailto:${LINKS.email}`;
