import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  searchText: string = ''
  @ViewChild(ProductListComponent) productListC : ProductListComponent

  setSearchText(value : string) {
    this.searchText = value
  }

}
