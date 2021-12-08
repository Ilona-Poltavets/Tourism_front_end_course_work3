import {Component, OnInit} from '@angular/core';
import {CountryService} from "../services/country.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Country} from "../Country";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries: Country[] = [];
  selectedId: number = 0;

  constructor(private countryService: CountryService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
    this.activatedRoute.params.forEach(params => this.selectedId = +params['id']);
  }

  selectElement(countryId: number) {
    this.router.navigate([countryId], {relativeTo: this.activatedRoute});
    this.selectedId = countryId;
  }

  addCountry() {
    this.router.navigate(["add/new"], {relativeTo: this.activatedRoute});
  }

  editCountry() {
    this.router.navigate(
      ["edit/", this.selectedId],
      {relativeTo: this.activatedRoute}
    );
  }

  deleteCountry() {
    let country = this.countryService.getCountry(this.selectedId);
    this.countryService.deleteCountry(this.selectedId).subscribe();
  }
}
