# Audit SEO complet — itgcdev.fr

Date : 2026-09-30 | Outil : claude-seo (crawl 6/6 URLs, Lighthouse mobile, checks agentic, Common Crawl)
Codebase : Next.js App Router, export statique (`output: 'export'`), hébergement Hostinger (hcdn)

## Score de santé SEO : 77 / 100

| Catégorie | Poids | Score |
|---|---|---|
| SEO Technique | 22 % | 82 |
| Qualité de contenu | 23 % | 68 |
| On-Page SEO | 20 % | 74 |
| Schema / Données structurées | 10 % | 78 |
| Performance (CWV) | 10 % | 93 |
| AI Search Readiness | 10 % | 70 |
| Images | 5 % | 90 |

Type de site détecté : portfolio freelance développeur logiciel (offre d'abonnement mensuel) — one-pager + blog, 6 URLs, cible TPE/PME France.

## Top 5 problèmes critiques

1. **`www.itgcdev.fr` sert le site en 200 sans redirection** — signaux potentiellement divisés entre les deux hôtes. Fix Hostinger : 301 www → domaine nu.
2. **og:image des 4 articles en 404** — la route `/og?title=...` n'existe pas en export statique. Tout partage social d'un article n'affiche pas d'image.
3. **`/blog` absent du sitemap.xml** — le hub du blog n'est pas soumis aux moteurs.
4. **`/blog/hello-world`** : 8 mots en anglais, indexé — contenu ultra-fin qui dilue la qualité du site.
5. **H1 d'accueil sans mot-clé** — « Salut, moi c'est Guillaume 👋 » : aucune requête commerciale couverte par le H1.

## Top 5 quick wins

1. Ajouter `/blog` dans `src/app/sitemap.ts` (2 lignes).
2. Redirection 301 www → nu (réglage hébergeur).
3. Nettoyer l'URL Calendly (`?back=1&month=2025-09` figé sur sept. 2025).
4. Nom complet « Guillaume Chevallier » dans le hero et le schema `Person` (aujourd'hui « Guillaume C. » partout, y compris `sameAs`).
5. Recompresser `me_nyc.png` (589 Ko) et produire une OG 1200×630.

## Synthèse par catégorie

### SEO Technique — 82
Les fondations sont solides : 6/6 URLs en 200, pré-rendues sans JS, canonicals corrects, 301 http→https, vrais 404, Lighthouse SEO 1.0. Les deux vrais trous sont la duplication www (High) et l'omission de `/blog` au sitemap (High). En-têtes de sécurité absents (Medium). Détail : `findings/technical.md`.

### Qualité de contenu — 68
Copy française propre (zéro pattern IA, zéro filler), mais deux pages quasi vides (`hello-world` 8 mots, hub `/blog` 27 mots), un article CV redondant avec l'accueil, et des signaux E-E-A-T faibles : nom complet absent de la page, téléphone placeholder `+123456789` dans `resume.tsx`, aucun cas client ni témoignage. Détail : `findings/content.md`.

### On-Page — 74
Titres/descriptions uniques et bons sur les 6 pages. En revanche : og:image d'articles cassés (High), H1 sans mot-clé (Medium), OG d'accueil 589 Ko en 512×512 (Medium), maillage interne quasi inexistant (Medium). Détail : `findings/onpage-schema.md`.

### Schema — 78
Graphe `Person` + `ProfessionalService` + `WebSite` avec `@id` cohérent, `BlogPosting` sur les articles — base saine. Corrections : nom complet + `givenName`/`familyName`, retirer Calendly de `sameAs`, lier l'auteur des `BlogPosting` au `@id` Person, compléter `ProfessionalService` (`priceRange`, `telephone`).

### Performance — 93
Lighthouse mobile labo : **perf 0.96, a11y 0.95, Best Practices 1.0, SEO 1.0** (3 routes testées). TTFB 230 ms, Brotli, fonte préchargée, zéro image above-the-fold. Pas de données terrain CrUX (quota PSI atteint, pas de clé API Google configurée). Détail : `findings/performance-ai.md`.

### AI Search Readiness — 70
Contenu servi sans JS (pass), robots accessible (pass), 404 sain (pass). Manquent : `/llms.txt` (404), `Content-Signal`, version Markdown. La doc API FFF (1 167 mots) est le meilleur actif citable du site.

### Images — 90
Aucune balise `<img>` sur le site : aucun problème d'alt ni de CLS. Seul le poids de l'OG/avatar pèche. Vidéo `sarl.mp4` (33,7 Mo) à ré-encoder ou externaliser.

### SXO / intention
La page répond bien aux requêtes de marque, mais sous-exploite les requêtes commerciales (« automatiser processus métier », « développeur sur abonnement ») : aucun prix, aucune FAQ, aucun cas client — l'histoire utilisateur « est-ce que ça vaut le coup pour ma TPE ? » reste sans réponse sur la page.

### Autorité off-page
Common Crawl (index 2026 T1) : domaine absent du crawl et des classements — empreinte de backlinks quasi nulle. Principal facteur limitant pour les requêtes commerciales ; normal pour un site récent.

## Fichiers

- `findings/technical.md` — technique
- `findings/content.md` — contenu & E-E-A-T
- `findings/onpage-schema.md` — on-page & schema
- `findings/performance-ai.md` — perf, images, AI readiness, SXO
- `audit-data.json` — enveloppe structurée
- `ACTION-PLAN.md` — plan priorisé
