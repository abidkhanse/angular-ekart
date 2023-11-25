import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText : string = ''

  @Output()
  searchChangedEmitter : EventEmitter<string> = new EventEmitter<string>()

  @ViewChild('searchedText') searchedTextEl : ElementRef

  searchYourText(event: any) {
    this.searchText = event.target.value
  }

  searchYourText_(event: any) {
    this.searchText = event.target.value
  }

  onSearchChanged() {
    this.searchChangedEmitter.emit(this.searchText)
  }

  updateSearchText() {

    this.searchText = this.searchedTextEl.nativeElement.value
    this.onSearchChanged()
    
  }





}
