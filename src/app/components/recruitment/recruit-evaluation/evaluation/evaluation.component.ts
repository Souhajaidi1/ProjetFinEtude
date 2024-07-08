import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RecruitEvaluationService } from 'app/services/recruitement/recruit-evaluation/recruit-evaluation.service';

export interface Evaluation {
  softSkills: number;
  hardSkills: number;
  remarks: {[key: string]: string};
  remarque: string;
  resultat: number }
interface Question {
  id: number;
  text: string;
  controlName: string;}

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  evaluationForm: FormGroup;
  softSkillsQuestions: Question[] = [
    { id: 1, text: 'Communication', controlName: 'communication' },
    { id: 2, text: 'Team Work', controlName: 'teamWork' },
    { id: 3, text: 'critical thinking', controlName: 'thinking' },
    { id: 4, text: 'LeaderShip', controlName: 'LeaderShip' },
    { id: 5, text: 'emotional intelligence', controlName: 'intelligence' },
    // Add more soft skills questions as needed
  ];
  hardSkillsQuestions: Question[] = [
    { id: 1, text: 'Problem Solving', controlName: 'problemSolving' },
    { id: 2, text: 'Technical Knowledge', controlName: 'technicalKnowledge' },
    { id: 3, text: 'Design abilities', controlName: 'design' },
    { id: 4, text: 'resource management', controlName: 'management' },
    { id: 5, text: 'analytical mind', controlName: 'analysis' }
    // Add more hard skills questions as needed
  ];
  scores: number[] = [1, 2, 3, 4, 5];

  constructor(private fb: FormBuilder , private evaluationService: RecruitEvaluationService) {
    this.evaluationForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    // Initialize soft skills questions form controls
    this.softSkillsQuestions.forEach(question => {
      this.evaluationForm.addControl(question.controlName, new FormControl('', Validators.required));
      this.evaluationForm.addControl('remark' + question.id, new FormControl(''));
    });

    // Initialize hard skills questions form controls
    this.hardSkillsQuestions.forEach(question => {
      this.evaluationForm.addControl(question.controlName, new FormControl('', Validators.required));
      this.evaluationForm.addControl('remark' + question.id, new FormControl(''));
    });
  }

  updateScore(event: any, controlName: string, score: number): void {
    if (event.target.checked) {
      this.evaluationForm.controls[controlName].setValue(score);
    } else {
      this.evaluationForm.controls[controlName].setValue(null);
    }
  }

  onSubmit(): void {
    if (this.evaluationForm.valid) {
      const formData = this.evaluationForm.value;
      const softSkillsScores = this.extractScores(this.softSkillsQuestions, formData);
      const hardSkillsScores = this.extractScores(this.hardSkillsQuestions, formData);
      const remarks = this.extractRemarks(formData);

      const softSkillsSum = this.sumScores(softSkillsScores);
      const hardSkillsSum = this.sumScores(hardSkillsScores);

      const evaluation: Evaluation = {
        softSkills: softSkillsSum,
        hardSkills: hardSkillsSum,
        remarks: remarks,
        remarque: Object.values(remarks).join('; '),
        resultat: softSkillsSum + hardSkillsSum
      };

      this.evaluationService.saveEvaluation(evaluation).subscribe(
        (response) => {
          console.log('Evaluation submitted successfully:', response);
          this.evaluationForm.reset();
        },
        (error) => {
          console.error('Error saving evaluation:', error);
        }
      );
    } else {
      console.error('Form is invalid. Cannot submit.');
    }
  }

  private extractScores(questions: Question[], formData: any): {[key: string]: number} {
    const scores: {[key: string]: number} = {};
    questions.forEach(question => {
      scores[question.controlName] = formData[question.controlName];
    });
    return scores;
  }

  private extractRemarks(formData: any): {[key: string]: string} {
    const remarks: {[key: string]: string} = {};
    Object.keys(formData).forEach(key => {
      if (key.startsWith('remark')) {
        remarks[key] = formData[key];
      }
    });
    return remarks;
  }

  private sumScores(scores: {[key: string]: number}): number {
    return Object.values(scores).reduce((a, b) => a + b, 0);
  }
}
