# Plan d'action priorisé — itgcdev.fr

Priorités : **Critical** (bloque l'indexation ou pénalise) > **High** (impact fort, < 1 semaine) > **Medium** (< 1 mois) > **Low** (backlog).

## Phase 1 — Corrections critiques (semaine 1)

| # | Action | Fichier / lieu | Effort |
|---|---|---|---|
| 1.1 | Redirection 301 `www.itgcdev.fr` → `https://itgcdev.fr` | Panel Hostinger (règle de redirection) | 15 min |
| 1.2 | Ajouter `/blog` au sitemap | `src/app/sitemap.ts` | 5 min |
| 1.3 | Créer des images OG statiques pour les 4 articles (`og` en 404) | frontmatter MDX `image:` + PNG 1200×630 dans `public/` | 1-2 h |
| 1.4 | `noindex` + retrait du sitemap pour `/blog/hello-world` (ou suppression) | `content/hello-world.mdx` + `src/app/blog/[slug]/page.tsx` | 15 min |

## Phase 2 — Améliorations à fort impact (semaines 2-3)

| # | Action | Fichier | Effort |
|---|---|---|---|
| 2.1 | Sous-titre H1 avec mots-clés : « Développeur logiciel freelance à Montpellier — automatisation et outils sur mesure » | `src/data/resume.tsx` (description) / hero | 15 min |
| 2.2 | Nom complet « Guillaume Chevallier » : hero, `Person` schema (+ `givenName`/`familyName`) | `src/data/resume.tsx` + `src/app/layout.tsx` | 30 min |
| 2.3 | Retirer Calendly de `sameAs` ; nettoyer l'URL (`?back=1&month=2025-09` → URL nue) | `src/data/resume.tsx` | 10 min |
| 2.4 | Supprimer le téléphone placeholder `+123456789` | `src/data/resume.tsx` | 5 min |
| 2.5 | Maillage interne : section « Derniers articles » sur l'accueil + lien contextuel CTA depuis chaque article | `src/app/page.tsx` + `src/app/blog/[slug]/page.tsx` | 1 h |
| 2.6 | En-têtes de sécurité : HSTS, `X-Content-Type-Options`, `frame-ancestors`, `Referrer-Policy` | `.htaccess` / config Hostinger | 30 min |
| 2.7 | Recompresser `me_nyc.png` (589 Ko) : avatar < 100 Ko + OG 1200×630 < 300 Ko | `public/` | 30 min |

## Phase 3 — Contenu & autorité (mois 2)

- Développer le hub `/blog` : H1 FR avec mots-clés, 2-3 phrases d'intro, summary par article.
- Déplacer la politique MASR58 sous `/legal/` avec 301.
- Ajouter 2-3 réalisations concrètes (problème → solution → résultat) et idéalement des témoignages sur l'accueil.
- Publier `/llms.txt` (H1, `>` summary, liens Markdown) + `Content-Signal: search=yes, ai-input=yes, ai-train=no` dans robots.txt.
- Construire les premiers backlinks : profils GitHub/LinkedIn liés vers itgcdev.fr, annuaires freelance français, annuaire Mastodon/Fediverse, 1-2 articles invités ou projets open source documentés.
- `ProfessionalService` : ajouter `priceRange` et `telephone` réel.

## Phase 4 — Suivi (en continu)

- Poser une baseline `seo-drift` après les corrections de phase 1, puis diff à chaque déploiement.
- Brancher Google Search Console (`~/.config/claude-seo/google-api.json`) pour suivre indexation et requêtes.
- Re-tester PageSpeed Insights quand le quota est disponible ; viser ≥ 0.95 desktop et mobile partout.
- Ré-encoder `sarl.mp4` (33,7 Mo) ou migrer vers YouTube/Vimeo.

## Impact attendu

Les phases 1-2 corrigent tout ce qui est cassé (www, sitemap, OG 404, contenu fin) : score de santé projeté ~85-88. La phase 3 débloque la croissance sur les requêtes commerciales, aujourd'hui limitée par l'absence totale d'autorité (domaine absent de Common Crawl).
