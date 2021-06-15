import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import {RadioButtonModule} from 'primeng/radiobutton';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit { 
   
  // hide: boolean = false;
  city: string | undefined;
  
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AppService,
    private ab:ActivatedRoute,
    
    
  ) { 

    this.postData = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    })
  }

  selectedValue: string = 'val1';

  id =this.ab.snapshot.paramMap.get('id')
  postData: FormGroup;
  
  posts = [];
  


ngOnInit() {  

       this.postData= this.fb.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        gender: ['M', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],

      })
      if(this.id){
      this.service.getStudent(this.id).subscribe(
        data => {
          console.log(data)
          this.postData= this.fb.group({
            fname: [data.fields.Name, Validators.required],
            lname: [data.fields.Roll_number, Validators.required],
            gdnder: [data.fields.Section, Validators.required],
            email: [data.fields.password, Validators.required],
            password: [data.fields.Name, Validators.required],
            address: [data.fields.Roll_number, Validators.required],
            city: [data.fields.Section, Validators.required],
            state: [data.fields.password, Validators.required],
          })
        }
      )
      }
}
updateStudent():any{
  if(!this.postData.valid){
    return false;
  }
  
  this.service.updateStudent(this.postData, this.id).subscribe(
    data => {
      console.log(data)
      if(localStorage.getItem("role")=="admin"){
        this.router.navigate(["/component1"])
      }
      else if(localStorage.getItem("role")=="user"){
        this.router.navigate(["/user"])
      }
      
    }
  )
}


createPost():any{  
  console.log(this.postData)
  if(!this.postData.valid){
    return false
  }
  this.service.addStudent(this.postData).subscribe(
    data => {
      console.log(data);
      this.router.navigate(["/hr"])
    }
  )
}






deletePost(post:any) {  
  // this.service.deletePost(post.id)  
  //   .subscribe(response => {  
  //     let index = this.posts.indexOf(post);  
  //     this.posts.splice(index, 1);  
  //   });  
    this.service.deleteStudent(post.id).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      }
    )
}

}

