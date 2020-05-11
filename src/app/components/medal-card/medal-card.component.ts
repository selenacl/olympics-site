import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-medal-card',
  templateUrl: './medal-card.component.html',
  styleUrls: ['./medal-card.component.css']
})
export class MedalCardComponent implements OnInit {

  @Input() cardTitle: string = "Bronze Trophies";
  @Input() cardValue: number = 24;
  @Input() cardImg: string = "";
  @Input() footerTitle: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
