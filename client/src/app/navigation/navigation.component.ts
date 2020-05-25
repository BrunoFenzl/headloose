import { Component, OnInit } from '@angular/core';
import { JsonExporterService } from '../services/json-exporter.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private exportService: JsonExporterService
  ) { }

  ngOnInit() {
  }

  downloadContent(): void {
    this.exportService.export();
  }
}
