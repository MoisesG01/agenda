# Etapa de build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build com aliases resolvidos
RUN npm run build

# Etapa final (produção)
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env .env

CMD ["node", "dist/index.js"]
