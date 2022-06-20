import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { DialogBoxComponent } from './greetings/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent,
    GreetingsComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
