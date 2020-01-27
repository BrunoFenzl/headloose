import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-options',
  templateUrl: './component-options.component.html',
  styleUrls: ['./component-options.component.scss']
})
export class ComponentOptionsComponent implements OnInit {

  @Output()
  editComponent: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  deleteComponent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  editClick(): void {
    this.editComponent.emit('select');
  }

  deleteClick(): void {
    this.deleteComponent.emit('delete');
  }

}
