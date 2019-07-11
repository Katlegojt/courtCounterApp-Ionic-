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
  isVaildA : boolean = false;
  isVaildB : boolean = false;
  constructor() {
    if(this.scoreA <= 0)
{
 this.isVaildA = true;
 
}else{

  this.isVaildA = false;
}
if(this.scoreB <= 0)
{
 this.isVaildB = true;

}else{

  this.isVaildB = false;
}

   }
  setTeamA(num:number)
  {

    this.scoreA += num;
    if(this.scoreA <= 0)
    {
     this.isVaildA = true;
     this.scoreA = 0;
    
    }else{
    
      this.isVaildA = false;
    }
  }

  setTeamB(num:number) {
    this.scoreB += num;
    if(this.scoreB <= 0)
    {
     this.isVaildB = true;
     this.scoreB = 0;
    
    }else{
    
      this.isVaildB = false;
    }
  }

  minusTeamA(num:number){

    this.scoreA -= num;
    if(this.scoreA <= 0)
    {
     this.isVaildA = true;
    this.scoreA = 0;
    }else{
    
      this.isVaildA = false;
    }
  }
  minusTeamB(num:number){

    this.scoreB -= num;
    if(this.scoreB <= 0)
    {
     this.isVaildB = true;
     this.scoreB = 0;
    }else{
    
      this.isVaildB = false;
    }
  }

  
  reset() {

    this.scoreB = 0;
    this.scoreA = 0;
    if(this.scoreA <= 0)
{
 this.isVaildA = true;

}else{

  this.isVaildA = false;
}

if(this.scoreB <= 0)
{
 this.isVaildB = true;

}else{

  this.isVaildB = false;
}
  }


  

}
