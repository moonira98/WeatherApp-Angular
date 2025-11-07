import { Component } from '@angular/core';
import { WeatherPanelComponent } from "../weather-panel/weather-panel.component";

@Component({
  selector: 'app-home',
  imports: [WeatherPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
