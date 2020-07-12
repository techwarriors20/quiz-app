import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizapiService } from '../../services/quizapi.service';
import { Quizmodel } from '../../model/Quizmodel';

import {FormBuilder,FormGroup,FormControl, Validators, FormControlName, FormArray} from '@angular/forms';


@Component({
  selector: 'app-clientcategory',
  templateUrl: './clientcategory.component.html',
  styleUrls: ['./clientcategory.component.css']
})
export class ClientcategoryComponent implements OnInit {

  public show :boolean=false;
  id:any;
  private sub:any;
  quizcategory: Quizmodel[];
  submitted = false;

  Addquiz :FormGroup;
    
  constructor(private route:ActivatedRoute,private quizservice:QuizapiService,private router:Router) { }

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
       })  


        
         

     }

    
   
     
  scategroyclick(id)
  {
    this.router.navigateByUrl('/assignment/'+ id);
  }

  

}
