### CrudNode

#### Passo a passo
1. Clonar o projeto;
2. executar o comando npm install;
3. configurar o banco de dados, seja local ou remoto;
4. executar app.js

#### Rotas:
* [localhost:3000/registration] post - para registrar um novo usuário.
* [localhost:3000/updateUser] put -para atualizar um usuário.
* [localhost:3000/searchUser] get - para visualizar um usuário em específico.
* [localhost:3000/deleteUser] delete - para deletar um usuário em específico.
* [localhost:3000/api] swagger - documentação da API.

#### Dados para teste:
~~~JSON
{
  "nome":"Matheus Siqueira",
  "senha":"1234",
  "email":"matheusiqueira@mail.com",
  "dataNascimento":"2022-09-19"
}
~~~

