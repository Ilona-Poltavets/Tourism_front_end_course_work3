import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {City} from "../../City";
import {CityService} from "../../services/city.service";
import {CountryService} from "../../services/country.service";
import {Country} from "../../Country";

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {

  city!: City;
  countries: Country[] = [];
  form: FormGroup = new FormGroup({});

  constructor(private cityServices: CityService, private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl("", Validators.required),
      'description': new FormControl("", Validators.maxLength(255)),
      'popularPlaces': new FormControl(),
      'isCapital': new FormControl(false),
      'founded': new FormControl(),
      'countryId': new FormControl(),
      'photo': new FormControl(),
    })
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    })
  }

  addCity() {
    this.cityServices.addCity({
      id: 0,
      name: this.form.value.name,
      description: this.form.value.description,
      popularPlaces: this.form.value.popularPlaces,
      isCapital: this.form.value.isCapital,
      founded: this.form.value.founded,
      countryId: this.form.value.countryId,
      img: "assets/no_photo.jpg",
    }).subscribe(data => this.cityServices.cities = data);
    document.location.href = "http://localhost:4200/cities";
  }

  isValid(componentName?: string, rule?: string): boolean {
    if (!componentName) {
      return this.form.valid;
    } else {
      const component: AbstractControl = this.form.get(componentName)!;
      if (!rule) {
        return component.valid || component.untouched;
      } else {
        return !component.hasError(rule) || component.untouched;
      }
    }
  }
}
