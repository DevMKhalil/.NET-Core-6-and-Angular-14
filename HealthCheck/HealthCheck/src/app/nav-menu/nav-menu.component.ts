import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StyleMaterialModule } from '../style-material/style-material.module';

@Component({
  standalone: true,
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  imports: [RouterModule, StyleMaterialModule]
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
