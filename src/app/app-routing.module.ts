import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountriesComponent} from "./countries/countries.component";
import {HomeComponent} from "./home/home.component";
import {CitiesComponent} from "./cities/cities.component";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  //{path:"countries",component:CountriesComponent},
  {path:"cities",component:CitiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
