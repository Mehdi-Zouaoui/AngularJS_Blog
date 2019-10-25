import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";
import {User} from "../models/user.model";
import {Router} from '@angular/router'
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm : FormGroup;
  signUpForm:FormGroup;
  errorMessage : string;

  constructor(private formBuilder : FormBuilder,
              private userService : UserService,
              private authService : AuthService,
              private router:Router) { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.userForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required , Validators.email]],
      gender:['',Validators.required],
      hobbies: this.formBuilder.array([])
    })

    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['gender'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }
  getHobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }
  onAddHobby(){
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
  }


}
