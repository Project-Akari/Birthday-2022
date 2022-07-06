import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { CharactersComponent } from './characters/characters.component';
import { AssetsLoaderComponent } from './assets-loader/assets-loader.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'assets', component: AssetsLoaderComponent },
  { path: 'greetings', component: GreetingsComponent },
  { path: 'characters', component: CharactersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
