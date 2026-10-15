# Portfolio — Instructions agent

## Commande SEO (`/seo ...`)

Ce repo embarque le plugin `claude-seo/` (doc complète : `claude-seo/AGENTS.md`).
Ses skills sont exposés à Vibe via les symlinks `.vibe/skills/*` : la commande
`/seo <commande> [args]` est décrite dans `claude-seo/skills/seo/SKILL.md`
(orchestrateur qui route vers les sous-skills `seo-*`).

Le frontmatter des skills référence `${CLAUDE_PLUGIN_ROOT}` (variable Claude
Code absente de Vibe). Toujours exécuter les scripts Python via le wrapper
réel : `cd /home/gch/Bureau/portfolio/claude-seo && ./scripts/claude-seo run
<script> <args>` (si la runtime n'est pas prête : `./scripts/claude-seo setup`).

Rendre les résultats dans la langue de l'utilisateur, avec les corrections
actionnables pour ce site Next.js. Les identifiants API éventuels sont dans
`~/.config/claude-seo/`.

## Serveur de dev et build (règle critique)

Ce site est un export statique Next.js (`output: 'export'` dans
`next.config.mjs`). Le dev (`pnpm dev`) et le build (`pnpm build`) partagent le
dossier `.next` : lancer un build pendant qu'un serveur de dev tourne corrompt
son cache et provoque un blank screen (« missing required error components »).

- Avant toute vérification par le build : vérifier si un `pnpm dev` tourne
  (`ss -tlnp | grep :300`) ; si oui, l'arrêter d'abord, ou se contenter du
  rechargement à chaud du dev pour valider les modifications.
- Si un blank screen survient : arrêter le dev, `rm -rf .next`, relancer
  `pnpm dev`.
- Pour arrêter le dev depuis un script, ne jamais utiliser
  `pkill -f "next dev"` en toute lettres (le motif matche la commande courante
  et s'auto-tue) ; utiliser `pkill -f "[n]ext"` ou les PID.
- Le port 3000 est occupé par un autre service (Gotenberg) sur cette machine :
  le dev démarre sur 3001 ou au-delà.
