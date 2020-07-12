import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizapiService } from '../services/quizapi.service';
import { Quizmodel } from '../model/Quizmodel';

import {FormBuilder,FormGroup,FormControl, Validators, FormControlName, FormArray} from '@angular/forms';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public show :boolean=false;
  id:any;
  private sub:any;
  quizcategory: Quizmodel[];

  quizcategoryqa:any[];

  submitted = false;

  Addquiz :FormGroup;
    
  constructor(private route:ActivatedRoute,private quizservice:QuizapiService,private formBuilder:FormBuilder) { }

survey: FormGroup;

  ngOnInit() {

    this.sub=this.route.params.subscribe(p=>
      {
        this.id=p['id'];
        
      })

      this.quizservice.getallquiz().subscribe((data: Quizmodel[])=>{
        
        // this.quizmodel=data;
         this.quizcategory=(data.filter(t => t.quizCategory === this.id));
         console.log(this.quizcategory);  
         
         debugger;

         this.quizcategoryqa=this.quizcategory[0]['questionAnswer'];
          
       })  

       
       this.Addquiz=new FormGroup({
        quizCategory:new FormControl('',Validators.required),
        quizName:new FormControl('',Validators.required),
        questionAnswer: new FormArray([
          this.initQuestion()
          ]),
        calculation : new FormGroup({
          type : new FormControl(''),
          result : new FormArray([
            this.initresult()
          ]),
          additionalDisplay : new FormControl('')
        })
          

       });

         

     }

     initQuestion() {
      return new FormGroup({
        question: new FormControl(''),
        answerType: new FormControl(''),
        answers: new FormArray([
          this.initanswer()
        ])
         
      });
    }

    initanswer()
    {
      return new FormGroup({
        answer:new FormControl(''),
        iscorrect:new FormControl(0),
        answerDetail : new FormControl

        
      })
    }
    
    initcalculation()
    {
      return new FormGroup(
        {
          type : new FormControl(''),
          result : new FormArray([
            this.initresult()
          ]),
          additionalDisplay : new FormControl('')
       }
      )
    }

    initresult()
    {
      return new FormGroup(
        {
          min :new FormControl(0),
          max :new FormControl(0),
          resultText : new FormControl('test')

        }
      )
    }
   

    getQuestions(form) {
      //console.log(form.controls.questions.controls);
       return form.controls.questionAnswer.controls;
     }

     getanswer(form) {
      //console.log(form.controls.questions.controls);
       return form.controls.answers.controls;
     }

     getcalculation(form)
     {
       return form.controls.calculation.controls;
     }

     getresult(form)
     {
       return form.controls.calculation.controls;
     }
     
     get f() { return this.Addquiz.controls; }

     
  scategroyclick()
  {
    this.show=true;
  }

  onSubmit() {
    alert("1");
    this.submitted=true;

    // stop here if form is invalid
    if (this.Addquiz.invalid) {
        return;
    }
    else{
      debugger;
     // var data=JSON.stringify(this.Addquiz.value, null, 4);
     //alert(JSON.stringify(this.Addquiz.value, null, 4));

     var quizmodels = JSON.stringify(this.Addquiz.value, null, 4);

     const myArrStr=JSON.parse(JSON.stringify(quizmodels))
//console.log(JSON.parse(myArrStr));
     
    this.quizservice.createquiz(myArrStr).subscribe(data => {
          console.log(data);
    })

    }
  }

//   Quizgenerate()
//   {

     
//     alert("1");
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

