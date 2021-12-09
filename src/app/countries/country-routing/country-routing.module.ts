import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CountriesComponent} from "../countries.component";
import {AddCountryComponent} from "../add-country/add-country.component";
import {EditCountryComponent} from "../edit-country/edit-country.component";

const routes: Routes = [
  {path: "", redirectTo: 'countries', pathMatch: "full"},
  {
    path: "countries", component: CountriesComponent,
    children: [
      //{path: "", component: CountriesComponent},
      //{path: ":id", component: CountryComponent},
      {path: "add/new", component: AddCountryComponent},
      {path: "edit/:id", component: EditCountryComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
