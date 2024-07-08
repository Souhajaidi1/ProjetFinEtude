import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stats = {
    nbCandidatureParOffre: 1000,
    nbCandidatureParDepartement: "796 (430 + 366)",
    offre: "750 (683 + 67)",
    usersTotal: 797,
    candidatureEnCours: 996,
    candidatureTerminees: "640 (240 + 400)",
    evaluationEnAttente: 0
  };

  constructor() { }

  ngOnInit(): void {
    // Initialize your dashboard stats here, possibly fetch from a service
  }
}
