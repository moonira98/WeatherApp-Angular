import { Component, OnInit, inject } from '@angular/core';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { WeatherDetailsComponent } from "./components/weather-details/weather-details.component";
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { Weather } from '../../services/weather';
import { CityWeather, FindWeatherResponse } from '../../models/iweather';

@Component({
  selector: 'app-weather-panel',
  imports: [SearchBarComponent, WeatherDetailsComponent, CurrentWeatherComponent],
  templateUrl: './weather-panel.component.html',
  styleUrl: './weather-panel.component.scss'
})
export class WeatherPanelComponent  {
  city!: CityWeather[];

  ngOnInit(): void {
   this.getC()
  }
  weatherS = inject(Weather)
 

   getC() {
    this.weatherS.getCities().subscribe((res: FindWeatherResponse ) => {
      this.city = res.list
      console.log(this.city)
    }) 
  
  }

}
