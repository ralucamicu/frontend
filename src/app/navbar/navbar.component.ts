import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirectHome() {
    this.route.navigateByUrl('/home');
  }

  redirectToWeather() {
    this.route.navigateByUrl('/weather-dashboard');
  }
  
  address = "http://localhost:4200/home";
  showMessage() {
    if (this.address != null) {
      alert("Copied to clipboard!");
    }
  }

}
