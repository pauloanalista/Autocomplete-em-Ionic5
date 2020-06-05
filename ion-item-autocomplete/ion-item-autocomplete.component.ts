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
  @Output() onClear = new EventEmitter<any>();
  
  
  tempoPesquisa: number = 0;
  timerTempoPesquisa: any = null;
  criterioAPesquisar: string = '';
  

  constructor() {

  }

  filtrar(criterio: string) {
    this.onClear.emit(criterio);
    this.digitando = true;
    this.criterioAPesquisar = criterio;

    if (criterio.length < 3) {
      return;
    }

    
    this.tempoPesquisa = 1;

  }

  selecionar(item: any) {
    this.digitando = false;
    this.nomeSelecionado = item.nome;
    
    this.onSelectedItem.emit(item);
  }

  
  onFocus() {
    this.digitando = true;
    this.timerTempoPesquisa = setInterval(() => {
      console.log('this.tempoPesquisa ', this.tempoPesquisa);
      if (this.tempoPesquisa == 0 && this.criterioAPesquisar.length > 3 && this.digitando == true) {
        //Vai pesquisar
        console.log('vai pesquisar => ', this.criterioAPesquisar);
        this.executarFiltro(this.criterioAPesquisar);
        //this.criterioAPesquisar = '';
      }

      this.tempoPesquisa = this.tempoPesquisa - 1;

    }, 1000);
    this.tempoPesquisa = 0;
  }

  executarFiltro(criterio) {
    console.log('executarFiltro digitando=>' + this.digitando);
    
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