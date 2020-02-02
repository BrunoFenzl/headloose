import { Component, OnInit, Output } from '@angular/core';
import { HeadlineDefaults } from '../dynamic-components/headline';
import { ParagraphDefaults } from '../dynamic-components/paragraph';
import { TextareaDefaults } from '../dynamic-components/textarea';
import { TextInputDefaults } from '../dynamic-components/text-input';
import { NumberInputDefaults } from '../dynamic-components/number-input';
import { SelectDefaults } from '../dynamic-components/select';
import { SwitchDefaults } from '../dynamic-components/switch';
import { RowDefaults } from '../dynamic-components/row';
import { ColumnDefaults } from '../dynamic-components/column';
import { ContentState, ChooseComponentAction } from '../store';
import { Store } from '@ngrx/store';

const components = {
  'Row': RowDefaults,
  'Column': ColumnDefaults,
  'Headline': HeadlineDefaults,
  'Paragraph': ParagraphDefaults,
  'Textarea': TextareaDefaults,
  'Text Input': TextInputDefaults,
  'Number Input': NumberInputDefaults,
  'Select': SelectDefaults,
  'Switch': SwitchDefaults,
};

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.scss']
})
export class ComponentsListComponent implements OnInit {

  @Output()


  public keys: Array<any>;
  private components: { [id: string]: any };

  constructor(
    private store: Store<ContentState>
  ) {
    this.keys = Object.keys(components).filter(el => el !== 'Row' && el !== 'Column');
  }

  ngOnInit() {

  }

  selectComponent(key): void {
    const newComp = new components[key]();
    console.log('newComp', newComp);
    this.store.dispatch(new ChooseComponentAction(newComp));
  }

}
