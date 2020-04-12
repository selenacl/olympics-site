import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Output() redirect = new EventEmitter<string>();

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onClick(link: string) {
    this.redirect.emit(link);
    this.location.replaceState(`/${link}`);
  }

}
