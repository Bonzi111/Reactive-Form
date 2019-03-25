import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() {
  }
  reactiveForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required,Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]+')]),
    line1: new FormControl('', Validators.required),
    line2: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    district: new FormControl('', Validators.required),
    pincode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),

  });
  ngOnInit() {
  }
  get f() {
    return this.reactiveForm.controls;
  }
  onSubmit() {
    alert("Submitted")
    console.warn(this.reactiveForm.value);
  }

}
