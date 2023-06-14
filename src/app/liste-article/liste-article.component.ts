import { Component } from '@angular/core';
import { service } from '../services-composant/services-data';
import { productsModel } from '../model/model';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.scss']
})
export class ListeArticleComponent {

  produits!: productsModel[];

  constructor(private Service: service) { }
  
  /** Récupère tous les produits présent dans services */
    ngOnInit() {
      this.produits = this.Service.getAllArticleSnaps();
    }

}
