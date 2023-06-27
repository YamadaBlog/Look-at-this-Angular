import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeArticleComponent } from '../liste-article/liste-article.component';
import { SingleProduitComponent } from '../single-produit/single-produit.component';

const routes: Routes = [
  {
  path:'',
  component: ListeArticleComponent
  },
  {
    path:'detail/:id',
    component: SingleProduitComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BOSSRoutingModule { }
