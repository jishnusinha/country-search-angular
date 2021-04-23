import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CountriesHttpService } from "../countries-http.service";
import { Location } from "@angular/common";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AppInterface } from "../../app/application-interface";

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css'],
  providers: [Location]
})
export class CountryViewComponent implements OnInit {

  public countryInfo: AppInterface[];


  constructor(public route: ActivatedRoute, public router: Router, public countriesHttpService: CountriesHttpService, public location: Location, public spinner: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    let country = this.route.snapshot.paramMap.get("name")
    this.countriesHttpService.getSingleCountryInfo(country).subscribe(
      data => {
        this.countryInfo = data;
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
        console.log(data)

      }, error => {
        console.log(error.errorMessage)
      }
    )
  }


  public goback() {
    this.location.back();
  }

}
