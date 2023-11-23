import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText : string = ''

  searchYourText(event: any) {
    this.searchText = event.target.value
  }

  searchYourText_(event: any) {
    this.searchText = event.target.value
  }

  @Output()
  searchChangedEmitter : EventEmitter<string> = new EventEmitter<string>()

  onSearchChanged() {
    this.searchChangedEmitter.emit(this.searchText)
  }





}
