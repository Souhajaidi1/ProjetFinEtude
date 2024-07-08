import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
@Component({
  selector: 'app-add-technical-test',
  templateUrl: './add-technical-test.component.html',
  styleUrls: ['./add-technical-test.component.scss']
})
export class AddTechnicalTestComponent {
  constructor(
    public dialogRef: MatDialogRef<AddTechnicalTestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    // Handle save logic here
    this.dialogRef.close(this.data);
  }
}

