export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://rafaelasoftware.com.ar/sitemap.xml',
    }
}