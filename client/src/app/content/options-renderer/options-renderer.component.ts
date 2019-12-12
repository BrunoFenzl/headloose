import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-options-renderer',
  templateUrl: './options-renderer.component.html',
  styleUrls: ['./options-renderer.component.scss']
})
export class OptionsRendererComponent implements OnInit {

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({});
  }

  ngOnInit() {
  }

}
