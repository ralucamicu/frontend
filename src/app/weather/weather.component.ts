import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

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
    this.apiService.getForecast(formValues.location)
      .then(data => {
        this.weatherData = data;
        console.log('city', data.city[0]);
        console.log('forecast', data.forecast);
        // console.log('a', data.forecast['daily'][0]['temp']['morn']);
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
      lat: this.weatherData?.forecast?.lat,
      lon: this.weatherData?.forecast?.lon,
      timezone: this.weatherData?.forecast?.timezone,
      tz_offset: this.weatherData?.forecast?.timezone_offset,
      country: this.weatherData?.city[0]?.country,
      local_name_hu: this.weatherData?.city[0]?.local_names.hu,
      local_name_ru: this.weatherData?.city[0]?.local_names.ru,
      local_name_de: this.weatherData?.city[0]?.local_names.de,
      local_name_fr: this.weatherData?.city[0]?.local_names.fr,
      name: this.weatherData?.name
    };

    this.dialog.open(WeatherDialogComponent, {
      data: {
        item: info
      }
    });
  }

}
