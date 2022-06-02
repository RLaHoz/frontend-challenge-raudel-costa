import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListPage } from './pages/countries-list/countries-list.page';
import { HolidaysPage } from './pages/holidays/holidays.page';
import { HomePage } from './pages/index/home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'list',
        component: CountriesListPage,
      },
      {
        path: 'holidays/:code',
        component: HolidaysPage,
      },
      {
        path: '',
        redirectTo:'list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
