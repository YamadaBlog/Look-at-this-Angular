import { Injectable } from '@angular/core';
import { productsModel } from '../model/model';

@Injectable({
    providedIn: 'root'
  })

export class service {
    MonTableau: productsModel[] = [
      {
        id: 1,
        nom : '1',
        contain : 'Comp1',
        text : 'Cliquer pour en apprendre plus',
        image : '../../../assets/Image/angular.png',
        lien :''
      },
      {
        id: 2,
        nom : '2',
        contain : 'Comp2',
        text : 'Cliquer pour en apprendre plus',
        image : '../../../assets/Image/boostsrap.jpg',
        lien :''
      },
      {
        id: 3,
        nom : '3',
        contain : 'comp3',
        text : 'Cliquer pour en apprendre plus',
        image : '../../../assets/Image/react.png',
        lien :''
      }
    ]

/** Retrouver dans face snap list  permet de recuperer le tableau d'élément facesnap*/
getAllArticleSnaps(): productsModel[] {
    return this.MonTableau;
}

getProductsById(productsId: number): productsModel {
    const oneProduct = this.MonTableau.find(oneProduct => oneProduct.id === productsId);
    if (oneProduct) {
      return oneProduct;
    } else {
      throw new Error('oneSkill not found!');
    }
  }
}