import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { WhiteboardRouteModule } from './whiteboard.route';
import { AddNoteComponent } from './add-note/add-note.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatGridListModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { DxChartComponent, DxChartModule, DxRangeSelectorModule } from 'devextreme-angular';



@NgModule({
  declarations: [BoardComponent, AddNoteComponent],
  imports: [
    WhiteboardRouteModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    DxChartModule,
    DxRangeSelectorModule
  ],
  exports:[AddNoteComponent],
  entryComponents: [AddNoteComponent]
})
export class WhiteboardModule { }
