//makes api requests
//allows to move all of those HTTP requests the app makes into one file that can then be called inside any .component.ts file 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //make HTTP requests  


@Injectable({
  providedIn: 'root'
})

export class WeatherApiService {

  //----implementate din angular-----
  // geoCoordsURL = 'http://api.openweathermap.org/geo/1.0/direct?limit=1&appid=f77221ff9711060bd0cc9778bc441b3b&exclude=id&q=';
  
  // getGeoLoc(location: any): Promise<any>{
  //   return this.http.get(this.geoCoordsURL + location).toPromise();
  // }

  // getForecast(latitude: number, longitude: number): Promise<any>{
  //   return this.http.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&exclude=current,hourly,minutely'
  //     + '&units=metric&appid=f77221ff9711060bd0cc9778bc441b3b'
  //   ).toPromise();
  // }


  //-----implementate din php-----
  getCity(city): Promise<any> {
    return this.http.get<any>('http://127.0.0.1:8000/check/' + city).toPromise();
  }

  getForecast(city): Promise<any>{
    return this.http.get('http://127.0.0.1:8000/forecastFromDB/' + city).toPromise();
  }
  constructor(private http: HttpClient) { 
  }

}
