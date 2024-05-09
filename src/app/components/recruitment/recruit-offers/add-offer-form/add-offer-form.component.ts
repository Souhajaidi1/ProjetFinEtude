import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-offer-form',
  templateUrl: './add-offer-form.component.html',
  styleUrls: ['./add-offer-form.component.scss']
})
export class AddOfferFormComponent implements OnInit {
  offerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.offerForm = this.fb.group({
      position: ['', Validators.required],
      type: ['', Validators.required],
      contrat: ['', Validators.required],
      remuneration: ['', Validators.required],
      skills: ['', Validators.required],
      niceToHave: [''],
      studyingLevel: [''],
      experience: ['', Validators.required],
    });
  }

}
