import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesListComponent } from './games/games-list/games-list.component';
import { LandingComponent } from './pages/landing/landing.component';
import { GameVotesComponent } from './games/game-votes/game-votes.component';

const routes: Routes = [
  { path: 'list', component: GamesListComponent },
  { path: 'votes', component: GameVotesComponent },
  { path: 'home', component: LandingComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
