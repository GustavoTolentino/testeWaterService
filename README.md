Teste técnico da Water Service.

Para iniciar o projeto, siga os seguintes passos:

1. Baixe o projeto e abra a pasta "TESTEWATERSERVICE" com o Visual Studio Code.
2. Abra o Docker e digite no Terminal do Visual Studio os seguintes comandos:
- docker-compose build (irá buildar os containers tanto para o back quanto o front e levará cerca de 2 minutos)
- docker-compose up -d (irá executar os containers criados)
Após executar os comandos listados acima, o backend e frontend estarão rodando nas portas 3000 e 3001 respectivamente.
Node: http://localhost:3000/
React: http://localhost:3001/
(A aplicacao em React pode levar alguns segundos a mais em relacao ao Node, portanto ao executar os containers aguarde com que renderizem a aplicacao)

3. Para enviar um arquivo Excel, clique no botão "Escolha um arquivo" e selecione o arquivo em seu computador.
4. Clique no botão "Enviar" para fazer o envio do arquivo.

Obs: o arquivo Excel a ser inserido deve conter as seguintes colunas: Nome, Sobrenome e Idade.

5. Para visualizar a tabela com os dados inseridos no arquivo, clique no botão "Buscar Pessoas".
6. Caso deseje alterar ou adicionar dados, basta enviar um novo arquivo com as informações atualizadas.


Tecnologias utilizadas:

React.js
Node.js
Express
Docker

Agradeco pela oportunidade de participar deste teste técnico e fico à disposição para quaisquer dúvidas ou esclarecimentos.