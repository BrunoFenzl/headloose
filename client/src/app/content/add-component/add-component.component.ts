import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.scss']
})
export class AddComponentComponent implements OnInit {

  @Input()
  label: string;

  @Output()
  add: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.add.emit(null);
  }
}
