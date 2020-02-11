import { DynamicPageSchema, DynamicComponentSchema } from 'src/dynamic-renderer/dynamic-components.interfaces';
import { LoadPageAction, AddPageAction, UpdatePageAction, DeletePageAction, ContentState, AddComponentAction } from '../content/store';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { RowDefaults } from '../content/dynamic-components/row';
import { ColumnDefaults } from '../content/dynamic-components/column';
import { HeadlineDefaults } from '../content/dynamic-components/headline';
import { ParagraphDefaults } from '../content/dynamic-components/paragraph';
import { TextareaDefaults } from '../content/dynamic-components/textarea';
import { TextInputDefaults } from '../content/dynamic-components/text-input';
import { NumberInputDefaults } from '../content/dynamic-components/number-input';
import { SelectDefaults } from '../content/dynamic-components/select';
import { SwitchDefaults } from '../content/dynamic-components/switch';

@Injectable()
export class PageService {

  private comps: { [id: string]: any };

  public get components(): { [id: string]: any } {
    return this.comps;
  }

  constructor(
    private store: Store<ContentState>
  ) {
    this.comps = {
      Row: RowDefaults,
      Column: ColumnDefaults,
      Headline: HeadlineDefaults,
      Paragraph: ParagraphDefaults,
      Textarea: TextareaDefaults,
      'Text Input': TextInputDefaults,
      'Number Input': NumberInputDefaults,
      Select: SelectDefaults,
      Switch: SwitchDefaults,
    };
  }

  loadPage(pageId: string): void {
    this.store.dispatch(new LoadPageAction(pageId));
  }

  addPage(page: DynamicPageSchema): void {
    this.store.dispatch(new AddPageAction(page));
  }

  updatePage(page: DynamicPageSchema): void {
    this.store.dispatch(new UpdatePageAction(page));
  }

  changePageOrder(pageId: string, oldIndex: number, newIndex: number): void {

  }

  deletePage(pageId: string): void {
    if (window.confirm('Are you sure? This can not be undone!')) {
      this.store.dispatch(new DeletePageAction(pageId));
    }
  }

  addComponent(comp: DynamicComponentSchema, parentId: string = null): void {
    this.store.dispatch(new AddComponentAction({
      component: comp,
      parentId,
    }));
  }

  selectComponent(key): void {
    const newComp = new this.components[key]();
    this.addComponent(newComp);
  }
}
