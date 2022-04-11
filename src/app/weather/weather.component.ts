import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
// import { NgForm } from '@angular/forms';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

import { WeatherApiService } from '../services/weather-api.service';
import { WeatherDialogComponent } from './dialog/weather-dialog/weather-dialog.component';


export class Forecast {
  constructor(
    public feelsLikeDay: string,
    public feelsLikeNight: string,
    public sunrise: string,
    public sunset: string,
    public tempMorning: number,
    public tempDay: string,
    public tempEve: string,
    public tempNight: string,
    public tempMax: string,
    public tempMin: string,
    public uvi: string,
    public lat: string,
    public lon: string,
    public timezone: string
  ) { }
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm!: FormGroup; //evrytime i do something on the html form it will do it via weatherSearchForm
  public weatherData: any;              //holds returned weather data, and then displays it using interpolation in HTML.
  public forecast: any;
  public weatherForecast!: Forecast[];
  public errMsg = "";
  public info: any;
  public data: any;

  constructor(
    private formBuilder: FormBuilder,   //creates an instance of form Builder
    private apiService: WeatherApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {                    //runs once at the initialization of a component, executing any logic that i specify needs to run before the component is ready to use.
    this.weatherSearchForm = this.formBuilder.group({
      location: ['', Validators.required],
      latitude: [''],
      longitude: [''],
      lat: [''],
      long: [''],
      name: [''],
      local_names: [''],
      country: ['']

    });

  }

  sendToApi(formValues: any) {
    this.forecast = null;
    // this.apiService.getGeoLoc(formValues.location)
    //   .then(data => {
    //     this.weatherData = data;
    //     const latitude = this.weatherData[0].lat;
    //     const longitude = this.weatherData[0].lon;
    //     if (Number(formValues.location)) {

    //     }
    //     return this.apiService.getForecast(latitude, longitude);
    //   })
    //   .then(data => {
    //     this.forecast = data;
    //     console.log('forecast', this.forecast);
    //   })
    //   .catch(e => {
    //     this.errMsg = "Enter a valid city";
    //     e = this.errMsg;
    //     return e;
    //   });

    this.apiService.getCity(formValues.location)
      .then(data => {
        this.weatherData = data;
        const latitude = this.weatherData[0].lat;
        const longitude = this.weatherData[0].lon;
        return this.apiService.getDummyForecast(latitude, longitude);
      })
      .then(data => {
        this.forecast = data;
        console.log('forecast', this.forecast);
      })
      .catch(e => {
        this.errMsg = "Enter a valid city";
        e = this.errMsg;
        return e;
      });
  }

  formatTemperature(t: number) {
    return Math.round(t);
  }

  openDialog() {
    let info = {
      lat: this.forecast?.lat,
      lon: this.forecast?.lon,
      timezone: this.forecast?.timezone,
    };

    this.dialog.open(WeatherDialogComponent, {
      data: {
        item: info
      }
    });
  }

}
