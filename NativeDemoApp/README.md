# Testes Automatizados E2E — NativeDemoApp

## 📌 Sobre o Projeto

Projeto de automação de testes End-to-End (E2E) para o aplicativo nativo Android **NativeDemoApp**, utilizado como aplicação de demonstração do **WebdriverIO**.

A automação utiliza **WebdriverIO** e **Appium** para interagir com os elementos nativos da aplicação em um emulador Android.

O projeto explora diferentes funcionalidades de interface, incluindo cadastro, autenticação, validação de formulários e interação com elementos por meio de gestos.

A arquitetura segue o padrão **Page Object Model (POM)**, com separação entre páginas, componentes, dados de teste e especificações.

## 📂 Estrutura do Projeto

```
NativeDemoApp/
├── test/
│   ├── components/
│   │   ├── LoginComponent.js
│   │   └── SignUpComponent.js
│   │
│   ├── fixtures/
│   │   ├── dropdownItens.json
│   │   └── User.js
│   │
│   ├── pageobjects/
│   │   ├── AutenticacaoPage.js
│   │   ├── DragPage.js
│   │   ├── FormPage.js
│   │   └── HomePage.js
│   │
│   └── specs/
│       ├── cadastro.e2e.js
│       ├── dragDropPuzzle.e2e.js
│       ├── login.e2e.js
│       └── validacoesFormulario.e2e.js
│
├── README.md
├── package-lock.json
├── package.json
└── wdio.conf.js
```

## 🧩 Arquitetura dos Testes

- **Page Objects:** representam as telas de autenticação, formulários e funcionalidades de Drag and Drop.
- **Components:** agrupam funcionalidades reutilizáveis de login e cadastro.
- **Fixtures:** armazenam dados de usuários e opções utilizadas nos campos dropdown.
- **Specs:** contêm os cenários automatizados e suas validações.

## 🧪 Cenários Automatizados

### Cadastro

- Cadastro de usuário com dados válidos.
- Cadastro com formato de e-mail inválido.
- Cadastro com senha inválida.
- Cadastro com confirmação de senha diferente.

### Login

- Login com dados válidos.
- Login com formato de e-mail inválido.
- Login com senha inválida.
- Login sem informar o e-mail.
- Login sem informar a senha.

### Validações de Formulário

- Correspondência de textos nos campos de entrada e saída.
- Alternância do switch entre os estados desligado e ligado.
- Seleção de itens em campo dropdown.
- Funcionamento de botão ativo com exibição de alerta.
- Funcionamento de botão inativo sem exibição de alerta.

### Drag and Drop

- Execução do puzzle utilizando interações de arrastar e soltar elementos.

## ⚙️ Tecnologias e Ferramentas

- Node.js
- WebdriverIO
- Appium
- UiAutomator2
- Mocha
- Faker

## ▶️ Execução dos Testes

```
cd NativeDemoApp
npm test
```

O comando executa os arquivos de teste definidos em `wdio.conf.js`.