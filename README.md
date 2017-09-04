[Clique aqui para ser redirecionado para o respositório do frontEnd.](https://github.com/pfelipe96/frontEnd-ValeMobi/)

# backend-ValeMobi
Criação do dashBoard para teste de conhecimento

## Client construído com AngularJS v1.6 e Bootstrap v4.0.0, NodeJS e MongoDB (NoSQL).

O principal objetivo na aplicação é pode fazer negociações de mercadorias via WEB. 

Uns dos requisitos do projeto é ter as lacunas, tal como: 

1. Código da Mercadoria,
2. Tipo da Mercadoria,
3. Nome da Mercadoria,
4. Quantidade,
5. Preço, e
6. Tipo do Negócio (Compra ou Venda).

## Como o sistema está rodando:

O sistema está rodando via servidor, pelo DigitalOcean.

## Como o projeto está estruturado:

### A estrutura do Client, segue abaixo:

- index.js - responsável por rodar a estrutura no browser.

- frontEnd-ValeMobi
   - css
      - styles-dashBoard.css - Estilização da plataforma
      - styles-footer.css - Estilização do rodapé
      - styles-header.css - Estilização do cabeçalho
      
   - frameworks
      - bootstrap-4.0.0 - Framework para agilizar a estilização do site
      - font-awesome-4.7.0 - Framework para icon
      - jquery-3.2.1.js - Framework para agilizar os events ou dinâmica do site
     
   - imagens - Armazenamento das fotos.
      
   - javascript
      - app.js - responsável por controlar as views, ou seja, as páginas da web.
      - controllers.js - responsável por controlar o MVC (Model, View, Controller) e APIs.
      - service.js - null
   
   - views - O esqueleto do site.
     - dashBoard.html
     - footer.html
     - header.html
   
   - index.html - O esqueleto principal do site, recebe os demais esqueletos.
   
### A estrutura do backend, segue abaixo:

- app.js - responsável por rodar a estrutura do backend.

- controllers
   - api.js - responsável por controlar o recebimento e o inserimendo do banco de dados via API, e verificar as condições do 
   recebimento de dados do Client.
   
 ### A estrutura do banco de dados está sendo feito via JSON, segue abaixo:

- {
- "_id": hash no mongoDB,
- "cM": Código da mercadoria,
- "tM": Tipo de mercadoria,
- "nM": Nome da mercadoria,
- "pM": Preço da mercadoria,
- "qM": Quantidade da mercadoria,
- "tN": Tipo de negociação,
- "dN": data na negociação
- }

      
 
