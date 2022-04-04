import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface InfoWeather {
  lat: string;
  lon: string;
  timezone: string;
};

@Component({
  selector: 'app-weather-dialog',
  templateUrl: './weather-dialog.component.html',
  styleUrls: ['./weather-dialog.component.css']
})


export class WeatherDialogComponent implements OnInit {

  public item: InfoWeather;
  public weatherData: any; 
  constructor(
    public dialogRef: MatDialogRef<WeatherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}


  ngOnInit(): void {
    if(this.data){
    this.item = this.data.item ? this.data.item : null;
    }
  }

}
