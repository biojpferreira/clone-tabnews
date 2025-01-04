# clone-tabnews

Projeto clone do site tabnews.com.br

### Tecnologias utilizadas

- HTML5

- CSS3

- JavaScript

- NVM

- Node.js

- react

- react-dom

- next

### Preparação de ambiente

---

#### NVM

Node Version Manager

- Instale o NVM em seu sistema operacional: https://github.com/nvm-sh/n
- Verifique a versão do Node.js instalada: `nvm --version`
- Instale a versão do Node.js: `nvm install lts/hydrogen`
- Definir a versão default do Node.js: `nvm alias default lts/hydrogen`
- Verifique a versão do Node.js: `node -v`

#### NPM

Node Package Manager

- Inicie o NPM: `npm init`
- Instale as dependências necessárias:
  - `npm install next@13.1.6`
  - `npm install react@18.2.0`
  - `npm install react-dom@18.2.0`

### Estrutura do projeto

---

O Next identifica qualquer arquivo dentro da pasta pages como uma rota, no caso index.js se torna meusite.com.br/

O mesmo vale para sub diretórios exemplo

- Pages
  - produtos
    - index.js -----------> site.com/produtos
  - index.js ---------------> site.com/
  - recuperar-senha.js ---> site.com/recuperar-senha
  - sobre.js --------------> site.com/sobre
