# Testes Automatizados Mobile (WebdriverIO + Appium)

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=flat)
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-EA5906?logo=webdriverio&logoColor=white&style=flat)
![Appium](https://img.shields.io/badge/Appium-EE376D?logo=appium&logoColor=white&style=flat)
![Android](https://img.shields.io/badge/Android-3DDC84?logo=android&logoColor=white&style=flat)

## 📌 Sobre o Projeto

Repositório destinado ao desenvolvimento de testes automatizados End-to-End (E2E) para aplicações mobile, utilizando **WebdriverIO** e **Appium**.

O projeto contempla duas abordagens de automação:

- **Aplicativos nativos Android:** interação com elementos diretamente nas aplicações instaladas no dispositivo.
- **Aplicação mobile web:** automação de uma aplicação web acessada pelo navegador Chrome em um dispositivo Android.

## 📂 Projetos Cobertos

| Projeto | Tipo de Aplicação | Principais Cenários |
|---|---|---|
| MyDemoApp | Aplicativo nativo Android | Login e compra de produtos |
| NativeDemoApp | Aplicativo nativo Android | Cadastro, login, formulários e Drag and Drop |
| XTRacer | Aplicação Web Mobile | Cadastro PF/PJ, login e seleção de produtos |

### 1️⃣ MyDemoApp

Aplicativo de demonstração da **Sauce Labs**, utilizado para automação de fluxos de autenticação e compra de produtos.

### 2️⃣ NativeDemoApp

Aplicativo de demonstração do **WebdriverIO**, utilizado para explorar diferentes interações com elementos nativos, formulários e funcionalidades de interface.

### 3️⃣ XTRacer

Aplicação de comércio eletrônico acessada pelo Chrome em um emulador Android. Os testes contemplam cadastro de clientes, autenticação e seleção de produtos até etapas do checkout.

## 🏗️ Estrutura do Repositório

```
.
├── .github/
│   └── workflows/
│       └── mobileTests.yml
│
├── MyDemoApp/
│   ├── test/
│   │   ├── fixtures/
│   │   ├── pageobjects/
│   │   └── specs/
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   └── wdio.conf.js  
│
├── NativeDemoApp/
│   ├── test/
│   │   ├── components/
│   │   ├── fixtures/
│   │   ├── pageobjects/
│   │   └── specs/
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   └── wdio.conf.js
│
├── XTRacer/
│   ├── test/
│   │   ├── components/
│   │   ├── fixtures/
│   │   ├── pageobjects/
│   │   └── specs/
│   ├── .appiumrc.json
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   └── wdio.conf.js
│ 
├── .gitignore
└── README.md
```

## 🧩 Arquitetura dos Testes

Os projetos utilizam o padrão **Page Object Model (POM)** para organizar e reutilizar os elementos e as ações das aplicações.

- **Page Objects:** concentram os seletores e os métodos de interação com as páginas ou telas.
- **Components:** agrupam elementos e funcionalidades reutilizáveis, como formulários de login e cadastro.
- **Fixtures:** armazenam dados utilizados nos cenários automatizados.
- **Specs:** contêm os casos de teste e suas respectivas validações.

A separação entre essas responsabilidades facilita a manutenção dos testes e reduz a duplicação de código.

## ⚙️ Configuração do Ambiente

### 1️⃣ Pré-requisitos

- Node.js 24.22.1 ou superior.
- Java JDK.
- Android SDK.
- Android Emulator ou dispositivo Android.
- Android Platform Tools (ADB).

### 2️⃣ Instalação global do Appium e UiAutomator2

A **instalação global** permite utilizar o **Appium Server** e o driver **UiAutomator2** em diferentes projetos.

**Instalar o Appium:**

```
npm install -g appium
```

**Instalar o driver UiAutomator2:**

```
appium driver install uiautomator2
```

**Verificar as instalações:**

```
appium --version
appium driver list --installed
```

### 3️⃣ Instalação das dependências locais (opcional)

Além da **instalação global**, é possível adicionar o **Appium** e o driver **UiAutomator2** como **dependências de desenvolvimento** em cada projeto.

Dentro da pasta de cada projeto, executar:

```
npm install --save-dev appium appium-uiautomator2-driver
```

A **instalação local** mantém os pacotes registrados no **package.json** e no **package-lock.json**, permitindo sua instalação junto às demais dependências do projeto.

### 4️⃣ Instalação do WebdriverIO

O **WebdriverIO** deve ser instalado individualmente em cada projeto.

Para iniciar a configuração interativa:

```
npm init wdio@latest .
```

O assistente permite configurar o runner, framework de testes, serviços e demais recursos necessários.

## ▶️ Execução dos Testes

Os testes podem ser executados individualmente em cada projeto:

```
cd MyDemoApp
npm test
```

```
cd NativeDemoApp
npm test
```

```
cd XTRacer
npm test
```

O comando `npm test` executa o WebdriverIO utilizando o arquivo de configuração `wdio.conf.js` de cada projeto.

## 🔄 Integração Contínua (CI)

O repositório utiliza **GitHub Actions** para executar os testes automatizados em um self-hosted runner Linux, com emulador Android headless.

Workflow:

- `mobileTests.yml`: executa os testes dos projetos **MyDemoApp**, **NativeDemoApp** e **XTRacer**.

A execução contempla a inicialização do emulador, instalação das dependências e execução das suítes automatizadas.

No XTRacer, são utilizadas **GitHub Secrets** para fornecer os dados necessários à autenticação e ao preenchimento do CEP:

- `EMAIL`
- `SENHA`
- `CEP`

## 📚 Tecnologias e Ferramentas

- **Node.js:** ambiente de execução.
- **WebdriverIO:** framework de automação.
- **Appium:** ferramenta de automação mobile.
- **UiAutomator2:** driver utilizado na automação Android.
- **Mocha:** framework de testes.
- **Faker:** geração de dados aleatórios.
- **gerador-br:** geração de dados brasileiros.

## 🎯 Objetivos de Aprendizado

- Desenvolvimento de testes E2E para aplicações Android nativas e aplicações web mobile.
- Utilização de WebdriverIO em conjunto com Appium.
- Aplicação do padrão Page Object Model.
- Organização e reutilização de componentes e dados de teste.
- Validação de cenários positivos e negativos.
- Automação de interações com elementos nativos e componentes web.
- Execução de testes automatizados em emuladores Android.
- Integração das suítes de testes com GitHub Actions e self-hosted runner.