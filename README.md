# Desafio ClubPetro
**Desafio para a vaga de analista de testes**

**Teste automatizados**
Instalando dependências
 - npm i

**Rodando o projeto**
Para executar via navegador web
- npx cypress open 

Para executar via linha de comando
- npx cypress run

**Testes realizados nas APIs públicas do Github**

Link Postman: https://documenter.getpostman.com/view/17430108/U16qGhWD

APIs Diponíveis no link: https://fakerestapi.azurewebsites.net/index.html

Foi realizado três casos de testes:

**CT-01 POST**
 - Cenário : Esperado que envie a postagem com o código 200
 - Descrição : Usei o POST das APIs fakes do Swagger na tabela Books e o resultado foi de sucesso no envio com Status: 200


**CT-02 PUT**
 - Cenário : Esperado que edite a postagem já feita com o código 200
 - Descrição : Usei o PUT das APIs fakes do Swagger na tabela Books e o resultado foi de sucesso no envio com Status: 200

**CT-03 GET**
 - Cenário : Retornar todas as notas ou as mais recentes com o código 200
 - Descrição : Usei o GET das APIs fakes do Swagger na tabela Books e o resultado foi o retorno das notas mais recentes com Status: 200

