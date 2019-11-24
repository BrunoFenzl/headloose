import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {

  @Input()
  public title: string | 'hello world!';

  @Input()
  public size: string | 'h5';

  constructor() {
    this.title = null;
    this.size = 'h5';
  }

  ngOnInit() {}

}
