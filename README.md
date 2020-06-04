# Autocomplete-em-Ionic5
Autocomplete criado em Ionic 5

## Como usar

### No home.html
No evento onFilter você recebe a palavra digitada dentro do componente, ele possui uma inteligencia de aguardar o usuário terminar de digitar para pesquisar, assim evitamos de fazer muitas requisições no banco de dados sem necessidade!

no evento onSelectedItem é retornado o objeto selecionado pelo usuário

Collection fornecemos a lista que desejamos apresentar no componente, é obrigatório existir uma propriedade chamada nome dentro da lista.

Label é o nome da label que deverá ser apresentada na tela
```html
<ion-item-autocomplete label="Cliente" (onSelectedItem)="onSelectedItem($event)" (onFilter)="onFilter($event)" [collection]="clienteCollection"></ion-item-autocomplete>
```

### No home.ts
```javascript
onFilter(eventCriterio){
    //Filta no banco de dados o critério pesquisado
    this.loading = true;
    this.clienteService.listarPor(eventCriterio)
      .then((response: any) => {
        this.loading = false;
        this.clienteCollection = response.data;
      })
      .catch((erro) => {
        this.loading = false;
        console.log(erro);
      }).finally(() => {
        //this.utilService.hideLoading();
      });

  }

  onSelectedItem(eventSelectedItem){
    //Retornar o objeto selecionado dentro do componente
    console.log(eventSelectedItem);
  }
```
## Veja um exemplo do componente funcionando
![](https://github.com/pauloanalista/Autocomplete-em-Ionic5/blob/master/tela.gif)
