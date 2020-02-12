import { Component, OnInit } from '@angular/core';
import { JsonExporterService } from '../services/json-exporter.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private exportService: JsonExporterService
  ) { }

  ngOnInit() {
  }

  exportContent(): void {
    this.exportService.export();
  }

  importContent(): void {
    this.exportService.export();
  }

}
