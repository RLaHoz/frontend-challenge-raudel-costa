import { CoreService } from './../../../shared/services/core.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { OperationsService } from 'src/app/shared/services/operations.service';
import { Subscription } from 'rxjs';
import { Countries, CountriesResponse } from 'src/app/models/countries';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-countries-list',
  templateUrl: 'countries-list.page.html',
  styleUrls: ['countries-list.page.scss'],
})
export class CountriesListPage implements OnInit, OnDestroy {
  countriesList:any[] = [];
  subscription: Subscription;
  isLoading = true;

  constructor(
    public loadingController: LoadingController,
    private core: CoreService,
    private operations: OperationsService
  ) {}

  ngOnInit(): void {
    this.core.emitChangeTitle('Countries List');
    this.core.showBackButtons(false);
    this.getAllCountries();
  }

  getAllCountries(){

    this.subscription = this.operations.getCountriesList().subscribe((response:CountriesResponse) => {
      const { countries } = response;
      this.countriesList = countries;
      this.isLoading = false;
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading...',
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
