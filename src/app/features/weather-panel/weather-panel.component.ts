import { Component, OnInit, inject, signal } from '@angular/core';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { WeatherDetailsComponent } from "./components/weather-details/weather-details.component";
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { Weather } from '../../services/weather';


@Component({
  selector: 'app-weather-panel',
  imports: [SearchBarComponent, WeatherDetailsComponent, CurrentWeatherComponent],
  templateUrl: './weather-panel.component.html',
  styleUrl: './weather-panel.component.scss'
})
export class WeatherPanelComponent implements OnInit {
 city = signal<string>('')
 weatherService = inject(Weather)
 
  ngOnInit(): void {
   this.getWeather()
 }


 getWeather() {
  if(this.city()) {
     this.weatherService.getWeather(this.city()).subscribe((res) => {
    console.log(res)
  })
  }
 
 }


}
