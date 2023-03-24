# Use uma imagem base do Node.js
FROM node:18

# Crie e defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install
# Se estiver construindo para produção
# RUN npm ci --only=production

# Copie todos os arquivos do projeto para o contêiner
COPY . .

# Defina a porta que será exposta
EXPOSE 3000

# Execute o aplicativo
CMD ["npm", "start"]