import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  readonly WEATHER_URL = 'https://hidden-falls-83164.herokuapp.com/weather';

  constructor(private http: HttpClient) { }

  currentForecast$(): Observable<any> {
    return this.http.get(this.WEATHER_URL).pipe(
      map(response => response['currently'])
    );
  }
}
