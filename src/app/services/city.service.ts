import { Injectable } from '@angular/core';
import {Country} from "../Country";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../City";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  public cities: City[] = [];

  constructor(private http: HttpClient) {
  }

  private baseUrl = "http://localhost:3000";

  getCities(): Observable<any> {
    const path = `${this.baseUrl}/cities`
    return this.http.get(path);
  }

  getCity(id: number): Observable<any> {
    const path = `${this.baseUrl}/cities/${id}`;
    return this.http.get(path);
  }

  addCity(city: City): Observable<any> {
    const path = `${this.baseUrl}/cities`
    return this.http.post(path, city);
  }

  editCity(city: City): Observable<any> {
    const path = `${this.baseUrl}/cities`
    return this.http.put(path, city);
  }
  deleteCity(id:number):Observable<any>{
    const path = `${this.baseUrl}/cities/${id}`
    return this.http.delete(path);
  }
}
