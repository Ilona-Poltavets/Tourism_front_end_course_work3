import { Component, OnInit } from '@angular/core';
import {Country} from "../../Country";
import {CountryService} from "../../services/country.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {

  country!:Country;
  form: FormGroup = new FormGroup({});

  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      'name':new FormControl("",Validators.required),
      'description':new FormControl("",Validators.maxLength(255)),
      'capital':new FormControl(),
      'currency':new FormControl(),
      'photo':new FormControl("assets/no_photo.jpg"),
    })
  }

  addCountry(){
    this.countryService.addCountry({
      id:0,
      name:this.form.value.name,
      description:this.form.value.description,
      capital:this.form.value.capital,
      currency:this.form.value.currency,
      flag:this.form.value.photo,
    }).subscribe(data=>this.countryService.countries=data);
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
