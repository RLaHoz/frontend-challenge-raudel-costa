import { HolidaysResponse } from './../../models/holidays';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  baseUrl = 'https://api.m3o.com/v1/holidays/';
  countries = [
    {
        "code": "AR",
        "name": "Argentina"
    },
    {
        "code": "AU",
        "name": "Australia"
    },
    {
        "code": "BR",
        "name": "Brazil"
    },
    {
        "code": "CA",
        "name": "Canada"
    },
    {
        "code": "CH",
        "name": "Switzerland"
    },
    {
        "code": "CL",
        "name": "Chile"
    },
    {
        "code": "CN",
        "name": "China"
    },
    {
        "code": "CO",
        "name": "Colombia"
    },
    {
        "code": "DE",
        "name": "Germany"
    },
    {
        "code": "DK",
        "name": "Denmark"
    },
    {
        "code": "ES",
        "name": "Spain"
    },
    {
        "code": "FR",
        "name": "France"
    },
    {
        "code": "GB",
        "name": "United Kingdom"
    },
    {
        "code": "HU",
        "name": "Hungary"
    },
    {
        "code": "IT",
        "name": "Italy"
    },
    {
        "code": "JP",
        "name": "Japan"
    },
    {
        "code": "KR",
        "name": "South Korea"
    },
    {
        "code": "MX",
        "name": "Mexico"
    },
    {
        "code": "SG",
        "name": "Singapore"
    },
    {
        "code": "US",
        "name": "United States"
    },
    {
        "code": "ZA",
        "name": "South Africa"
    }
  ];

  holidays= [
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
    },
    {
        "date": "2022-01-03",
        "name": "New Year's Day",
        "local_name": "New Year's Day",
        "country_code": "GB",
        "regions": [
            "GB-ENG",
            "GB-WLS"
        ],
        "types": [
            "Public"
        ]
    },
    {
        "date": "2022-01-03",
        "name": "New Year's Day",
        "local_name": "New Year's Day",
        "country_code": "GB",
        "regions": [
            "GB-SCT"
        ],
        "types": [
            "Public"
        ]
    },
    {
        "date": "2022-01-04",
        "name": "New Year's Day",
        "local_name": "New Year's Day",
        "country_code": "GB",
        "regions": [
            "GB-SCT"
        ],
        "types": [
            "Public"
        ]
    },
    {
        "date": "2022-03-17",
        "name": "Saint Patrick's Day",
        "local_name": "Saint Patrick's Day",
        "country_code": "GB",
        "regions": [
            "GB-NIR"
        ],
        "types": [
            "Public"
        ]
    },
    {
        "date": "2022-04-15",
        "name": "Good Friday",
        "local_name": "Good Friday",
        "country_code": "GB",
        "regions": [],
        "types": [
            "Public"
        ]
    },
    {
        "date": "2022-04-18",
        "name": "Easter Monday",
        "local_name": "Easter Monday",
        "country_code": "GB",
        "regions": [
            "GB-ENG",
            "GB-WLS",
            "GB-NIR"
        ],
        "types": [
            "Public"
        ]
    },
    {
        "date": "2022-05-02",
        "name": "Early May Bank Holiday",
        "local_name": "Early May Bank Holiday",
        "country_code": "GB",
        "regions": [],
        "types": [
            "Public"
        ]
    },
    {
        "date": "2022-06-02",
        "name": "Spring Bank Holiday",
        "local_name": "Spring Bank Holiday",
        "country_code": "GB",
        "regions": [],
        "types": [
            "Public"
        ]
    },
    {
        "date": "2022-06-03",
        "name": "Queen’s Platinum Jubilee",
        "local_name": "Queen’s Platinum Jubilee",
        "country_code": "GB",
        "regions": [],
        "types": [
            "Public"
        ]
    },
    {
        "date": "2022-07-12",
        "name": "Battle of the Boyne",
        "local_name": "Battle of the Boyne",
        "country_code": "GB",
        "regions": [
            "GB-NIR"
        ],
        "types": [
            "Public"
        ]
    },
    {
        "date": "2022-08-01",
        "name": "Summer Bank Holiday",
        "local_name": "Summer Bank Holiday",
        "country_code": "GB",
        "regions": [
            "GB-SCT"
        ],
        "types": [
            "Public"
        ]
    },
    {
        "date": "2022-08-29",
        "name": "Summer Bank Holiday",
        "local_name": "Summer Bank Holiday",
        "country_code": "GB",
        "regions": [
            "GB-ENG",
            "GB-WLS",
            "GB-NIR"
        ],
        "types": [
            "Public"
        ]
    },
    {
        "date": "2022-11-30",
        "name": "Saint Andrew's Day",
        "local_name": "Saint Andrew's Day",
        "country_code": "GB",
        "regions": [
            "GB-SCT"
        ],
        "types": [
            "Public"
        ]
    },
    {
        "date": "2022-12-26",
        "name": "St. Stephen's Day",
        "local_name": "Boxing Day",
        "country_code": "GB",
        "regions": [],
        "types": [
            "Public"
        ]
    },
    {
        "date": "2022-12-27",
        "name": "Christmas Day",
        "local_name": "Christmas Day",
        "country_code": "GB",
        "regions": [],
        "types": [
            "Public"
        ]
    }
  ];

  constructor(
    public loadingController: LoadingController,
    private http: HttpClient) { }

  getCountriesList(): Observable<any> {
    const partialUrl = 'Countries';
    return this.http.post(`${this.baseUrl}${partialUrl}`,{});

  }

  getCountryHolidays(code: string): Observable<any> {
    const partialUrl = 'List';
    const currentYear = new Date().getFullYear();
    const searchBy = {
      country_code: code,
      year: currentYear
    }
    return this.http.post(`${this.baseUrl}${partialUrl}`, searchBy);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  async dismiss() {
    this.loadingController.dismiss();
  }

}
