import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { FindWeatherResponse } from '../models/iweather';
@Injectable({
  providedIn: 'root',
})
export class Weather {
  http = inject(HttpClient)
  WeatherApi = environment.WEATHER_API
  WeatherKey = environment.WEATHER_KEY
  // https://api.openweathermap.org/data/2.5/find?q=Palo+Alto&units=imperial&type=accurate&mode=json&APPID=2e01f961be6784f0bb0c8eef9e261bee
  // https://api.openweathermap.org/data/2.5/find?q=Palo%20Alto&units=imperial&type=accurate&mode=json&APPID=2e01f961be6784f0bb0c8eef9e261bee
  getCities(): Observable<FindWeatherResponse> {
    const params = {
      q: 'dushanbe',
      units:  'imperial',
      type: 'accurate',
      mode: 'json',
      APPID: this.WeatherKey
    }
    return this.http.get<FindWeatherResponse>(`${this.WeatherApi}`,{params})
  }
  
}
