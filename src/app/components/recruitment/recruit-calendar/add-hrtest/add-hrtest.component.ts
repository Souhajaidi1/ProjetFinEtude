import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecruitCalendarService } from 'app/services/recruitement/recruit-calendar/recruit-calendar.service';

export interface HRTest {
  id: number;
  interviewdate: Date;
  hour: string;
  duration: string;
  type: string;
}

@Component({
  selector: 'app-add-hrtest',
  templateUrl: './add-hrtest.component.html',
  styleUrls: ['./add-hrtest.component.scss']
})

export class AddHRTestComponent {
  hrTest: FormGroup;
  idHRTest: number;
  interviewdate: any;
  hour: Date;
  duration: number;
  modality: string;

  constructor(
    private fb: FormBuilder,
    private recruitservice: RecruitCalendarService,
    public dialogRef: MatDialogRef<AddHRTestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.hrTest = this.fb.group({
      interviewdate: [data.date, Validators.required],
      hour: [data.Hour, Validators.required],
      duration: [data.duration, Validators.required],
      type: [data.type, Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    const formValue = this.hrTest.value;

    // Créer une nouvelle instance de Date avec la valeur de interviewdate
    const interviewDatee = new Date(formValue.interviewdate);

    // Décomposer l'heure en heures, minutes, et secondes (si nécessaire)
    const [hour, minute, second] = formValue.hour.split(':').map(Number);

    // Définir l'heure, les minutes, et les secondes dans l'instance de Date créée
    interviewDatee.setHours(hour);
    interviewDatee.setMinutes(minute);
    interviewDatee.setSeconds(second || 0);

    // Formater la date et l'heure combinées en une chaîne ISO 8601 sans la partie Z (timezone)
    const combinedDateTime = `${interviewDatee.getFullYear()}-${('0' + (interviewDatee.getMonth() + 1)).slice(-2)}-${('0' + interviewDatee.getDate()).slice(-2)}T${('0' + interviewDatee.getHours()).slice(-2)}:${('0' + interviewDatee.getMinutes()).slice(-2)}:${('0' + interviewDatee.getSeconds()).slice(-2)}`;
console.log(combinedDateTime)
    // Créer l'objet data à envoyer au service
    const data = {
      interviewdate: formValue.interviewdate,
      duration: formValue.duration,
      modality: formValue.type,
      hour: combinedDateTime // Utiliser la chaîne combinée date + heure
    };

    console.log(data);

    if (this.hrTest.valid) {
      this.recruitservice.AddHRTest(data).subscribe(
        (res) => {
          console.log('Form Submitted', res);
          location.reload()
        },
        (error) => {
          console.error('Error saving test', error);
        }
      );
    }
  }

  private formatDate(date: Date): string {
    const d = new Date(date);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }
}
