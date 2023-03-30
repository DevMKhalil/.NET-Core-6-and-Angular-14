import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, NavMenuComponent, FetchDataComponent, RouterModule]
})
export class AppComponent {
  title = 'HealthCheck';
}
