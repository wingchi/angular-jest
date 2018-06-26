import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  forecast: Observable<any>;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.getForecast();
  }

  getForecast() {
    this.forecast = this.weather.currentForecast$().pipe(
      tap(data => console.log(data));
    );
  }

  weatherIcon(icon) {
    const icons = {
      'partly-cloudy-day': 'wi wi-day-cloudy',
      'partly-cloudy-night': 'wi wi-night-alt-cloudy',
      'clear-day': 'wi wi-day-sunny',
      'clear-night': 'wi wi-night-clear',
      'rain': 'wi wi-rain',
      'snow': 'wi wi-snow',
      'sleet': 'we-sleet',
      'wind': 'wi wi-windy',
      'fog': 'wi wi-fog',
      'cloudy': 'wi wi-cloud',
    };
    return icons[icon] || 'wi-day-cloudy';
  }
}
