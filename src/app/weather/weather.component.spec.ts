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
});
