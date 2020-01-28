import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {

  @Input()
  public content: string;

  @Input()
  public size: string;

  public id: string;

  constructor() { }

  ngOnInit() {
  }

}
