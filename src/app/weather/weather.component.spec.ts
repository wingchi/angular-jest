import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import { of } from 'rxjs';

class MockWeatherService {
  currentForecast$(): Observable<any> {
    return of({});
  }
}

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WeatherComponent],
        providers: [{ provide: WeatherService, useClass: MockWeatherService }],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('formatTemperature', () => {
    it('formatTemperature: should round 89.3 down and format it', () => {
      const formattedTemperature = component.formatTemperature(89.3);
      expect(formattedTemperature).toEqual('89\xB0 F');
    });

    it('formatTemperature: should round 89.5 up and format it', () => {
      const formattedTemperature = component.formatTemperature(89.5);
      expect(formattedTemperature).toEqual('90\xB0 F');
    });
  });

  describe('weatherIcon', () => {
    it('should have a default value of "wi wi-day-cloudy"', () => {
      const defaultIcon = component.weatherIcon('unknown');
      expect(defaultIcon).toEqual('wi wi-day-cloudy');
    });
  });
});
