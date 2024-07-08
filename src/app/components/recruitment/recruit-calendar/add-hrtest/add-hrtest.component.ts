import { Component, Inject } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecruitCalendarService } from 'app/services/recruitement/recruit-calendar/recruit-calendar.service';
export interface HRTest{
  idHRTest: number;
  date: Date;
  Hour: Date ;
  duration: number ;
  type: string ;
}
@Component({
  selector: 'app-add-hrtest',
  templateUrl: './add-hrtest.component.html',
  styleUrls: ['./add-hrtest.component.scss']
})

export class AddHRTestComponent {
  hrTest : FormGroup;
  idHRTest: number;
  date: Date;
  Hour: Date ;
  duration: number ;
  type: string ;
  constructor(
    private fb: FormBuilder,
    private recruitservice: RecruitCalendarService,
    public dialogRef: MatDialogRef<AddHRTestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.hrTest = this.fb.group({
      idHRTest:[data.idHRTest, Validators.required],
      date:[data.date, Validators.required],
      Hour:[data.Hour, Validators.required],
      duration:[data.duration, Validators.required],
      type:[data.type, Validators.required],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.hrTest.valid) {
      this.recruitservice.AddHRTest(this.hrTest.value).subscribe(
        (res) => {
          console.log('Form Submitted', res);
          this.dialogRef.close(res);
        },
        (error) => {
          console.error('Error saving test', error);
        }
      );
    }
  }
}

