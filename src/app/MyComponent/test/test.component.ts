import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  myVar:String="";
  counter: number = 1;
  answer: string="";
  args0:number=0;

  myArray: string[] = [];

  constructor(private router:Router){}

  reset()
  {
    this.counter= 1;
  }
  next(args0:any)
  {
   // this.myArray[args0]=this.answer;
    this.counter= this.counter+1;
   // this.answer="";
  }
  previous(args0:any)
  {
    //this.myArray[args0]=this.answer;
    this.counter= this.counter-1;
   // this.answer="";
  }
  finalAnswer()
  {
   console.log("inside test component");
    const ids = JSON.stringify(this.myArray);
    console.log(ids);
    this.router.navigate(
      ['/showResult'],
      { queryParams: { ids:  ids} }
    );

  }
}
