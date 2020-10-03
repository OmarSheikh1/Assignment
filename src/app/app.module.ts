import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { CasedetailsComponent } from './modules/casedetails/casedetails.component';
import { MatCardModule } from '@angular/material/card';
import { CasesListComponent } from './modules/cases-list/cases-list.component';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    CasesListComponent,
    CasedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
