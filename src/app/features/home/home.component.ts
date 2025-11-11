import { Component } from '@angular/core';
import { WeatherPanelComponent } from "../weather-panel/weather-panel.component";
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-home',
  imports: [WeatherPanelComponent, IconFieldModule, InputIconModule, InputIcon, IconField, InputTextModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
