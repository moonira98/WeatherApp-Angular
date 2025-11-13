import { Component, Input } from '@angular/core';
import { CityWeather } from '../../../../models/iweather';

@Component({
  selector: 'app-weather-details',
  imports: [],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss'
})
export class WeatherDetailsComponent {
  @Input() city!: CityWeather[]
}
