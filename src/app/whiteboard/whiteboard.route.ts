import { BoardComponent } from './board/board.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: "whiteboard/boards",
          component: BoardComponent,
        }
      ])
    ]
  })
  export class WhiteboardRouteModule {}