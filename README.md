# CarupiTest

## :eyeglasses: Projeto Preview

<iframe src="https://giphy.com/embed/Iu7QQw881yOrTWVqeb" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Iu7QQw881yOrTWVqeb">via GIPHY</a></p>


  Esse sistema foi criado para teste técnico da carupi, desenvolvi um sistema com 2 páginas, home e interna, aonde em um cenário fictício joão consegue ver os jogos mais populares na API Rawg, além de poder, ver detalhes sobre esses jogos, porém coloquei um back-end, junto a um CRUD, para posteriormente o projeto poder ter um lado mais profissional, como um sistema específico para jogos. 


![Badge](https://img.shields.io/badge/Font%20Awesome-4.7.0-blue?style=for-the-badge&logo=appveyor)
![Badge](https://img.shields.io/badge/Axios-0.18.0-%23072000?style=for-the-badge&logo=appveyor)
![Badge](https://img.shields.io/badge/react--router-4.2.0-%23072000?style=for-the-badge&logo=appveyor)
![Badge](https://img.shields.io/badge/react-16.4.0-%23000000?style=for-the-badge&logo=appveyor)
![Badge](https://img.shields.io/badge/Bootstrap-4.1.1-%23000000?style=for-the-badge&logo=appveyor)

## :dart: Objetivo

O objetivo deste projeto é fazer um ambiente fícticio aonde João precisa de um site de jogos com duas páginas (home e interna),

Home: Página com uma listagem dos jogos mais populares.

Interna: Ao clicar num jogo da home o usuário deverá ser direcionado para a interna que mostrará o nome do jogo, foto, categorias, plataformas e desenvolvedor
do jogo.

## :hammer_and_wrench: Ferramentas

-   [Bootstrap](https://getbootstrap.com/)
-   [Styled Components](https://styled-components.com)
-   [Font awesome](https://fontawesome.com/)
-   [Axios](https://axios-http.com/)
-   [Yarn](https://yarnpkg.com/)
-   [Node](https://nodejs.org/en/)
-   [React.js](https://pt-br.reactjs.org/)
-   [React router](https://reactrouter.com/)

## :desktop_computer: O que eu solucionei?

   A ideia do projeto foi inicialmente consumir a API Rawg e mostrar informações de jogos via API, pelo Axios, mas desenvolvi além do pedido ao exercício um banco de dados no Back-end, junto a um CRUD e um sistema de rotas, que pode ser adaptado a um ambiente onde posteriormente possa criar um sistema de login com jogos que o usuário mais gosta, e adicionar, excluir, listar e manipular qualquer dado desse usuário dentro do dashboard, na parte do home, o usuário pode passar o mouse por cima da imagem do jogo e por uma animação será mostrado-lhe informações sobre o jogo.
	Utilizei Bootstrap para facilitar em alguns estilos do site, mas também produzir uma parte do CSS a mão, com a responsabilidade do site, o Axios foi utilizado tanto no Back como no Front-end, criei o site por meio do React, utilizando o create-react-app, e aproveitei e usei alguns React Hooks para enriquecer e facilitar algumas partes do projeto.



## :rocket: Executando o projeto

➡️ **Download do projeto**
```bash
git clone https://github.com/josefernandez159/CarupiTest.git
```
➡️ **Acessando a pasta do projeto parte front-end depois do clone do projeto**
```bash
cd front-end 
```
➡️ **Acessando a pasta do projeto parte back-end depois do clone do projeto**
```bash
cd backend 
```

➡️ **Instalando Dependências**
```bash
yarn install ou npm install
```
➡️ **Iniciando o projeto**
```bash
yarn start  ou npm start
```

// Lembrando que caso queira usar o back-end, terá que inicializalo com npm start na pasta do backend, e também inicializar o front-end, acessando a pasta do front-end e dando npm start.

## :heavy_check_mark: Passos Concluidos 

-   [x] Consumir api Rawg
-   [x] Criar todas as funcionalidades
-   [x] Utilizar hooks, Bootstrap, Axios e create-react-app
-   [x] Criar adcionais como Banco de dados Back-end, routes, sistema crud(funcional)
