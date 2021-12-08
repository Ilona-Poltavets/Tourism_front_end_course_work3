import {Component, OnInit} from '@angular/core';
import {City} from "../../City";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CityService} from "../../services/city.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.scss']
})
export class EditCityComponent implements OnInit {
  city!: City;
  form: FormGroup = new FormGroup({});

  constructor(private cityServices: CityService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const countryId = this.activatedRoute.snapshot.params['id'];
    const elem = this.cityServices.getCity(countryId).subscribe(
      elem => {
        this.city = elem;
        this.form = new FormGroup({
            'name': new FormControl(this.city.name, Validators.required),
            'description': new FormControl(this.city.description, Validators.maxLength(255)),
            'popularPlaces': new FormControl(this.city.popularPlaces),
            'isCapital': new FormControl(this.city.isCapital),
            'founded': new FormControl(this.city.founded),
            'countryId': new FormControl(this.city.countryId),
            //'photo': new FormControl(),
          }
        );
      })
  }

  editCity() {
    console.log(this.city)
    this.cityServices.editCity({
      id:this.city.id,
      name:this.form.value.name,
      description:this.form.value.description,
      popularPlaces:this.form.value.popularPlaces,
      isCapital:this.form.value.isCapital,
      founded:this.form.value.founded,
      countryId:this.form.value.countryId,
      img:this.form.value.img,
    })
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
