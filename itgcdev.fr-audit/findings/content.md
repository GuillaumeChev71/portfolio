# Findings — Contenu & E-E-A-T — itgcdev.fr

## Ce qui fonctionne

- Copy français propre : aucun pattern IA, aucun filler (scores filler/AI = 0 sur les 6 pages).
- Densité informationnelle correcte sur l'accueil (0.40) et le CV (0.74).
- Le positionnement « abonnement mensuel de développement logiciel sur mesure » est clair et différenciant.

## Problèmes

### HIGH — Contenu ultra-fin : `/blog/hello-world`
8 mots extraits (« Hi there! console.log("Hello World") »), en anglais sur un site français. Page indexée, dans le sitemap, cannibalise le crawl pour zéro valeur.
**Fix** : `noindex` + retrait du sitemap, ou suppression pure et simple, ou développement en vrai premier article.

### MEDIUM — Hub `/blog` quasi vide
27 mots extraits, H1 « Guillaume's Blog » en anglais, aucune intro, aucun lien thématique.
**Fix** : H1 « Blog — Développement logiciel, automatisation & outils sur mesure », 2-3 phrases d'intro avec mots-clés, éventuellement des extraits (summary) par article.

### MEDIUM — Article `/blog/cv` redondant avec l'accueil
Le CV (254 mots) reprend les données de `resume.tsx` déjà affichées sur l'accueil (expériences, formation, skills). Contenu quasi dupliqué, valeur SEO faible.
**Fix** : le garder comme version « imprimable/téléchargeable » avec un PDF, et une intro unique ; ou le fusionner avec l'accueil.

### MEDIUM — Signals E-E-A-T faibles sur l'accueil
- Le nom complet « Guillaume Chevallier » n'apparaît nulle part sur la page (seulement « Guillaume C. ») — mauvais pour l'entité personnelle et la requête de marque.
- Téléphone placeholder `"+123456789"` dans `src/data/resume.tsx` (non affiché mais présent dans les données).
- Aucune preuve : pas de case studies, pas de témoignages clients, pas de mention de projets concrets avec résultats.
**Fix** : utiliser le nom complet dans le hero et les métadonnées ; ajouter 2-3 réalisations concrètes (problème → solution → résultat) ; témoignages si possible.

### MEDIUM — La politique de confidentialité MASR58 est publiée sous `/blog/`
Une politique de confidentialité d'application tierce n'est pas un article de blog. Dilue la thématique du blog.
**Fix** : la déplacer sous `/mentions` ou `/legal/masr58`, 301 de l'ancienne URL.

### LOW — Lien Calendly avec paramètres figés
`https://calendly.com/guillaumechevallier71/30min?back=1&month=2025-09` — le paramètre `month=2025-09` sera obsolète. Utiliser l'URL nue.
