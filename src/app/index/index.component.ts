import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Description } from '../models/description';

const ELEMENT_DATA : Description [] = [
  {aboutUs: "dummy text 1", aboutWeather : "dummertext1"},
  {aboutUs: "dummy text 2", aboutWeather : "dummertext2"},
  {aboutUs: "dummy text 3", aboutWeather : "dummertext3"},
];

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  displayedInfo: string[] = ['aboutUs', 'aboutWeather'];
  dataSource = ELEMENT_DATA;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  openWeather() {
    this.route.navigateByUrl('/weather-dashboard');
  }

}
