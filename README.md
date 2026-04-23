# Zulope

This is a code bundle for Zulope. The original project is available at https://www.figma.com/design/21OdLP1QNnK4u4s2DYLL43/Zulope.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## SEO setup for Google indexing

The project now includes:

- `index.html` metadata for search and social previews
- `public/robots.txt`
- `public/sitemap.xml`

Before or after deploy, update these values with your final production domain:

- `https://zulope.com/` in `index.html`
- `https://zulope.com/sitemap.xml` in `public/robots.txt`
- `https://zulope.com/` in `public/sitemap.xml`

After deployment:

1. Open Google Search Console and add your domain property.
2. Submit `https://your-domain/sitemap.xml`.
3. Use URL Inspection for the homepage and request indexing.
4. Keep at least one backlink and share your site URL publicly so Google discovers it faster.
