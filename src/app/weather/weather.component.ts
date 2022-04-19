import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

import { WeatherApiService } from '../services/weather-api.service';
import { WeatherDialogComponent } from './dialog/weather-dialog/weather-dialog.component';
import { Forecast } from '../models/forecast';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm!: FormGroup; //evrytime i do something on the html form it will do it via weatherSearchForm
  public weatherData;              //holds returned weather data, and then displays it using interpolation in HTML.
  public forecast;
  public weatherForecast!: Forecast[];
  public errMsg = "";
  public info;
  public data;

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

  sendToApi(formValues) {
    this.forecast = null;
    this.apiService.getCity(formValues.location)
      .then(data => {
        this.weatherData = data;
        this.forecast = this.weatherData;
        const city = this.weatherData[0].name;
        const latitude = this.weatherData[0].lat;
        const longitude = this.weatherData[0].lon;
        this.apiService.getForecast(city)
          .then(data => {
            this.forecast = data;
            console.log('forecast', this.forecast);
            if (Number(formValues.location)) {}
          })
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
      tz_offset: this.forecast?.timezone_offset,
      country: this.weatherData[0]?.country,
      local_name_hu: this.weatherData[0]?.local_names.hu,
      local_name_ru: this.weatherData[0]?.local_names.ru,
      local_name_de: this.weatherData[0]?.local_names.de,
      local_name_fr: this.weatherData[0]?.local_names.fr,
      name: this.weatherData[0]?.name
    };

    this.dialog.open(WeatherDialogComponent, {
      data: {
        item: info
      }
    });
  }

}
