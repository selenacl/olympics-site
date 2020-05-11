import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CountryComponent } from './components/country/country.component';
import { CountriesComponent } from './components/countries/countries.component';
import { AthleteComponent } from './components/athlete/athlete.component';
import { AthletesComponent } from './components/athletes/athletes.component';
import { SearchComponent } from './components/dashboard/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SearchService } from './components/dashboard/search/search.service';
import { MedalCardComponent } from './components/medal-card/medal-card.component';
import { MatCardModule } from '@angular/material/card';

const appRoutes = [
  { path: '', redirectTo: '/country', pathMatch: 'full' },
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
    AthletesComponent,
    SearchComponent,
    MedalCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
