import { Component, OnInit, inject, signal } from '@angular/core';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { WeatherDetailsComponent } from "./components/weather-details/weather-details.component";
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { Weather } from '../../services/weather';
import { toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-weather-panel',
  imports: [SearchBarComponent, WeatherDetailsComponent, CurrentWeatherComponent],
  templateUrl: './weather-panel.component.html',
  styleUrl: './weather-panel.component.scss'
})
export class WeatherPanelComponent {
  city = signal<string>('')
  weatherService = inject(Weather)
  isLoading = signal<boolean>(false)
  weatherData = signal<any>([])

  constructor() {
    toObservable(this.city).pipe(
      debounceTime(400),
      tap(() => {
        const currentCity = this.city()
        if(currentCity && currentCity.trim().length > 0) {
          this.fetchWeather(currentCity)
        }
      }),
    ).subscribe()
  }

  private fetchWeather(city: string) {
    this.isLoading.set(true)
    this.weatherService.getWeather(city).subscribe({
      next: (res) => {
        this.weatherData.set(res)
        this.isLoading.set(false)
        console.log(res)
      },
      error: (err) => {
        console.log(err)
        this.isLoading.set(false)
      }
    })
  }
}
