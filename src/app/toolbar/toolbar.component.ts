import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDrawerComponent, DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule } from 'devextreme-angular';
import { SharedInterface } from '../shared/interfaces/shared-interfaces';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {


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

  constructor() {
    this.navigation = [
      { id: 1, text: "Products", icon: "product" },
      { id: 2, text: "Sales", icon: "money" },
      { id: 3, text: "Customers", icon: "group" },
      { id: 4, text: "Employees", icon: "card" },
      { id: 5, text: "Reports", icon: "chart" }
    ];
  }


  ngOnInit() {
  }

  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => this.drawer.instance.toggle()
    }
  }];

}
