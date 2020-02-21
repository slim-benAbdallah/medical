import { Component, OnInit } from '@angular/core';
import { faUser, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  faUser = faUser;
  faChevronRight = faChevronRight;
  

  constructor() { }

  ngOnInit(): void {
  }

}
