import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productList$: BehaviorSubject<Product[]> = this.productService.productsList$;

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getAll();
  }

  onClickDelete(id: number): void {
    this.productService.remove(id).subscribe(
      () => this.productService.getAll(),
      error => console.error(error)
    );
  }

}