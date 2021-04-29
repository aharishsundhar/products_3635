import { Component, OnInit } from '@angular/core';
import { ProductaddService } from './productadd.service';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.scss'],
})

export class ProductaddComponent implements OnInit {
    public productlist = {
        name: '',
        price: '',
        quantity: '',
    }

    constructor (
        private productaddService: ProductaddService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.productaddService.GpCreate(this.productlist).subscribe(data => {
            this.productlist.name = ''
 	 	this.productlist.price = ''
 	 	this.productlist.quantity = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}