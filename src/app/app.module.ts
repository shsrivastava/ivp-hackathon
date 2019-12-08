import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeModule } from './home/home.module';
import { DxDrawerComponent, DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule } from 'devextreme-angular';
import {
  MatCardModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,  
} from "@angular/material";
import { WhiteboardModule } from './whiteboard/whiteboard.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    WhiteboardModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
