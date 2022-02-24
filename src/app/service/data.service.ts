import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  attempts:number = 0;
  correct:number = 0;
  wrong:number = 0;
  points:number = 0;

  public setAttempts(val: any){
    this.attempts = val;
  }

  public getAttempts():any{
    return this.attempts;
  }

  public setCorrect(val: any){
    this.correct = val;
  }

  public getCorrect():any{
    return this.correct;
  }

  public setWrong(val: any){
    this.wrong = val;
  }

  public getWrong():any{
    return this.wrong;
  }

  public setPoints(val: any){
    this.points = val;
  }

  public getPoints():any{
    return this.points;
  }
  constructor() { }
}
