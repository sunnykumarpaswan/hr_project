import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private service: AppService,
    private router: Router
  ) { }

  user = {
    First_Name: "",
      Last_Name: "",
      Genter: "",
      Address:  "",
      Email: "",
      Password: "", 
      City:  "",
      State: "",

  }

  ngOnInit(): void {
    this.service.getPost(localStorage.getItem("userId")).subscribe(
      data => {
        console.log(data)
       this.user.First_Name = data.fields.First_Name,
        this.user.Last_Name = data.fields.Last_Name
        this.user.Genter = data.fields.Genter,
        this.user.Email = data.fields.Email,
        this.user.Password = data.fields.Password,
        this.user.Address = data.fields.Address,
        this.user.City = data.fields.City,
        this.user.State = data.fields.State
      }
    )
  }

  
}
