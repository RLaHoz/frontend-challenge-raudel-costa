
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HolidaysResponse } from 'src/app/models/holidays';
import { CoreService } from 'src/app/shared/services/core.service';
import { OperationsService } from 'src/app/shared/services/operations.service';

@Component({
  selector: 'app-holidays',
  templateUrl: 'holidays.page.html',
  styleUrls: ['holidays.page.scss'],
})
export class HolidaysPage implements OnInit, OnDestroy {
  countriesHolidays: any[] = [];
  subscription: Subscription;
  isLoading = true;


  constructor(
    private core: CoreService,
    private operations: OperationsService,
    private route: ActivatedRoute
  ) {}



  ngOnInit(): void {
    this.core.showBackButtons(true);
    this.core.emitChangeTitle('Countries List Holidays');
    const code = this.route.snapshot.paramMap.get('code');
    this.getHolidays(code);
  }

  getHolidays(countryCode: string){
    this.subscription = this.operations.getCountryHolidays(countryCode).subscribe((response: HolidaysResponse) => {
      const { holidays } = response;
      this.countriesHolidays = holidays;
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.core.showBackButtons(false);
    this.subscription.unsubscribe();
  }


}
