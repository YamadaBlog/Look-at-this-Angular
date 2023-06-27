import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BOSSRoutingModule } from './boss-routing.module';
import { BossComponent } from './boss.component';
import { ProduitComponent } from '../produit/produit.component';
import { ListeArticleComponent } from '../liste-article/liste-article.component';
import { SingleProduitComponent } from '../single-produit/single-produit.component';



@NgModule({
  declarations: [
    ProduitComponent,
    ListeArticleComponent,
    SingleProduitComponent,
    BossComponent,
  ],
  imports: [
    CommonModule,
    BOSSRoutingModule
  ]
})
export class BOSSModule { }
