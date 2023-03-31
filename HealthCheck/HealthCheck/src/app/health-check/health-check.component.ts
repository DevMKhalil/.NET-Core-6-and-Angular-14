import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StyleMaterialModule } from '../style-material/style-material.module';

@Component({
  selector: 'app-health-check',
  standalone: true,
  imports: [CommonModule, HttpClientModule, StyleMaterialModule],
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css']
})
export class HealthCheckComponent implements OnInit {
  public result?: Result;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Result>(environment.baseUrl + 'api/health').subscribe(res => {
      this.result = res;
    }, err => console.error(err)
    );
  }
}

interface Result {
  checks: Check[];
  totalStatus: string;
  totalResponseTime: number;
}
interface Check {
  name: string;
  responseTime: number;
  status: string;
  description: string;
}
