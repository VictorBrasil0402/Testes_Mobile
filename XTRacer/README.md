# Testes Automatizados Mobile E2E — XTRacer

## 📌 Sobre o Projeto

Projeto de automação de testes End-to-End (E2E) para a aplicação web **XT Racer**, acessada por meio do navegador Chrome em um dispositivo Android.

A automação utiliza **WebdriverIO** e **Appium**, permitindo executar os testes em um ambiente mobile com emulador Android.

A estrutura dos testes segue o padrão **Page Object Model (POM)**, com separação entre páginas, componentes, dados de teste e especificações.

**Aplicação:** https://www.xtracer.com.br

## 📂 Estrutura do Projeto

```
XTRacer/
├── test/
│   ├── components/
│   │   ├── CadastroPFComponent.js
│   │   └── CadastroPJComponent.js
│   │
│   ├── fixtures/
│   │   ├── UsuarioPF.js
│   │   └── UsuarioPJ.js
│   │
│   ├── pageobjects/
│   │   ├── CadastroPage.js
│   │   ├── CheckoutLoginPage.js
│   │   ├── CheckoutPage.js
│   │   ├── CheckoutResumoPage.js
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── PerfilPage.js
│   │   ├── ProdutoPage.js
│   │   └── ProdutosPage.js
│   │
│   └── specs/
│       ├── cadastroPF.e2e.js
│       ├── cadastroPJ.e2e.js
│       ├── login.e2e.js
│       └── selecaoProduto.e2e.js
│
├── .appiumrc.json
├── README.md
├── package-lock.json
├── package.json
└── wdio.conf.js
```

## 🧩 Arquitetura dos Testes

- **Page Objects:** representam as páginas de cadastro, login, perfil, produtos e checkout.
- **Components:** agrupam os campos e as funcionalidades específicas dos formulários de cadastro PF e PJ.
- **Fixtures:** concentram os dados utilizados na geração de usuários de Pessoa Física e Pessoa Jurídica.
- **Specs:** contêm os cenários automatizados e suas validações.

## 🧪 Cenários Automatizados

### Cadastro de Pessoa Física (PF)

- Cadastro com dados válidos.
- Validação de nome completo.
- Validação de data de nascimento.
- Validação de CPF.
- Validação de telefone celular.
- Validação de formato de e-mail.
- Validação de confirmação de e-mail.
- Validação de senha.
- Validação de confirmação de senha.

### Cadastro de Pessoa Jurídica (PJ)

- Cadastro com dados válidos.
- Validação de Razão Social.
- Validação de Inscrição Estadual.
- Validação de CNPJ.
- Validação de nome completo.
- Validação de telefone celular.
- Validação de formato de e-mail.
- Validação de confirmação de e-mail.
- Validação de senha.
- Validação de confirmação de senha.

### Login

- Login com dados válidos.
- Login com e-mail inválido.
- Login com senha inválida.

### Seleção de Produtos e Checkout

- Seleção de produto com dados válidos.
- Preenchimento de CEP no checkout.
- Validação de CEP inválido.
- Verificação de produto com estoque indisponível.

Os cenários de seleção de produtos contemplam a navegação pelo carrinho e pelas etapas do checkout, sem finalizar uma compra real.

## ⚙️ Tecnologias e Ferramentas

- Node.js
- WebdriverIO
- Appium
- UiAutomator2
- Mocha
- Faker
- gerador-br

## ▶️ Execução dos Testes

```
cd XTRacer
npm test
```

O comando executa os arquivos de teste definidos em `wdio.conf.js`.

### Variáveis de Ambiente

Os testes de **login** e **seleção de produtos** utilizam **variáveis de ambiente** para os dados de autenticação e CEP.

| Variável | Descrição |
|---|---|
| `TEST_EMAIL` | E-mail utilizado na autenticação |
| `TEST_PASSWORD` | Senha utilizada na autenticação |
| `TEST_CEP` | CEP utilizado no checkout |

Os valores devem ser configurados no ambiente de execução, evitando a exposição de credenciais nos arquivos do projeto.