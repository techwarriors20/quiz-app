import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizapiService } from 'src/app/services/quizapi.service';
import { Quizmodel } from 'src/app/model/Quizmodel';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  id:any;
  private sub:any;
  quizcategory: Quizmodel[];
  quizcategoryqa: any[];

  constructor(private route:ActivatedRoute, private quizservice:QuizapiService) { }

  ngOnInit() {

    this.sub=this.route.params.subscribe(p=>
      {
        this.id=p['id'];
      })

      this.quizservice.getallquiz().subscribe((data: Quizmodel[])=>{
        
        // this.quizmodel=data;
         this.quizcategory=(data.filter(t => t.id === this.id));
         console.log(this.quizcategory);   
         this.quizcategoryqa=this.quizcategory[0]['questionAnswer'];
       })  



  }

}
