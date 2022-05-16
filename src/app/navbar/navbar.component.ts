import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  clipboard : Clipboard;

  constructor(private navigator: Router) { }

  ngOnInit(): void {
  }
  
  address = "http://localhost:4200/home";

}
