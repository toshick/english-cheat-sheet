

.PHONY: nuxt
nuxt:
	cd front-english-cheat-sheet && npm ci && npm test && npm run generate