import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
// import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {ClipboardModule} from '@angular/cdk/clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherApiService } from './services/weather-api.service';
import { WeatherDialogComponent } from './weather/dialog/weather-dialog/weather-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherDialogComponent,
    WeatherDialogComponent,
    NavbarComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    // MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    ClipboardModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent],
  entryComponents: [WeatherDialogComponent]
})
export class AppModule { }
