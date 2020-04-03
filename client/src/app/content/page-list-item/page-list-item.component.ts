import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicPageSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { FormBuilder } from '@angular/forms';
import { slugify } from 'src/app/utils';

@Component({
  selector: 'app-page-list-item',
  templateUrl: './page-list-item.component.html',
  styleUrls: ['./page-list-item.component.scss']
})
export class PageListItemComponent implements OnInit {

  @Input()
  page: DynamicPageSchema;

  @Output()
  deletePage: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  updatePage: EventEmitter<DynamicPageSchema> = new EventEmitter<DynamicPageSchema>();

  public showDelete: boolean;

  public quickEdit = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDelete(): void {
    this.showDelete = !this.showDelete;
  }

  toggleQuickEdit(): void {
    this.quickEdit = !this.quickEdit;
  }

  requestDelete(): void {
    this.deletePage.emit(this.page._id);
  }

  requestUpdate(): void {
    this.updatePage.emit(this.page);
    this.quickEdit = false;
  }

  titleInputChange(evt): void {
    this.page.attributes.title = evt.target.value;
    this.page.attributes.slug = slugify(evt.target.value);
  }
}
