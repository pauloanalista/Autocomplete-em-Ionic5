import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ion-item-autocomplete',
  templateUrl: './ion-item-autocomplete.component.html',
  styleUrls: ['./ion-item-autocomplete.component.scss'],
})
export class IonItemAutocompleteComponent  {
  //Expoe variavel do pai para o filho
  @Input("label")
  label: string;

  @Input("placeholder")
  placeholder: string;

  @Input("icon")
  icone: string = 'md-locate';

  @Input("collection")
  collection: any[] = [];

  digitando: boolean = false;
  nomeSelecionado: string;
  

  //Expoe a variavel do filho para o pai
  @Output() onFilter = new EventEmitter<any>();
  
  @Output() onSelectedItem = new EventEmitter<any>();
   
  
  tempoPesquisa: number = 0;
  timerTempoPesquisa: any = null;
  criterioAPesquisar: string = '';

  constructor() {

  }

  filtrar(criterio: string) {
    this.digitando = true;

    if (criterio.length < 3) {
      return;
    }

    this.tempoPesquisa = 1;

    this.criterioAPesquisar = criterio;
  }

  selecionar(item: any) {
    this.onSelectedItem.emit(item);
    this.digitando = false;
    this.nomeSelecionado = item.nome;
  }

  
  onFocus() {
    this.digitando = true;
    this.timerTempoPesquisa = setInterval(() => {
      console.log('this.tempoPesquisa ', this.tempoPesquisa);
      if (this.tempoPesquisa == 0 && this.criterioAPesquisar.length > 3 && this.digitando == true) {
        //Vai pesquisar
        console.log('vai pesquisar => ', this.criterioAPesquisar);
        this.executarFiltro(this.criterioAPesquisar);
        this.criterioAPesquisar = '';
      }

      this.tempoPesquisa = this.tempoPesquisa - 1;

    }, 1000);
    this.tempoPesquisa = 0;
  }

  executarFiltro(criterio) {
    this.onFilter.emit(criterio);
  }

  onBlur(){
    setTimeout(() => {
      if (this.digitando==true){
        this.digitando=false;
      }
    }, 1500);

    clearInterval(this.timerTempoPesquisa);
  }
}