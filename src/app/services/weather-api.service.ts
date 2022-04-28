//makes http requests
//allows to move all of those HTTP requests the app makes into one file that can then be called inside any .component.ts file 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //make HTTP requests  
import { timeout } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class WeatherApiService {
  //-----implementate din php-----
  getCity(city): Promise<any> {
    return this.http.get<any>('http://127.0.0.1:8000/city/' + city).toPromise();
  }

  getForecast(city): Promise<any>{
    return this.http.get('http://127.0.0.1:8000/forecast/' + city ).toPromise();
  }
  constructor(private http: HttpClient) { 
  }
  
}