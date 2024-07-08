import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'select-interview-type-dialog',
  templateUrl: './SelectInterviewTypeDialog.html',
  styleUrls: ['./SelectInterviewTypeDialog.scss']
})
export class SelectInterviewTypeDialog {
  selectedType: string;

  constructor(
    public dialogRef: MatDialogRef<SelectInterviewTypeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSelect(): void {
    this.dialogRef.close(this.selectedType);
  }
}

