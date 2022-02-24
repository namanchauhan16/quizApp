import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  questions:any = 0;
  correct:number = 0;
  wrong:number = 0;
  points:number = 0;
  constructor(private dataService: DataService) { }
  ngOnInit(){
    this.questions = this.dataService.getAttempts();
    this.correct = this.dataService.getCorrect();
    this.wrong = this.dataService.getWrong();
    this.points = this.dataService.getPoints();
  }
}
