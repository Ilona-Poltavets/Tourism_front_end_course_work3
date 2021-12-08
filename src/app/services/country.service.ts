import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Country} from "../Country";

const baseUrl = "http://127.0.0.1:8000"

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  public countries: Country[] = [];

  constructor(private http: HttpClient) {
  }

  private baseUrl = "http://localhost:3000";

  getCountries(): Observable<any> {
    const path = `${this.baseUrl}/countries`
    return this.http.get(path);
  }

  getCountry(id: number): Observable<any> {
    const path = `${this.baseUrl}/countries/${id}`;
    return this.http.get(path);
  }

  addCountry(country: Country): Observable<any> {
    const path = `${this.baseUrl}/countries`
    return this.http.post(path, country);
  }

  editCountry(country: Country): Observable<any> {
    const path = `${this.baseUrl}/countries`
    return this.http.put(path, country);
  }
  deleteCountry(id:number):Observable<any>{
    const path = `${this.baseUrl}/countries/${id}`
    return this.http.delete(path);
  }
}
