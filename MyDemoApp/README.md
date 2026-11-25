# Testes Automatizados E2E — MyDemoApp

## 📌 Sobre o Projeto

Projeto de automação de testes End-to-End (E2E) para o aplicativo nativo Android **MyDemoApp**, da **Sauce Labs**.

A automação utiliza **WebdriverIO** e **Appium** para interagir com os elementos da aplicação em um emulador Android.

A estrutura dos testes segue o padrão **Page Object Model (POM)**, separando os elementos e as ações das telas dos cenários automatizados.

## 📂 Estrutura do Projeto

```
MyDemoApp/
├── test/
│   ├── fixtures/
│   │   └── User.js
│   │
│   ├── pageobjects/
│   │   ├── CarrinhoPage.js
│   │   ├── CheckoutCompletoPage.js
│   │   ├── CheckoutPagamentoPage.js
│   │   ├── CheckoutPage.js
│   │   ├── CheckoutResumoPage.js
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   └── ProdutoPage.js
│   │
│   └── specs/
│       ├── compraProduto.e2e.js
│       └── login.e2e.js
│
├── README.md
├── package-lock.json
├── package.json
└── wdio.conf.js
```

## 🧩 Arquitetura dos Testes

- **Page Objects:** representam as telas de login, produtos, carrinho e checkout.
- **Fixtures:** concentram os dados utilizados nos cenários de teste.
- **Specs:** implementam os cenários de autenticação e compra de produtos.

## 🧪 Cenários Automatizados

### Login

- Login com dados válidos.
- Login com usuário inválido.
- Login com senha inválida.
- Login sem informar o usuário.
- Login sem informar a senha.
- Login com usuário bloqueado.

### Compra de Produtos

- Realização de compra de produto com dados válidos.
- Navegação entre as etapas de seleção do produto, carrinho, checkout e confirmação do pedido.

## ⚙️ Tecnologias e Ferramentas

- Node.js
- WebdriverIO
- Appium
- UiAutomator2
- Mocha
- Faker

## ▶️ Execução dos Testes

```
cd MyDemoApp
npm test
```

O comando executa os arquivos de teste definidos em `wdio.conf.js`.