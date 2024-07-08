import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Offer } from '../offer-management.component';

@Component({
  selector: 'app-edit-offer-dialog',
  templateUrl: './edit-offer-dialog.component.html',
  styleUrls: ['./edit-offer-dialog.component.scss']
})
export class EditOfferDialogComponent {
  offerForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditOfferDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Offer
  ) {
    this.offerForm = this.fb.group({
      referenceoffer: [data.referenceoffer, Validators.required],
      position: [data.position, Validators.required],
      remuneration: [data.remuneration, Validators.required],
      skills: [data.skills, Validators.required],
      nicetohave: [data.nicetohave],
      studyingLevel: [data.studyingLevel, Validators.required],
      experience: [data.experience, Validators.required],
      formationExigees: [data.formationExigees, Validators.required],
      contrat: [data.contrat, Validators.required]
    });
  }
ngOnInit(){
}

  onSave(): void {
    if (this.offerForm.valid) {
      this.dialogRef.close(this.offerForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

