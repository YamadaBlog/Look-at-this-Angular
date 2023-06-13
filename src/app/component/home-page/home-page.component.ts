import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  tableau: any[] = [
    {
      id: 1,
      nom : 'Angular',
      contain : 'Voici un exemple de mes compétences en Angular',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/angular.png',
      lien :''
    },
    {
      id: 2,
      nom : 'Boostrap',
      contain : 'Le site utilise boostrap comme framework pour son style',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/boostsrap.jpg',
      lien :''
    },
    {
      id: 3,
      nom : 'React JS',
      contain : 'Utilisation de React pour des projets personnels',
      text : 'Cliquer pour en apprendre plus',
      image : '../../../assets/Image/react.png',
      lien :''
    }
  ]

}
