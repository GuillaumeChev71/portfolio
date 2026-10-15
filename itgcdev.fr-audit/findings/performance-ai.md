# Findings — Performance, Images, AI Search Readiness, SXO — itgcdev.fr

## Performance (labo, Lighthouse mobile via Unlighthouse, 3 routes)

| Route | Perf | A11y | BP | SEO |
|---|---|---|---|---|
| `/` | ~0.96 | 0.95 | 1.0 | 1.0 |
| `/blog/api-fff-dofa` | 0.96 | 0.91 | 1.0 | 1.0 |
| `/blog/cv` | 1.00 | 0.95 | 1.0 | 1.0 |
| **Agrégé** | **0.96** | **0.95** | **1.0** | **1.0** |

- TTFB 230 ms, HTML 58 Ko, Brotli actif (`content-encoding: br`).
- Fonte `woff2` préchargée, pas d'image en above-the-fold (avatars = lettres) → LCP très probablement le texte du hero.
- JS : 818 Ko bruts sur 11 chunks (les polyfills de 91 Ko sont gated par `noModule`, donc ignorés par les navigateurs modernes).
- PageSpeed Insights API indisponible (quota partagé atteint) — pas de données terrain CrUX ; labo uniquement.

### MEDIUM — `me_nyc.png` 589 Ko
Utilisée comme avatar (lien `DATA.avatarUrl`) et OG image. Recompresser (< 100 Ko pour l'avatar, 1200×630 < 300 Ko pour l'OG).

### LOW — Vidéos lourdes dans `public/`
`masr_video.mp4` 6 Mo et `sarl.mp4` 33,7 Mo référencées dans `resume.tsx` (`work[].video`). Non présentes dans le HTML d'accueil (chargement à la demande probable), mais 33,7 Mo reste très lourd si le composant le charge sur hover/scroll. Vérifier le comportement et si besoin re-encoder en H.264 baseline ~5-8 Mo ou streamer via YouTube/Vimeo.

## Images

- Aucune balise `<img>` sur les 6 pages crawlées → aucun problème d'alt, de lazy loading ni de CLS lié aux images. Seul point : poids de l'OG/avatar (voir ci-dessus).

## AI Search Readiness (agentic check)

- PASS : contenu servi sans JS, robots.txt accessible, 404 sain.
- INFO (manques) : pas de `/llms.txt` (format llmstxt.org avec H1, `>` summary et liens Markdown ajouterait un point compté Lighthouse), pas de `Content-Signal` dans robots.txt, pas de version Markdown, pas d'`ai-catalog.json` (non applicable à un site statique vitrine).
- Citabilité : l'accueil est court (406 mots) mais factuel ; les articles de blog (surtout la doc API FFF, 1 167 mots) sont de bons candidats à citation par les moteurs de réponse.

### Recommandations GEO
1. Publier un `/llms.txt` listant l'accueil, l'offre et les articles.
2. Ajouter `Content-Signal: search=yes, ai-input=yes, ai-train=no` au groupe `*` de robots.txt.
3. Structurer l'offre en passages autoporteurs (what/how/for whom/prix) pour les AI Overviews.

## SXO (search experience)

- Type de page : one-pager portfolio/offre d'abonnement. Répond bien aux requêtes de marque (« Guillaume Chevallier dev ») mais sous-exploite les requêtes commerciales (« automatiser processus métier », « développeur sur abonnement », « développeur freelance Montpellier »).
- Manques UX/conversion visibles depuis le code : aucun prix, aucune FAQ, aucun cas client, CTA = Calendly seul, téléphone placeholder (`+123456789` dans `resume.tsx`).
- Story utilisateur dominante : un dirigeant de TPE/PME veut estimer si « dev sur abonnement » vaut le coup → la page doit afficher fourchettes de prix, périmètre de l'abonnement, et 1-2 résultats mesurables.

## Off-page / autorité

- Common Crawl (index 2026 Q1) : domaine absent du crawl et des classements (PageRank/harmonic centrality = null). Empreinte de backlinks quasi nulle — normal pour un site récent, mais c'est le principal facteur limitant pour les requêtes commerciales.
- Pas d'API Moz/Bing/GSC disponibles pour chiffrer les referring domains.
