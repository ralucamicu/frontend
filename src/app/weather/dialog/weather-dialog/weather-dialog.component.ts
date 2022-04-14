import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InfoWeather } from 'src/app/models/info';

@Component({
  selector: 'app-weather-dialog',
  templateUrl: './weather-dialog.component.html',
  styleUrls: ['./weather-dialog.component.css']
})


export class WeatherDialogComponent implements OnInit {

  public item: InfoWeather;
  public weatherData; 
  public forecast;
  constructor(
    public dialogRef: MatDialogRef<WeatherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}


  ngOnInit(): void {
    if(this.data){
    this.item = this.data.item ? this.data.item : null;
    }
  }

}
