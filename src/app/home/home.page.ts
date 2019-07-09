import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  scoreA = 0;
  scoreB = 0;
  
  constructor() { }

  setOneB() {
    this.scoreB += 1;
   
  }

  setTwoB() {
    this.scoreB += 2;
  }

  setThreeB() {
    this.scoreB += 3;
  }

  setFourB() {

    this.scoreB += 4;
  }

  setOneA() {
    this.scoreA += 1;

  }

  setTwoA() {
    this.scoreA += 2;
  }

  setThreeA() {
    this.scoreA += 3;
  }

  setFourA() {

    this.scoreA += 4;
  }
//////////////////////////////////////////////////////
  minusOneA() {

    this.scoreA -= 1;
  }

  minusTwoA() {

    this.scoreA -= 2;
  }
  minusThreeA() {

    this.scoreA -= 3;
  }
  minusFourA() {

    this.scoreA -= 4;
  }

  minusOneB() {

    this.scoreB -= 1;
  }

  minusTwoB() {

    this.scoreB -= 2;
  }
  minusThreeB() {

    this.scoreB -= 3;
  }
  minusFourB() {

    this.scoreB -= 4;
  }

  reset() {

    this.scoreB = 0;
    this.scoreA = 0;

  }

}
