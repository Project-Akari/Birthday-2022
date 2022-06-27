import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { DialogBoxComponent } from './greetings/dialog-box/dialog-box.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GreetingsComponent,
    DialogBoxComponent,
    LoadingScreenComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
