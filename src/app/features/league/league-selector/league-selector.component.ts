import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-league-selector',
  templateUrl: './league-selector.component.html',
  styleUrls: ['./league-selector.component.scss'],
})
export class LeagueSelectorComponent {
  @Output() valueChanged = new EventEmitter<string>();
  search(value: string) {
    console.log(value);
    this.valueChanged.emit(value);
  }
}
