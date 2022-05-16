import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Description } from '../models/description';

const ELEMENT_DATA : Description [] = [
  {aboutUs: "We are a small team o developers devoted to keep the user inform and to give it the chance to inform itself starting from the smallest thing, like knowing the weather from all around the world.", 
    aboutWeather : "Weather is the state of the atmosphere at a specific time and place, with respect to temperature, precipitation, and other factors such as cloudiness.", 
    aboutTheApp : "The idea started when we saw the motivation that predicting weather is not that accurate these days"
  },
  {aboutUs: "We belive that technology is here to inspire and to create a more confortable and more educated about the world around us life.", 
    aboutWeather : "Professional forecasters have a wide variety of other tools. Weather stations scattered around the globe allow them to make detailed weather maps, as do satellites" + 
    "which allow forecasters to see what is happening far out to sea, where there are no weather stations. Weather balloons and radar also contribute.", 
    aboutTheApp : "So we put our minds to work and started developing, putting our best satelites and equipement to work"
  },
  {aboutUs: "If you enjoy the app, please leave a rating and share with friends and family. Feel free to support us at www.24hsupport.com",
    aboutWeather : "Most weather forecasters believe that accurate forecasting more than two weeks into the future will always be impossible. Today, anything beyond five to seven" +
    "days involves substantial guesswork and is often wrong.", 
    aboutTheApp : "There is a lot of place for improvement, so let us know where to get better."
  },
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
