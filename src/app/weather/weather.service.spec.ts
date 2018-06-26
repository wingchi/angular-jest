import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let httpMock: HttpTestingController;
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });
  });

  beforeEach(
    inject([WeatherService, HttpTestingController], (_service, _httpMock) => {
      service = _service;
      httpMock = _httpMock;
    }),
  );

  it(
    'should be created',
    inject([WeatherService], (service: WeatherService) => {
      expect(service).toBeTruthy();
    }),
  );

  it('currentForecast$: should return the current forecast data', () => {
    const mockWeather = {
      latitude: 29.7604,
      longitude: -95.3698,
      timezone: 'America/Chicago',
      currently: {
        time: 1529987623,
        summary: 'Humid',
        icon: 'clear-night',
        temperature: 90.01,
      },
    };

    service.currentForecast$().subscribe(data => {
      expect(data.time).toEqual(1529987623);
      expect(data.summary).toEqual('Humid');
      expect(data.icon).toEqual('clear-night');
      expect(data.temperature).toEqual(90.01);
    });

    const req = httpMock.expectOne(
      'https://hidden-falls-83164.herokuapp.com/weather',
    );

    req.flush(mockWeather);
    httpMock.verify();
  });
});
