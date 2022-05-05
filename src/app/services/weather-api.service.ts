//makes http requests
//allows to move all of those HTTP requests the app makes into one file that can then be called inside any .component.ts file 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //make HTTP requests  


@Injectable({
  providedIn: 'root'
})

export class WeatherApiService {

  getForecast(city): Promise<any> {
    return this.http.get('http://127.0.0.1:8000/forecast/' + city).toPromise();
  }
  constructor(private http: HttpClient) {
  }

}