import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { GreetingsComponent } from './greetings/greetings.component';

const routes: Routes = [
  { path: '', component: LoadingScreenComponent },
  { path: 'greetings', component: GreetingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
