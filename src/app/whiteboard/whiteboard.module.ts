import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { WhiteboardRouteModule } from './whiteboard.route';



@NgModule({
  declarations: [BoardComponent],
  imports: [
    WhiteboardRouteModule,
    CommonModule,
  ]
})
export class WhiteboardModule { }
