import {Component, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navArticle: Article [] = [
    {
      title: 'home',
      url: 'http://localhost:4200/'
    },
    {
      title: 'facebook',
      url: 'https://www.facebook.com/'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
