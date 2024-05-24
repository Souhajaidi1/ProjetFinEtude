import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecruitOffersService } from 'app/services/recruitement/recruit-offers/recruit-offers.service';
@Component({
  selector: 'app-add-offer-form',
  templateUrl: './add-offer-form.component.html',
  styleUrls: ['./add-offer-form.component.scss']
})
export class AddOfferFormComponent implements OnInit {
  offerForm: FormGroup;
  position!:any;
  type!:any;
  contrat!:any;
  remuneration!:any;
  niceToHave!:any;
  skills!:any;
  studyingLevel!:any;
  experience!:any;
  formationExigees!:any;
  constructor(private fb: FormBuilder,private offerService:RecruitOffersService) {
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

  ngOnInit(): void {

  }
  onSubmit(): void {
    if (this.offerForm.valid) {
      console.log('Form Submitted', this.offerForm.value);
      // Handle form submission, e.g., send the data to the server
    } else {
      console.log('Form is invalid');
    }
  }
  addOffers(){
    let data={
      position:this.position,
      contrat:this.contrat,
      remuneration:this.remuneration,
      skills:this.skills,
      nicetohave:this.niceToHave,
      studyingLevel:this.studyingLevel,
      experience:this.experience,
      formationExigees:this.formationExigees,
      TypeOffer:this.type,
    }
    console.log(data)
    this.offerService.AddOffer(data).subscribe((res)=>{
      console.log(res)
    });
}



}
