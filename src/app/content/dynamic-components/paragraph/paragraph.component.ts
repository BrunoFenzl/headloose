import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'p',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {
  @Input()
  public content: string;

  public id: string;

  constructor() { }

  ngOnInit() { }

}
