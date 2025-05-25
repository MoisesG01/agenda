# 📅 Agenda API

Uma API RESTful para gerenciamento de usuários e contatos, desenvolvida com Node.js, TypeScript, Express e MySQL, seguindo princípios de arquitetura limpa e boas práticas de desenvolvimento.

---

## 🚀 Visão Geral

A Agenda API permite o cadastro, consulta e gerenciamento de usuários e seus contatos, oferecendo endpoints seguros e estruturados para integração com aplicações web e mobile.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** & **TypeScript**
- **Express.js**
- **MySQL**
- **Docker** & **Docker Compose**
- **Jest** (testes automatizados)
- **Class-validator** & **Class-transformer** (validação e transformação de dados)

---

## 📂 Estrutura do Projeto

```
src/
├── application      # Casos de uso (regras de negócio)
├── domain           # Entidades e interfaces de repositórios
├── infrastructure   # Implementações de repositórios e configuração do banco
├── presentation     # Controllers, rotas, DTOs e middlewares
├── tests            # Testes automatizados
```

---

## ⚙️ Configuração e Execução

### 1. Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- MySQL (caso não utilize Docker)

### 2. Instalação

Clone o repositório e instale as dependências:

```sh
git clone https://github.com/MoisesG01/agenda.git
cd agenda
npm install
```

### 3. Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=agenda_db
PORT=3000
DB_PORT=3307
```

### 4. Execução com Docker

Suba o ambiente completo (API, MySQL e phpMyAdmin):

```sh
docker-compose up
```

Acesse o phpMyAdmin em [http://localhost:8080](http://localhost:8080).

### 5. Execução Local

Certifique-se de que o MySQL está rodando e o banco está criado (veja `dataBase.sql`).  
Inicie a aplicação em modo desenvolvimento:

```sh
npm run dev
```

---

## 📑 Endpoints Principais

| Método | Endpoint              | Descrição                          |
| ------ | --------------------- | ---------------------------------- |
| POST   | `/api/users`          | Cria um novo usuário               |
| GET    | `/api/users`          | Lista todos os usuários            |
| GET    | `/api/users/:email`   | Busca usuário por e-mail           |
| POST   | `/api/contatos`       | Cria um novo contato               |
| GET    | `/api/contatos/:name` | Lista contatos por nome de usuário |

---

## 🧪 Testes

Execute os testes automatizados com:

```sh
npm test
```

---

## 📌 Observações

- Validação de dados robusta com `class-validator`.
- Banco de dados inicializado automaticamente via Docker Compose.
- Interface web para gerenciamento do banco via phpMyAdmin.
- Arquitetura modular e escalável, facilitando manutenção e evolução.

---

## 📃 Licença

Este projeto está licenciado sob a licença MIT.

---

> Desenvolvido por Moisés Gonçalves — Para dúvidas ou sugestões, entre em contato!
