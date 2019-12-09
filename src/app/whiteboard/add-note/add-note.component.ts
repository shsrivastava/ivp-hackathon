import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { HomeInterface } from 'src/app/home/shared/interfaces/home-interfaces';
import { SharedInterface } from 'src/app/shared/interfaces/shared-interfaces';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  @Input()
  public pageId: number
  constructor(public dialogRef: MatDialogRef<AddNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SharedInterface.IDialogData,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }
  noteText: FormControl = new FormControl();

  onNoClick(): void {
    this.dialogRef.close();
  }
  addToSticky() {
    debugger;
    let stickyNoteObj: SharedInterface.IStickyNoteData = <SharedInterface.IStickyNoteData>{
      componentName: "mat-card",
      pageId: JSON.parse(localStorage.getItem('pageId')),
      text: this.noteText.value
    }
    let stickyNotes: SharedInterface.IStickyNoteData[] = JSON.parse(localStorage.getItem('stickyNotes'));
    stickyNotes.push(stickyNoteObj);

    localStorage.setItem('stickyNotes', JSON.stringify(stickyNotes));
    this._snackBar.open("Note added successfully", "Ok", {
      duration: 2000,
    });
    this.dialogRef.close();
  }

}
