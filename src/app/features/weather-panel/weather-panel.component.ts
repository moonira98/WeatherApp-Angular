import { Component } from '@angular/core';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { WeatherDetailsComponent } from "./components/weather-details/weather-details.component";
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';

@Component({
  selector: 'app-weather-panel',
  imports: [SearchBarComponent, WeatherDetailsComponent, CurrentWeatherComponent],
  templateUrl: './weather-panel.component.html',
  styleUrl: './weather-panel.component.scss'
})
export class WeatherPanelComponent {

}
