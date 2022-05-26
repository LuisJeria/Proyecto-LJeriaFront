import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import { GetAllTablesService } from './service/get-all-tables.service';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetAllTablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
