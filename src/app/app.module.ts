import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import {PokemonService} from './services/pokemon.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {LoggedInGuard} from './logged-in.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    PokemonComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PokemonService,
    LoggedInGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
