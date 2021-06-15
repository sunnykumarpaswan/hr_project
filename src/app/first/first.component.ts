
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  hide: boolean = false;
  loginForm: FormGroup=new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AppService,
    
  ) {  }


  posts:any[] = [];

  ngOnInit(){

    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    })
    
    this.service.getEmployees().subscribe(
      response => {
        console.log(response)
        this.posts = response.records;
      }
    )

    
  }
  login() {
    console.log(this.posts)
    if (this.loginForm.controls['email'].value == "admin@gmail.com" && this.loginForm.controls["password"].value == "123456") {
      console.log("abc")
      localStorage.setItem("role", "admin")
       this.router.navigate(['hr'])
    }
    else{
      for(let i=0;i<this.posts.length; i++){
        console.log(this.posts[i].fields.Email)
        if(this.posts[i].fields.Email == this.loginForm.controls['email'].value && this.posts[i].fields.Password == this.loginForm.controls["password"].value){
          localStorage.setItem("userId", this.posts[i].id)
          console.log("saved")
          this.router.navigate(["user"])
          break;
        }
      }
    }
    
  }

  registration() {
         
       this.router.navigate(['second'])
    }
    
  

}
