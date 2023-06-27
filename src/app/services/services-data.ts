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
      nom : 'M. Chapoutier 1999 Le Méal Ermitage  (Hermitage)',
      contain : 'Bordeaux',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/vin2.jpg',
      lien :''
    },
    {
      id: 3,
      nom : 'Colgin 1999 Herb Lamb Vineyard Cabernet Sauvignon (Napa Valley)',
      contain : 'Vin de qualité supérieur de bourgogne',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/vin3.jpg',
      lien :''
    },
    {
      id: 4,
      nom : 'J.L. Chave 1999  Hermitage',
      contain : 'Vin de qualité supérieur de bourgogne',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/vin4.jpg',
      lien :''
    },
    {
      id: 5,
      nom : 'Stag\'s Leap Wine Cellars 1998 SLV Cabernet Sauvignon (Napa Valley)',
      contain : 'Vin de qualité supérieur de bourgogne',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/vin5.jpg',
      lien :''
    },
    {
      id: 6,
      nom : 'Dalla Valle 1999 Maya Red (Napa Valley)',
      contain : 'Vin de qualité supérieur de bourgogne',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/vin6.jpg',
      lien :''
    },
    {
      id: 7,
      nom : 'E. Guigal 1998 La Mouline  (Côte Rôtie)',
      contain : 'Vin de qualité supérieur de bourgogne',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/vin7.jpg',
      lien :''
    },
    {
      id: 8,
      nom : 'Quilceda Creek 1998 Cabernet Sauvignon (Washington)',
      contain : 'Vin de qualité supérieur de bourgogne',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/vin8.jpg',
      lien :''
    },
    {
      id: 9,
      nom : 'E. Guigal 1998 La Turque  (Côte Rôtie)',
      contain : 'Vin de qualité supérieur de bourgogne',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/vin9.jpg',
      lien :''
    },
    {
      id: 10,
      nom : 'Domaine Jean-Michel Gerin 1999 La Landonne  (Côte Rôtie)',
      contain : 'Vin de qualité supérieur de bourgogne',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/vin10.jpg',
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