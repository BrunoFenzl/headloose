import { Component, OnInit, Output } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.scss']
})
export class ComponentsListComponent implements OnInit {

  public keys: Array<any>;

  constructor(
    private pageService: PageService,
  ) {
  }

  ngOnInit() {
    this.keys = Object.keys(this.pageService.components).filter(el => el !== 'Row' && el !== 'Column');
  }

  selectComponent(key): void {
    this.pageService.selectComponent(key);
  }
}
