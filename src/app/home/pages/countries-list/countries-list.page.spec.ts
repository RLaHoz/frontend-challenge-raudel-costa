import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { CountriesListPage } from './countries-list.page';

describe('CountriesListPage', () => {
  let component: CountriesListPage;
  let fixture: ComponentFixture<CountriesListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesListPage ],
      imports: [
        IonicModule.forRoot(),
        SharedModule,
        HttpClientTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of countries defined', () => {
    expect(component.countriesList).toBeTruthy();
  });

  it('should not render a app-country component if list of countries is empty', () => {
    component.countriesList = [];
    fixture.detectChanges();
    const countryComponent =
      fixture.debugElement.nativeElement.querySelector('app-country');
    expect(countryComponent).toBeFalsy();
  });

  it('should render a app-country component if list of countries has items', () => {
    component.countriesList = [
      {
        "code": "AR",
        "name": "Argentina"
    },
    {
        "code": "AU",
        "name": "Australia"
    },
    ];
    fixture.detectChanges();
    const countryComponent =
      fixture.debugElement.nativeElement.querySelector('app-country');
    expect(countryComponent).toBeTruthy();
  });

});
