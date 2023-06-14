import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProduitComponent } from './component/single-produit/single-produit.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';

const routes: Routes = [
  { path: 'produits/:id', component: SingleProduitComponent},
  { path: 'produits', component: ListeArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
