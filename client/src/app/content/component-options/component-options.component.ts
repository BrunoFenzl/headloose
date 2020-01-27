import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-options',
  templateUrl: './component-options.component.html',
  styleUrls: ['./component-options.component.scss']
})
export class ComponentOptionsComponent implements OnInit {

  @Output()
  public editComponent = new EventEmitter<string>();

  @Output()
  public deleteComponent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  editClick(): void {
    this.editComponent.emit();
  }

  deleteClick(): void {
    this.deleteComponent.emit();
  }

}
