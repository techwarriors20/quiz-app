import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Quizmodel } from 'src/app/model/Quizmodel';

@Component({
  selector: 'app-generatequiz',
  templateUrl: './generatequiz.component.html',
  styleUrls: ['./generatequiz.component.css']
})
export class GeneratequizComponent implements OnInit {

   
  submitted = false;
  quizcategory: Quizmodel[];
   
  Addquiz :FormGroup;
  
  constructor(private formBuilder:FormBuilder ) { }

  ngOnInit()
  {
    this.Addquiz = this.formBuilder.group({
      quizCategory: ['', Validators.required]
    });
  }
 
  get f() { return this.Addquiz.controls; }

 onSubmit() {
 
   alert("1");
 }

  register(form)
  {
    this.submitted=false;
    alert("1");
  }

}
