import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public name: string="";
  public questionList : any = [];
  public currentQuestion: number = 0; 
  public points: number = 0; 
  public correctAnswer: number = 0;
  public wrongAnswer: number = 0;
  public attempts: number = 0;
  constructor(private questionService:QuestionService, private dataService: DataService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!
    this.getAllQuestions();
    // this.dataService.setAllQuestions(this.attempts);
  }

  getAllQuestions(){
    this.questionService.getQuestionJson()
    .subscribe(res=>{
      this.questionList = res.questions;
    })
  }  

  nextQuestion(){
    if(this.currentQuestion<4)
    this.currentQuestion++;
  }

  previousQuestion(){
    if(this.currentQuestion>0)
    this.currentQuestion--;
  }

  answer(option: any){
    if(option.correct){
      this.correctAnswer++;
      this.points+=10;
      this.attempts++;
      setTimeout(() => {
        if(this.currentQuestion<4)
        this.currentQuestion++;
      }, 1000);
      
    }
    else{
      this.wrongAnswer++;
      this.points-=10;
      this.attempts++;
      setTimeout(() => {
        if(this.currentQuestion<4)
        this.currentQuestion++;
      }, 1000);
    }
    this.dataService.setAttempts(this.attempts);
    this.dataService.setCorrect(this.correctAnswer);
    this.dataService.setWrong(this.wrongAnswer);
    this.dataService.setPoints(this.points);
  }
}
