import { Component, Input, inject } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { Weather } from '../../../../services/weather';
import { CityWeather, FindWeatherResponse, MainWeather } from '../../../../models/iweather';

@Component({
  selector: 'app-search-bar',
  imports: [IconFieldModule, InputIconModule, InputIcon, IconField, InputTextModule ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input() city!: CityWeather[]
}
