import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecruitOffersService } from 'app/services/recruitement/recruit-offers/recruit-offers.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-offer-form',
  templateUrl: './add-offer-form.component.html',
  styleUrls: ['./add-offer-form.component.scss']
})
export class AddOfferFormComponent implements OnInit {
  offerForm: FormGroup;
  referenceoffer!:any;
  position!:any;
  contrat!:any;
  remuneration!:any;
  skills!:any;
  niceToHave!:any;
  studyingLevel!:any;
  experience!:any;
  formationExigees!:any;
  typeOffer!:any;
  modelTitel: string;

  constructor(private fb: FormBuilder,private offerService:RecruitOffersService, private router: Router ) {

    this.offerForm = this.fb.group({
      referenceoffer:["",Validators.required],
      position: ['', Validators.required],
      contrat: ['', Validators.required],
      remuneration: ['', Validators.required],
      skills: ['', Validators.required],
      niceToHave: [''],
      studyingLevel: [''],
      experience: ['', Validators.required],
      formationExigees: ['', Validators.required],
      typeOffer: ['', Validators.required]
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
  onCancel(): void {
    this.offerForm.reset(); // Reset the form
    this.router.navigate(['/offer-management'])
  }
  addOffers(){
    let data={
      referenceoffer:this.referenceoffer,
      position:this.position,
      contrat:this.contrat,
      remuneration:this.remuneration,
      skills:this.skills,
      nicetohave:this.niceToHave,
      studyingLevel:this.studyingLevel,
      experience:this.experience,
      formationExigees:this.formationExigees,
      TypeOffer:this.typeOffer,
    }
    console.log(data)
    this.offerService.AddOffer(data).subscribe((res)=>{
      console.log(res)
    });
}

}
