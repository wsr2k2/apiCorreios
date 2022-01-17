# Api para consultar endereço na base dos Correios

Esta API consiste em buscar endereços no bando de dados dos Correios informando apenas o número do CEP.

Lembrando que o conteúdo esperado deve ser conforme abaixo:

```javascript
{
    "cep": "00000000"
}
```



Para a correta utilização dessa API, basta clonar o diretório desse projeto em sua máquina, instalar as dependencias com o comando ``yarn install`` e após a instalação das mesmas, inicializar a aplicação com o comando ``yarn start``

Para realizar as consultas utilizamos um API Client, em nossa aplicação utilizamos o Thunder Client, por ser uma extensão do próprio VS Code e assim facilitando os testes.

O endereço para realizar a requisição será: ``localhost:3000/cep`` utilizando da estrutura .json onde será passado o CEP desejado para consultar, conforme imagem abaixo:

![alt consultaCep]()

