export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/admin/*',
      },
      sitemap: 'https://xyz.com/sitemap.xml/',
    }
  }