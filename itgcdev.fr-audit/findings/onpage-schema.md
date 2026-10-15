# Findings — On-Page & Schema — itgcdev.fr

## On-page

### Points positifs
- Titres uniques et bien formés sur les 6 pages (pipe `| Guillaume C.`).
- Meta description présente partout, adaptée par page.
- OG + Twitter Card complets sur l'accueil.
- `robots: index, follow` + directives googlebot correctes.

### Problèmes

#### HIGH — og:image des articles de blog en 404
Tous les articles utilisent `https://itgcdev.fr/og?title=...` comme `og:image`/`twitter:image` (généré dans `src/app/blog/[slug]/page.tsx`), mais la route `/og` n'existe pas dans l'export statique (`output: 'export'` ne peut pas servir de route dynamique). Vérifié : `/og?title=Test` → 404. Tout partage LinkedIn/X/WhatsApp d'un article affiche un aperçu sans image.
**Fix** : générer des images OG statiques par article (script build avec `@vercel/og` + satori en local, ou images 1200×630 préparées à la main) et renseigner `image` dans le frontmatter MDX de chaque article.

#### MEDIUM — H1 d'accueil sans mot-clé
H1 : « Salut, moi c'est Guillaume 👋 » + « Software Engineer » en anglais. Aucune occurrence de « développeur », « freelance » ou « Montpellier » dans le H1 ni le sous-titre visible (ils sont dans title/description seulement).
**Fix** : sous-titre H1 ou paragraphe hero : « Développeur logiciel freelance à Montpellier — automatisation et outils sur mesure pour entreprises. » Le titre actuel de la page est déjà bon.

#### MEDIUM — OG image d'accueil lourde et carrée
`me_nyc.png` : 589 Ko, 512×512. Les partages sociaux attendent 1200×630 et idéalement < 300 Ko.
**Fix** : recompresser en 1200×630 WebP/PNG optimisé.

#### MEDIUM — Maillage interne pauvre
Les articles ne lient que `/` et `/blog`. L'accueil ne fait aucun lien vers les articles de blog. Aucun lien contextuel vers le Calendly depuis les contenus.
**Fix** : depuis chaque article, lien vers l'accueil ancré sur l'offre (ex. « Besoin d'automatiser un processus ? ») ; depuis l'accueil, une section « Derniers articles ».

## Schema.org

Présent et valide : graphe `Person` + `ProfessionalService` + `WebSite` sur toutes les pages, `BlogPosting` sur les articles. JSON-LD bien formé, `@id` interconnectés.

### Problèmes

#### MEDIUM — Person : nom abrégé et sameAs inadapté
- `name: "Guillaume C."` → Google ne peut pas associer l'entité à « Guillaume Chevallier » (le nom complet est pourtant dans meta keywords/description). Ajouter `givenName`/`familyName` et utiliser le nom complet.
- `sameAs` contient l'URL Calendly **avec paramètres de requête** — Calendly n'est pas un profil social ; retirer de `sameAs` (le laisser comme lien de contact dans le corps de page).

#### LOW — ProfessionalService incomplet
Pas de `priceRange`, pas de `telephone`, `address` limité à la ville. Pour une offre d'abonnement, `priceRange: "€€"` et `telephone` (réel) renforcent le rich snippet potentiel.

#### LOW — BlogPosting : auteur non lié
`author: {"@type": "Person", "name": "Guillaume C."}` sans `@id` → l'auteur de l'article n'est pas rattaché à l'entité Person du graphe. Réutiliser `{"@id": "https://itgcdev.fr/#person"}`.
