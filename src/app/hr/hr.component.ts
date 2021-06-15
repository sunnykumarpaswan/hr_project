import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss']
})
export class HrComponent implements OnInit {

constructor(
  private fb: FormBuilder,
  private router: Router,
  private service: AppService,
  private ab:ActivatedRoute,
  
) { 

}

emp:any[] = []

ngOnInit() {  

  this.service.getEmployees().subscribe(
    data => {
      console.log(data)
      this.emp = data.records
      console.log(this.emp)
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