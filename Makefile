.PHONY: admin receipt
.DEFAULT_GOAL := help

help: ## Autogenerated help reference for make
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.PHONY: help

install-dependencies: ## Install all required modules
	npm install

build: install-dependencies ## Compile application for production environment into "dist" directory
	npm run build

demo: install-dependencies ## Run application on temporary web-server in development mode
	npm run demo

deploy: build ## Install application into production directory
	rsync -avh --delete dist/* /var/www/receipt/static/receipt_vue
