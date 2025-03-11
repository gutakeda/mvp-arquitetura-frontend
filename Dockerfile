# Etapa 1: Construir a aplicação
FROM node:18 AS build

# Definir diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install -g nx
RUN npm install

# Copiar o código-fonte
COPY . .

# Rodar o build
RUN nx build mvp-arquitetura-frontend --prod

# Etapa 2: Servir a aplicação
FROM nginx:alpine

# Copiar os arquivos de build para o diretório do Nginx
COPY --from=build /app/dist/apps/mvp-arquitetura-frontend /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
