import {Component, OnInit} from '@angular/core';
import {Country} from "../../Country";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../../services/country.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss']
})
export class EditCountryComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  country: Country = {
    id: 0,
    name: "",
    description: "",
    capital: "",
    currency: "",
    flag: "assets/no_photo.jpg",
  }

  constructor(private countryService: CountryService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const countryId = this.activatedRoute.snapshot.params['id'];
    const elem = this.countryService.getCountry(countryId).subscribe(
      elem => {
        this.country = elem;
        this.form = new FormGroup({
          'name': new FormControl(this.country.name, Validators.required),
          'description': new FormControl(this.country.description, Validators.maxLength(255)),
          'capital': new FormControl(this.country.capital),
          'currency': new FormControl(this.country.currency),
          //'photo':new FormControl("assets/no_photo.jpg"),
        })
      }
    );
  }

  editCountry() {
    this.countryService.editCountry({
      id: this.country.id,
      name: this.form.value.name,
      description: this.form.value.description,
      capital: this.form.value.capital,
      currency: this.form.value.currency,
      flag: this.country.flag,
    }).subscribe(data => this.countryService.countries = data);
    document.location.href = "http://localhost:4200/countries";
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
