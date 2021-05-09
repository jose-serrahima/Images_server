import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SectionsComponent } from './sections/sections.component';
import { PrincipalComponent } from './principal/principal.component';
import { FilterPipe } from './filter.pipe'
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    SectionsComponent,
    PrincipalComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
