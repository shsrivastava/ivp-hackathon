import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DxDrawerComponent, DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule } from 'devextreme-angular';
import { SharedInterface } from '../shared/interfaces/shared-interfaces';
import { NavServiceService } from '../nav-service.service';
import { AddNoteComponent } from '../whiteboard/add-note/add-note.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('appDrawer', { static: false }) appDrawer: ElementRef;

  @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent;
  navigation: SharedInterface.INavMenu[];
  showSubmenuModes: string[] = ['slide', 'expand'];
  positionModes: string[] = ['left', 'right'];
  showModes: string[] = ['push', 'shrink', 'overlap'];
  text: string;
  selectedOpenMode: string = 'shrink';
  selectedPosition: string = 'left';
  selectedRevealMode: string = 'slide';
  elementAttr: any;
  pageHeader: any;
  constructor(public dialog: MatDialog,public navService : NavServiceService) {
    this.navigation = [
      { id: 1, text: "Products", icon: "product" },
      { id: 2, text: "Sales", icon: "money" },
      { id: 3, text: "Customers", icon: "group" },
      { id: 4, text: "Employees", icon: "card" },
      { id: 5, text: "Reports", icon: "chart" }
    ];
  }


  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
  ngOnInit() {

    localStorage.setItem('pageHeader', JSON.stringify("Dashboard"));
    localStorage.setItem('pageHeader', JSON.stringify(1));
    this.pageHeader = JSON.parse(localStorage.getItem('pageHeader'));

    let stickyNoteObj: SharedInterface.IStickyNoteData[] =[]
    localStorage.setItem('stickyNotes', JSON.stringify(stickyNoteObj));

  }

  getHeader() {
    return JSON.parse(localStorage.getItem('pageHeader'));
  }

  getStickyCount() {
    let stickyNotes: SharedInterface.IDialogData[] = JSON.parse(localStorage.getItem('stickyNotes'));
    return stickyNotes.length;
  }
  
  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => this.drawer.instance.toggle()
    }
  }];

  openAddNote() {
    const dialogRef = this.dialog.open(AddNoteComponent, {
      width: '250px',
      data: { pageId: JSON.parse(localStorage.getItem('pageId')) }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }


  navItems: any = [
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: 'dashboard',
      children: [
        {
          displayName: 'Sub-Child',
          iconName: 'no_sim',
          route: 'devfestfl/speakers',
        }
      ]
    },
    {
      displayName: 'Form',
      iconName: 'text_format',
      route: 'add-form',
      children: [
        {
          displayName: 'Sub-child',
          iconName: 'no_sim',
          route: 'add-form',
        }
      ]
    },
    {
      displayName: 'White board',
      iconName: 'developer_board',
      route: 'whiteboard/boards',
      children: [
        {
          displayName: 'Sub-Child',
          iconName: 'no_sim',
          route: 'devfestfl/coming_soon',
        }
      ]
    }
   ];
}
