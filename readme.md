## APP CADASTRO

### APP.JS

```javaScript

BancoDados.inicializandoBancoDados()
Quadro.inicializandoAplicacao()

```

### CONTROLLES

#### CLASSE ClienteControle
##### MÉTODOS: 

- cadastrarCliente()
- pegarClientes()

---

#### CLASSE CobrancaControle
##### MÉTODOS: 

- cadastrarCobranca()
- pegarCobranca()

---

### MODELS

#### CLASSE Cliente
##### PROPRIEDADES:

```javaScript
this.nome       = nome,
this.cpf        = cpf,
this.telefone   = telefone
```
---

#### CLASSE Cobranca
##### PROPRIEDADES:

```javaScript
this.data       = Cobranca.getData(),
this.descricao  = descricao,
this.valor      = valor,
this.cliente    = cliente,
this.status     = false
```

##### MÉTODOS: 

- getData()
---


#### CLASSE Quadro
##### PROPRIEDADES:

```javaScript
static tgSelect = document.getElementById("cliente") 
static tagLista = document.querySelector(".app__cobrancas")
```

##### MÉTODOS: 

- capturarDados()
- atualizarSelect()
- templateCobrancas()
- inicializandoAplicacao()
---

### BD

#### CLASSE BancoDados
##### PROPRIEDADES:

```javaScript
static db = {
    clientes:[],
    cobrancas:[]
}
```

##### MÉTODOS: 

- post()
- get()
- setLocalStorage()
- getLocalStorage()
- gerarId()
- inicializandoBancoDados()
---



