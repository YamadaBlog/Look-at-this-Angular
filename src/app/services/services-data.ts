import { Injectable } from '@angular/core';
import { productsModel } from '../model/model';

@Injectable({
    providedIn: 'root'
  })

export class service {
  MonTableau: productsModel[] = [
    {
      id: 1,
      nom : 'King des vins',
      contain : 'Familty juice',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/vin1.jpg',
      lien :''
    },
    {
      id: 2,
      nom : 'Juicy Juicy',
      contain : 'Bordeaux',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/vin2.jpg',
      lien :''
    },
    {
      id: 3,
      nom : 'Wow à acheter',
      contain : 'Vin de qualité supérieur de bourgogne',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/vin3.jpg',
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