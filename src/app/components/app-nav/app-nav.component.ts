import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app-nav.component.css'],
})
export class AppNavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
