import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForexConverterComponent } from './forex-converter/forex-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    ForexConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
