import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Country} from "../Country";
import {CityService} from "../services/city.service";
import {City} from "../City";
import {CountryService} from "../services/country.service";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities: City[] = [];
  countries: Country[] = [];
  selectedId: number = 0;
  selectedCountry!: Country;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private cityService: CityService, private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.cityService.getCities().subscribe(data => {
      this.cities = data;
    });
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    })
    this.activatedRoute.params.forEach(params => this.selectedId = +params['id']);
  }

  selectElement(countryId: number) {
    //this.router.navigate([countryId], {relativeTo: this.activatedRoute});
    this.selectedId = countryId;
  }

  addCity() {
    this.router.navigate(["add/new"], {relativeTo: this.activatedRoute});
  }

  editCity() {
    this.router.navigate(
      ["edit/", this.selectedId],
      {relativeTo: this.activatedRoute}
    );
  }

  deleteCity() {
    this.cityService.deleteCity(this.selectedId).subscribe();
    document.location.href = "http://localhost:4200/cities";
  }
}
