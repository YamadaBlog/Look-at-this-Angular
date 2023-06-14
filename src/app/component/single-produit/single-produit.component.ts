import { Component, Input, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { ActivatedRoute} from '@angular/router'
import { service } from 'src/app/services-composant/services-data';
import { productsModel } from 'src/app/model/model';

@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.component.html',
  styleUrls: ['./single-produit.component.scss']
})
export class SingleProduitComponent implements OnInit {

  constructor(private service: service, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const produitId = +this.route.snapshot.params['id'];
    this.productModelvariable = this.service.getProductsById(produitId);
  } 

  @Input() productModelvariable!: productsModel;

  // return directly to skill page
  onBack() {
    this.router.navigate(['/produits']);
  }
}
