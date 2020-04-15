import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { SideNavComponent } from './components/dashboard/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './components/dashboard/content/content.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CountryComponent } from './components/country/country.component';
import { CountriesComponent } from './components/countries/countries.component';
import { AthleteComponent } from './components/athlete/athlete.component';
import { AthletesComponent } from './components/athletes/athletes.component';

const appRoutes = [
  { path: '', component: CountryComponent },
  { path: 'country', component: CountryComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'athlete', component: AthleteComponent },
  { path: 'athletes', component: AthletesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    DashboardComponent,
    ContentComponent,
    CountryComponent,
    CountriesComponent,
    AthleteComponent,
    AthletesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
