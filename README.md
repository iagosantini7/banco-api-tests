# Banco API Tests

Este repositório contém um projeto de **automação de testes para uma API REST**, desenvolvido em **JavaScript**, utilizando ferramentas como **Mocha**, **Chai**, **Supertest** e integrando relatórios com **Mochawesome**.  
Ele foi criado para testar a API do projeto:  
👉 https://github.com/juliodelimas/banco-api

---

## 🎯 Objetivo do Projeto

Fornecer uma suíte de testes automatizados para validar endpoints REST da API Banco, contribuindo com a qualidade das funcionalidades através de testes automatizados de integração.

---

## 🧰 Stack Utilizada

- **Node.js**
- **Mocha** – Framework de testes  
  Documentação: https://mochajs.org/
- **Chai** – Biblioteca de asserções  
  Documentação: https://www.chaijs.com/
- **Supertest** – Requisições HTTP para testes de API  
  Documentação: https://github.com/ladjs/supertest
- **Mochawesome** – Geração de relatórios em HTML  
  Documentação: https://github.com/adamgruber/mochawesome
- Outras dependências descritas no `package.json`.

---

## 📁 Estrutura de Diretórios

```
banco-api-tests/
│
├── test/
│   ├── login.test.js           
│   └── transferencia.test.js                
├── mochawesome-report/     # Relatórios HTML gerados automaticamente
├── .env                    # Arquivo para configuração da variável BASE_URL
├── .gitignore
├── package.json
└── README.md               
```

---

## 🔧 Formato do arquivo `.env`

O arquivo **não é versionado** e deve ser criado manualmente na raiz do projeto.  
Ele contém a variável que define a URL base da API testada:

```
BASE_URL="http://localhost:3000"
```

A URL deve apontar para a API Banco em execução localmente ou em outro ambiente.

---

## ▶️ Como Executar os Testes

### 1. Instale as dependências

```
npm install
```

### 2. Configure o arquivo `.env`

Crie na raiz:

```
BASE_URL="http://localhost:3000"
```

### 3. Execute os testes

```
npm test
```

### 4. Gerar relatório Mochawesome

O relatório HTML é gerado automaticamente após a execução dos testes.  
Ele ficará disponível em:

```
mochawesome-report/mochawesome.html
```

Para abrir:  
➡️ basta clicar no arquivo em seu gerenciador de arquivos.

---

## 📚 Documentações das Dependências

- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/
- Supertest: https://github.com/ladjs/supertest
- Mochawesome: https://github.com/adamgruber/mochawesome
- Dotenv: https://github.com/motdotla/dotenv

---



