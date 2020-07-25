<h1 align="center">
  <img alt="Logo" title="#logo" width="300px" src=".github/logo.svg">
</h1>

<p align="center">
  <a href="https://www.linkedin.com/in/vinicius-raphael/">
    <img alt="Made by v-rapha" src="https://img.shields.io/badge/made%20by-Vinicius%20Raphael-red" />
  </a>
    
  <a href="https://github.com/v-rapha/be-the-hero/blob/master/LICENCE">
    <img alt="License" src="https://img.shields.io/github/license/v-rapha/ecoleta?color=red" />
  </a>
</p>

## Sobre
O <strong>Be The Hero</strong> é um projeto que visa conectar pessoas dispostas a ajudar ONGs.

## Tecnologias utilizadas
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://reactnative.dev)
- [Expo](https://expo.io)

## Como usar

### Pré-requisitos
- É <strong>necessário</strong> ter instalado o [Node.js](https://nodejs.org/en/) qualquer versão <strong>acima de 10</strong>.
- Instalar o [NPM](https://www.npmjs.com/get-npm) ou [YARN](https://classic.yarnpkg.com/pt-BR/docs/install/).
- Instalar o [Expo](https://expo.io/learn) globalmente.
- Caso for rodar a aplicação mobile no <strong>dispositivo fisico</strong>, você irá precisar ter instalado o aplicativo do [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt).

### 1º Faça o clone do repositório
```sh
  $ git clone https://github.com/v-rapha/be-the-hero.git
```

### 2º Instale as dependências usando NPM ou YARN e execute a aplicação:

- Iniciando o back-end
```sh
  # Pelo prompt de comando entre na pasta backend
  $ cd be-the-hero/backend

  # Instale as dependências
  $ npm install
  
  # Rode as migrations
  $ npm run knex:migrate

  # Inicie o server
  $ npm dev
```
- ### Iniciando a aplicação web
```sh
  # Entre no arquivo web
  $ cd be-the-hero/web

  # Instale as dependências
  $ npm install

  # Inicie a aplicação
  $ npm start

  # Automáticamente será aberta uma janela no seu navegador padrão.
  # Caso isso não ocorra acesse: localhost:3000.
```

- ### Iniciando a aplicação mobile
```sh
  # Pelo prompt de comando entre na pasta mobile
  $ cd be-the-hero/mobile

  # Instale as dependências
  $ npm install

  # No arquivo api.js (pasta src -> services) troque a baseURL pelo seu endereço IP. Salve o arquivo.

  # Inicie a aplicação
  $ npm start

  # O Expo irá abrir no terminal e/ou no navegador.
  # Você precisa apenas escanear o QRcode com seu dispositivo fisico ou rodar a aplicação no seu emulador.
```

## Como contribuir
- Faça um fork desse repositório
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Faça um push para sua branch: `git push origin my-feature`

## Quem ministrou
As aulas foram ministradas pelo mestre <a href="https://github.com/diego3g">Diego Fernandes</a> nas aulas da <strong>Next Level Week</strong>.

## Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/v-rapha/be-the-hero/blob/master/LICENCE) para mais detalhes.

---

Feito com ♥ by [Vinicius Raphael](https://www.linkedin.com/in/vinicius-raphael/)
