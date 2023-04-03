import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent {

  id:any;
  result=0;
  expected_results:string[]=["null","Indonesia","With the Parliament","Limestone","Polak","Rabies virus","Prime Minister","1967","Khajuraho temples","Zoroastrianism","Rameshwaram","New York, USA","Periscope","Sarod","Nek Chand","Hubble Space Telescope"]

  constructor(private route: ActivatedRoute) { }



  ngOnInit() {
   this.id = this.route.snapshot.queryParamMap.get('ids');

   this.id = JSON.parse(this.id);
    console.log("insexpected_resultse show result component");

    for(var i=1;i<=15;i++)
    {
      if(this.id[i]==this.expected_results[i])
      {
           this.result = this.result+1;
      }
    }


  }

}
