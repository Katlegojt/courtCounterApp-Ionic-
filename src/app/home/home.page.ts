import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  scoreA = 0;
  scoreB = 0;
  plusOne :number;
  
  constructor() { }
  setTeamA(num:number)
  {

    this.scoreA += num;
  }

  setTeamB(num:number) {
    this.scoreB += num;
  }

  minusTeamA(num:number){

    this.scoreA -= num
  }
  minusTeamB(num:number){

    this.scoreB -= num
  }

  
  reset() {

    this.scoreB = 0;
    this.scoreA = 0;

  }

}
