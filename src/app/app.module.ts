import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeModule } from './home/home.module';
import { DxDrawerComponent, DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule } from 'devextreme-angular';
import {
  MatCardModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatTooltipModule, MatChipsModule, MatBadgeModule,  
} from "@angular/material";
import { WhiteboardModule } from './whiteboard/whiteboard.module';
import { HttpClientModule } from '@angular/common/http';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NavServiceService } from './nav-service.service';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TopNavComponent,
    MenuListItemComponent
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
    MatTooltipModule,
    MatChipsModule,
    HttpClientModule,MatBadgeModule
  ],
  providers: [NavServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
