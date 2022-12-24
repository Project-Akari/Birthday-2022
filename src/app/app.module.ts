import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { DialogBoxComponent } from './greetings/dialog-box/dialog-box.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { ModalComponent } from './modal/modal.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CharactersComponent } from './characters/characters.component';
import { FormsModule } from '@angular/forms';
import { AssetsLoaderComponent } from './assets-loader/assets-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GreetingsComponent,
    DialogBoxComponent,
    LoadingScreenComponent,
    ModalComponent,
    CharactersComponent,
    AssetsLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
