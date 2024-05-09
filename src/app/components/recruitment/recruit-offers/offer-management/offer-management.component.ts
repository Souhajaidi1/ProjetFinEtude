import { Component, OnInit } from '@angular/core';
export interface Offer {
  title: string;
  candidate: string;
  position: string;
  status?: string; // Optional property for offer status
}
@Component({
  selector: 'app-offer-management',
  templateUrl: './offer-management.component.html',
  styleUrls: ['./offer-management.component.scss']
})
export class OfferManagementComponent implements OnInit {
  offers: Offer[] = [
    { title: 'Software Engineer', candidate: 'John Doe', position: 'Full-stack Developer' },
    { title: 'Marketing Manager', candidate: 'Jane Smith', position: 'Content Marketing' },
    // Add more offer objects with different properties
  ];
  constructor() { }

  ngOnInit(): void {
  }

}




