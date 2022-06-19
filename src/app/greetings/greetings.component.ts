import { Component, OnDestroy, OnInit } from '@angular/core';
import { LAppDelegate } from '@l2d-setup/lappdelegate';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    if (LAppDelegate.getInstance().initialize() == false) {
      return;
    }
    LAppDelegate.getInstance().run();
  }
  ngOnDestroy(): void {
    LAppDelegate.releaseInstance();
  }

}
