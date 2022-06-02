import { SharedModule } from './../../../shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountryDetailComponent } from './country-detail.component';

describe('CountryDetailComponent', () => {
  let component: CountryDetailComponent;
  let fixture: ComponentFixture<CountryDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailComponent ],
      imports: [
        IonicModule.forRoot(),
        SharedModule,
        HttpClientTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryDetailComponent);
    component = fixture.componentInstance;
    component.countryDetail = {
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
    };

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
