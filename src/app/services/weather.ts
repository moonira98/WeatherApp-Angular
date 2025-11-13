import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Weather {
  http = inject(HttpClient)
  WeatherApi = environment.WEATHER_API
  WeatherKey = environment.WEATHER_KEY


  getWeather(city: string) {
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('lang', 'ru')
      .set('appid', this.WeatherKey)

    return this.http.get(`${this.WeatherApi}`, { params }).pipe(
      catchError(error => {
        const weatherError = error.error
        return throwError(() => {
          weatherError
        })
      })
    )
  }

}
