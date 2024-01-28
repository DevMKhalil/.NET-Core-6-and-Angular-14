import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StyleMaterialModule } from '../style-material/style-material.module';
import { Observable } from 'rxjs';
import { HealthCheckService, Result } from './health-check.service';

@Component({
  selector: 'app-health-check',
  standalone: true,
  imports: [CommonModule, HttpClientModule, StyleMaterialModule],
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css'],
  providers: [HealthCheckService]
})
export class HealthCheckComponent implements OnInit {

  public result?: Observable<Result | null>;

  onRefresh() {
    this.service.sendClientUpdate();
  }

  constructor(private service: HealthCheckService) {
    this.result = this.service.result;
  }

  ngOnInit(): void {
    this.service.startConnection();
    this.service.addDataListeners();
  }
}
