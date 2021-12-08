import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Country} from "../Country";
import {CityService} from "../services/city.service";
import {City} from "../City";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities: City[] = [];
  selectedId: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private cityService: CityService) {
  }

  ngOnInit(): void {
    this.cityService.getCities().subscribe(data => {
      this.cities = data;
    });
    this.activatedRoute.params.forEach(params => this.selectedId = +params['id']);
  }

  selectElement(countryId: number) {
    this.router.navigate([countryId], {relativeTo: this.activatedRoute});
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
    //let country = this.countryService.getCountry(this.selectedId);
    //this.countryService.deleteCountry(this.selectedId).subscribe();
  }
}
