import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  standalone: true,
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css'],
  imports: [CommonModule, HttpClientModule]
})
export class FetchDataComponent implements OnInit {
  public forecasts?: WeatherForecast[];

  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>(environment.baseUrl + 'api/weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
