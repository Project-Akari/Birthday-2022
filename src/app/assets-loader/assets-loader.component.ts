import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets-loader',
  templateUrl: './assets-loader.component.html',
  styleUrls: ['./assets-loader.component.css']
})
export class AssetsLoaderComponent implements OnInit {
  showLoadingScreen = false;
  constructor() { }

  ngOnInit(): void {
  }
}
