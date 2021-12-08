import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { CitiesComponent } from './cities/cities.component';
import { AddCountryComponent } from './countries/add-country/add-country.component';
import { CountryComponent } from './countries/country/country.component';
import {CountryRoutingModule} from "./countries/country-routing/country-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditCountryComponent } from './countries/edit-country/edit-country.component';
import { AddCityComponent } from './cities/add-city/add-city.component';
import {CityRoutingModule} from "./cities/city-routing/city-routing.module";
import { EditCityComponent } from './cities/edit-city/edit-city.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    HomeComponent,
    CitiesComponent,
    AddCountryComponent,
    CountryComponent,
    EditCountryComponent,
    AddCityComponent,
    EditCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CityRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
