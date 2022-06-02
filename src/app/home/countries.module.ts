import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryComponent } from './components/country/country.component';
import { HomePage } from './pages/index/home.page';
import { CountriesListPage } from './pages/countries-list/countries-list.page';
import { HolidaysPage } from './pages/holidays/holidays.page';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CountryComponent, CountriesListPage, HolidaysPage, CountryDetailComponent]
})
export class CountriesPageModule {}
