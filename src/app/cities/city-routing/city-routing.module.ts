import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CountriesComponent} from "../../countries/countries.component";
import {CountryComponent} from "../../countries/country/country.component";
import {EditCountryComponent} from "../../countries/edit-country/edit-country.component";
import {CitiesComponent} from "../cities.component";
import {AddCityComponent} from "../add-city/add-city.component";
import {EditCityComponent} from "../edit-city/edit-city.component";

const routes: Routes = [
  {path: "", redirectTo: 'cities', pathMatch: "full"},
  {
    path: "cities", component: CitiesComponent,
    children: [
      {path: "", component: CitiesComponent},
      //{path: ":id", component: CountryComponent},
      {path: "add/new", component: AddCityComponent},
      {path: "edit/:id", component: EditCityComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
