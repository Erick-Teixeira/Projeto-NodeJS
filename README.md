## Projeto feito em NodeJs com o objetivo de aprender nodejs e algumas de suas bibliotecas e frameworks.

Foi utilizado o gerenciador de pacotes padrão no nodejs, o [_npm(Node Packge Manager\)_](https://www.npmjs.com/).

Você poderá rodar a aplicação em [https://localhost:8081](https://localhost:8081), mas você poderá alterar isso mudando os valores das variáveis host e port no arquivo index.js

### Dependências:
- Todas as dependências estão no arquivo package.json. Você pode instalar elas executando o seguinte comando em seu termial:<br>
``` nmp install ```
-  <span style='background-color:#ffe846;'>Também será necessário estar conectado a banco de dados MySQL local ou remoto (de preferencia a versão 5.7.36 ou superior).</span>

#### A aplicação fica salva em uma tabela chamada de postagens no mysql, mas essa tabela será criada automaticamente após executar a aplicação.


### Módulos usados:

- Express - Foi usado para configurar e definir rotas do servidor.
- Handlebars - Para estruturar melhor o html e css das páginas.
- Sequelize - para configuração e conexão com um banco de dados MySQL.
- Post - modulo que importa os models para a pasta principal do projeto(index.js).

### Rotas

**/** direciona os usuários para o diretório principal do projeto, no qual os registros do banco de dados podem ser visualizados e deletados.

**/cadastro** é a rota em que os usuários podem inserir novos registros através de um formulário e esses dados são mandados para o banco de dados.

**/deletar** essa rota fica disponível quando o usuário deleta um registro do banco de dados através do diretório **/** , logo após o usuário é redirecionado de novo para o diretório **/**.
