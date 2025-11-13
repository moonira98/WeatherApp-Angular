import { Component, Input, inject, model } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  imports: [IconFieldModule, InputIconModule, InputIcon, IconField, InputTextModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  city = model<string>('')
  get intervalCity(): string {
    return this.city()
  }

  set intervalCity(newCity: string) {
    this.city.set(newCity)
  }
}
