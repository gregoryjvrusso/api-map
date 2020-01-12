# API MAP

Desenvolvimento do teste do Gregory Russo para vaga de desenvolvedor front end na Magazine Luiza.

## Desenvolvimento

Por conta do pouco tempo disponível para desenvolvimento, optou-se pela escolha do CRA (Create React App) para criação da estrutura do React.

Com isso criou-se automaticamente todo o sistema de build com alguns pontos de otimização de performance da plataforma.

## Utilizar em ambiente local

Para testar a utilização da plataforma deve-se clonar o projeto no seu computador e utilizar os comandos na ordem:

```npm install``` 

```npm start```

## Utilizar em ambiente de produção

Utilizar o site [ApiMap](https://api-map-test.netlify.com/) 

## Realizar testes 

Para realizar os testes deve-se clonar o repositório no seu computador e utilizar os seguintes comandos na ordem:

```npm install```

```npm test```

## Decisões

### styled-components

* Utilizou-se por styled components para modular tanto o HTMK dos components quanto o CSS no mesmo local, assim, organizando centralizando todos as responsabilidades do componente no mesmo local, além de poder utilizar `props` para alterar o CSS do componente.

### styled-system

* Utilizou-se por styled-system para passar os valores de algumas propriedades CSS no momento da chamada do componente, assim, criando um componente mais agnóstico e adaptável as várias necessidades que o sistema possa a ter.

### styled-tools

* Optou-se por styled-tools para a utilização do Theme, centralizando assim todas as decisões de paletas de cores que o UX possa tomar, além da utilização de IfProps que junto com o styled-components torna mais legível as possíveis escolhas de layout que um componente possa ter.

### react-geocode

* Módulo para passar o CEP na API do Google GeoCode e retornar as localizações de Latitude e Longitude. Optou-se por utilizar pela fácil implementação, constante utilização da comunidade e baixo impacto na performance do sistema.

### google-maps-react

* Módulo para integrar a plataforma com a API do Google Maps, utilizou-se pela fácil implementação, flexibilização na configuração, constante utilização da comunidade e baixo impacto na performance do sistema.



