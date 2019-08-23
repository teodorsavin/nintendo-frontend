import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from './shared/card-module/card.module';
import { GamesListComponent } from './games/games-list/games-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptors/httpconfig.interceptor';
import { ApiService } from './services/api.service';
import { LandingComponent } from './pages/landing/landing.component';
import { TOASTR_TOKEN, ToastrService } from './services/toastr.service';
import { GameVotesComponent } from './games/game-votes/game-votes.component';

declare let toastr: ToastrService

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    LandingComponent,
    GameVotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    { provide: TOASTR_TOKEN, useValue: toastr },
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
