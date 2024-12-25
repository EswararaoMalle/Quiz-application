// result-score.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-score',
  templateUrl: './result-score.component.html',
  styleUrls: ['./result-score.component.css']
})
export class ResultScoreComponent implements OnInit {
reAttemptQuiz() {
throw new Error('Method not implemented.');
}
  @Input() score: number = 0;
  @Input() totalQuestions: number = 0;

  percentage: number = 0;

  ngOnInit(): void {
    this.percentage = (this.score / this.totalQuestions) * 100;
  }

  getResultMessage(): string {
    if (this.percentage >= 80) return 'Excellent! Keep it up!';
    if (this.percentage >= 50) return 'Good effort! Practice more!';
    return 'Needs improvement. Better luck next time!';
  }
}

