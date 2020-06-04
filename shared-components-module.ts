import { NgModule } from '@angular/core';

// import { IlcCardCursoComponent } from './ilc-card-curso/ilc-card-curso.component';
// import { IlcCardArtigoComponent } from './ilc-card-artigo/ilc-card-artigo.component';
// import { IlcCardYoutubeComponent } from './ilc-card-youtube/ilc-card-youtube.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
//import { NaoHaDadosComponent } from './nao-ha-dados/nao-ha-dados.component';
//import { FooterLoadingComponent } from './footer-loading/footer-loading.component';
import { IonItemAutocompleteComponent } from './ion-item-autocomplete/ion-item-autocomplete.component';

@NgModule({
  declarations: [
    //NaoHaDadosComponent,
    //FooterLoadingComponent,
    IonItemAutocompleteComponent
  ],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule],
  exports: [
    //NaoHaDadosComponent,
    //FooterLoadingComponent,
    IonItemAutocompleteComponent
    
  ]
})
export class SharedComponentsModule { }
