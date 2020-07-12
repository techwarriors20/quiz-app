import { Component, OnInit } from '@angular/core';
import { QuizapiService } from '../services/quizapi.service';
import{Quizmodel} from '../model/Quizmodel';

import { of, from } from 'rxjs'
import { tap, distinct, map } from 'rxjs/operators'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  show:boolean=true;
  quizmodel: Quizmodel[];

  

  constructor( private quizservice: QuizapiService) {
    
  }

  ngOnInit() {

    this.quizservice.getallquiz().subscribe((data: Quizmodel[])=>{
     // this.quizmodel=data;

      this.quizmodel=(data.filter((thing, i, arr) => arr.findIndex(t => t.quizCategory === thing.quizCategory) === i));
       
    })  

   
    
     
   
  }
  getClass(j){

    if(j==0)
    {
      return 'panel panel-success panel-colorful';
    }
    else if(j==1)
    {
      return 'panel panel-info panel-colorful';
    }
    else if (j==2)
    {
      return 'panel panel-purple panel-colorful';
    }
    else{
      return 'panel panel-warning panel-colorful';
    }
 }

//   createquiz()
//   {
  
//      const quizmodel : Quizmodel = 
//       {
         
//         quizCategory : "Machine",
//         quizName: "windows",
//         questionAnswer: [
//           {
//             question: "Hi",
//             answerType: "How",
//             answers: [
//               {
//                 answer: "How",
//                 isCorrect: "0",
//                 answerDetail: "How are you"
//               }
//             ]
//           }
//         ],
//         calculation: {
//           type: "active",
//           result: [
//             {
//               min: 0,
//               max: 0,
//               resultText: "how"
//             }
//           ],
//           additionalDisplay: "welcome"
//         }
//       };
    
//       // this.http.post( "https://localhost:44314/api/v1/quiz/CreateQuiz", quizmodel).subscribe( data =>
//       // {
//       //   console.log(data);
//       // })


      

//       const myArrStr=JSON.parse(JSON.stringify(quizmodel))
// //console.log(JSON.parse(myArrStr));
     
//     this.quizservice.createquiz(myArrStr).subscribe(data => {
//           console.log(data);
//     })
//   }

}
