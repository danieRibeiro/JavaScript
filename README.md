# Esse é um exercício de integração de uma API do Correio.

### Nesse exercício foi utilizado o Bootstrap e JS.

No arquivo index.js houve uma refatoração do código e foi utilizado a Expressão Regular para formatar os valores de entradas no campo CEP.

A integração com a API é feita utilizando o Fetch juntamento com os tratamentos de erro, caso o CEP informado no campo não seja válido, o catch returna uma função(invalidCEP) que apresenta uma mensagem de 'CEP INVÁLIDO'.

O campo CEP é monitorado, toda vez que for tirado o foco de dentro o campo, ele faz uma nova busca, caso os valores inseridos no campo tenha um tamanho menor que 8, é também retornado a função(invalidCEP) e por precaução os campos continuam limpos.
caso o CEP seja digitado corretamente, entra em uma estrutura de condição e faz a formatação do valores do CEP utilizando a Expressão Regular e é apresentado ao usuário, após isso é chamado a função getAPI, que é responsável por pegar as informações na API
o CEP sendo válido, é apresentado uma mensagem de "CEP VÁLIDO" ao usuário.
