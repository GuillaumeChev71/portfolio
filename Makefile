.PHONY: help install dev build lint typecheck clean serve

help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}'

install: ## Installe les dépendances avec pnpm
	pnpm install

dev: ## Lance le serveur de développement
	pnpm dev

build: ## Construit le site statique dans out/
	pnpm build

lint: ## Vérifie le code avec ESLint
	pnpm lint

typecheck: ## Vérifie les types avec TypeScript
	pnpm exec tsc --noEmit

serve: ## Sert le dossier out/ en local (port 3000)
	pnpm dlx serve out -l 3000

clean: ## Supprime les artefacts de build
	rm -rf .next out
