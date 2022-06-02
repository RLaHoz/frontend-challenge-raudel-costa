import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';

import { CountryComponent } from './country.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryComponent ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    component.country = 'AU';
    component.id= 1;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to holidays page when clicking country', () => {
    const card =
      fixture.debugElement.nativeElement.querySelector('ion-card');

    card.click();
    fixture.detectChanges();
    const location: Location = TestBed.inject(Location);
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/holidays/AU');
    });
  });

});
