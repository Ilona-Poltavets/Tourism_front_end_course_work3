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

  country: Country={
    id:0,
    name:"",
    description:"",
    capital:"",
    currency:"",
    flag:"assets/no_photo.jpg",
  }

  constructor(private countryService: CountryService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const countryId = this.activatedRoute.snapshot.params['id'];
    const elem=this.countryService.getCountry(countryId).subscribe(
      elem=>{
        this.country.id=elem.id;
        this.country.name=elem.name;
        this.country.description=elem.description;
        this.country.capital=elem.capital;
        this.country.currency=elem.currency;
        this.country.flag=elem.flag;
      }
    );
  }

  editCountry(form:any) {
    this.countryService.editCountry(
      this.country).subscribe(
        data=>this.countryService.countries=data
    )
  }
}
