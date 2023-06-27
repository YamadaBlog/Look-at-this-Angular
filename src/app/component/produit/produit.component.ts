import { Component, Input } from '@angular/core';
import { productsModel } from 'src/app/model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent {

  constructor(private router : Router) {}

  @Input() title:any
  @Input() contain:any
  @Input() productModelvariable!: productsModel;
  @Input() image:any

  onViewProduitComp() {
    console.log(this.productModelvariable)
    this.router.navigateByUrl(`/products/detail/${this.productModelvariable.id}`);
    console.log("hey it works")
  }
}
