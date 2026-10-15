# Findings — SEO Technique — itgcdev.fr

Audit du 2026-09-30. Site : Next.js App Router, export statique (`output: 'export'`), hébergé sur Hostinger (CDN hcdn). 6 URLs.

## Ce qui fonctionne

- Les 6 URLs répondent 200, contenu servi pré-rendu (SSG) — 405 mots visibles sans JavaScript sur l'accueil (`is_spa: false`).
- `robots.txt` 200, groupe `*` allow `/`, sitemap déclaré.
- `sitemap.xml` 200, XML valide, 5 URLs avec lastmod.
- Canonicals auto-référents corrects sur toutes les pages.
- `http://` → `https://` en 301 ; slash final (`/blog/` → `/blog`) en 301.
- 404 réel sur URL inexistante (pas de soft 404).
- Lighthouse SEO catégorie : 1.0 ; Best Practices : 1.0.

## Problèmes

### HIGH — `www.itgcdev.fr` sert le site en 200 sans redirection
`https://www.itgcdev.fr` renvoie 200 avec le contenu complet et le canonical pointe vers `https://itgcdev.fr`, ce qui limite le risque, mais Google peut indexer et diviser les signaux sur les deux hôtes.
**Fix** : redirection 301 `www.itgcdev.fr/*` → `https://itgcdev.fr/*` au niveau Hostinger (règle de redirection), ou DNS www en CNAME vers l'hôte nu avec redirect.

### HIGH — `/blog` absent du sitemap
`src/app/sitemap.ts` n'inclut que l'accueil + les articles. Le hub `/blog` (page indexée, liée depuis la navbar) n'est pas soumis.
**Fix** : ajouter `{ url: `${DATA.url}/blog`, changeFrequency: "weekly", priority: 0.7 }` dans `sitemap.ts`.

### MEDIUM — En-têtes de sécurité absents
Réponse HTTP : aucun `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`/`frame-ancestors`, `Referrer-Policy`, `Permissions-Policy`. Seul `content-security-policy: upgrade-insecure-requests` est présent.
**Fix** : configurer dans `.htaccess` ou l'hébergeur : HSTS (max-age 31536000), nosniff, frame-ancestors 'self', Referrer-Policy strict-origin-when-cross-origin. Impact SEO indirect (confiance, fiabilité).

### LOW — Slug d'article non canonique
`/blog/private-policy_MASR58` contient un underscore et une majuscule — forme d'URL que Google déconseille dans les sitemaps. Si renommé (ex. `/blog/politique-de-confidentialite-masr58`), mettre une 301 et mettre à jour sitemap/liens internes.

### INFO — URL d'accueil dans le sitemap sans slash final
`<loc>https://itgcdev.fr</loc>` alors que l'URL servie est `https://itgcdev.fr/` ; Unlighthouse signale « Redirected url detected ». Utiliser `https://itgcdev.fr/` pour éviter toute négociation de redirection.
