import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { HolidaysPage } from './holidays.page';

describe('HolidaysPage', () => {
  let component: HolidaysPage;
  let fixture: ComponentFixture<HolidaysPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidaysPage ],
      imports: [
        IonicModule.forRoot(),
        SharedModule,
        HttpClientTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HolidaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of countriesHolidays defined', () => {
    expect(component.countriesHolidays).toBeTruthy();
  });

  it('should not render an app-country-detail component if list of holidays is empty', () => {
    component.countriesHolidays = [];
    fixture.detectChanges();
    const countryComponent =
      fixture.debugElement.nativeElement.querySelector('app-country-detail');
    expect(countryComponent).toBeFalsy();
  });

  it('should render an app-country-detail component if list of holidays has items', () => {
    component.countriesHolidays = [
      {
        "date": "2022-01-01",
        "name": "New Year's Day",
        "local_name": "New Year's Day",
        "country_code": "GB",
        "regions": [
            "GB-NIR"
        ],
        "types": [
            "Public"
        ]
    }
    ];
    fixture.detectChanges();
    const countryComponent =
      fixture.debugElement.nativeElement.querySelector('app-country-detail');
    expect(countryComponent).toBeTruthy();
  });


});
