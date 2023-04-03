# apiDrivencracy

## :rocket: Rotas

```yml
POST /poll
    - Deve receber pelo body da request, um parâmetro title, contendo o nome da enquete a ser cadastrada e expireAt, 
      contendo a data e hora de expiração da enquete:
    - headers: {}
    - body:{
        title: "Qual a sua linguagem favorita?",
        expireAt: "2022-02-28 01:00" 
      }

```
```yml
GET /poll
    - Retorna a lista de todas as enquetes:
    - headers: {}
    - body:{
        [
          {
            _id: "54759eb3c090d83494e2d222",
            title: "Qual a sua linguagem favorita?",
            expireAt: "2022-02-28 01:00" 
          },
        ]
      }

```
```yml
POST /order
    - Deve receber as informações necessárias para registrar um novo pedido.
    - headers: {}
    - body:{
        "clientId": 1,
        "cakeId": 1,
        "quantity": 2,
        "totalPrice": 26.00
      }

```

```yml
POST /choice
    - Deve receber pelo body da request, um parâmetro title, contendo o nome da opção a ser cadastrada e poolId. 
    - headers: {}
    - body:{
       title: "JavaScript",
       poolId: "54759eb3c090d83494e2d222",
      }

```

```yml
GET /poll/:id/choice
    - Retorna a lista de opções de voto de uma enquete:
    - headers: {}
    - body:{
        [
          {
            _id: "54759eb3c090d83494e2d999",
            title: "Javascript",
            poolId: "54759eb3c090d83494e2d222" 
           },
          {
            _id: "54759eb3c090d83494e2d888",
            title: "Python",
            poolId: "54759eb3c090d83494e2d222"
          },
        ]
      }

```

```yml
POST /choice/:id/vote
    - Não recebe nenhum dado do body da requisição. Deve registrar um voto na opção selecionada.
    - headers: {}
    - body:{}
```

```yml
GET /poll/:id/result
    - Retorna o resultado de uma enquete.
    - headers: {}
    - body:{}
```
