import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Input()
  all : number = 0
  
  @Input()
  inStock : number = 0
  
  @Input()
  outOfStock : number = 0

  selectedValue : string = 'all'

  @Output()
  selectedValueEmitter: EventEmitter<string> = new EventEmitter<string>();

  onSelectedRadioButtonChanged() {

    this.selectedValueEmitter.emit(this.selectedValue)
  
  }

  
}
