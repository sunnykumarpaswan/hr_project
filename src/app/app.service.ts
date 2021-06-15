// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AppService {

//   constructor() { }
// }


import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Injectable } from '@angular/core';  
//import { AnyCnameRecord } from 'dns';
//import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  private url = "https://api.airtable.com/v0/appGaCUgPOUhUvQyM/Table%201";  
    
  constructor(private http: HttpClient) { }  

  
  getEmployees(){
    return this.http.get<any>("https://api.airtable.com/v0/appGaCUgPOUhUvQyM/Table%201",{headers: this.getHeader()})
  }
  
  getPosts(): Observable<any[]> {  
    return this.http.get<any>(this.url);  
  }  
  
  createPost(post: any) {  
    return this.http.post(this.url, JSON.stringify(post))  
  }  
  
  updatePost(post: { id: string; }){  
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))  
  }  
  
  deletePost(id: string) {  
    return this.http.delete(this.url + '/' + id);  
  }  
  getHeader(){
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer keyBX6I3IUyM0a7Hn`
    })
  }
 geStudentsList(){
   return this.http.get<any>("https://api.airtable.com/v0/appGaCUgPOUhUvQyM/Table%201",{headers:this.getHeader()} )
 } 

 addStudent(data: any){
  let t = {
    "records": [
      {
        "fields": {
          "First_Name":  data.get("fname").value,
          "Last_Name": data.get("lname").value,
          "Genter": data.get("gender").value,
          "Address":  data.get("address").value,
          "Email": data.get("email").value,
          "Password":  data.get("password").value,
          "City":  data.get("city").value,
          "State": data.get("state").value
        }
      },
    ]
  }
  console.log(t)
  return this.http.post<any>('https://api.airtable.com/v0/appGaCUgPOUhUvQyM/Table%201', t, {headers:this.getHeader()})

}
  deleteStudent(id: string){
    console.log(id)
    return this.http.delete<any>("https://api.airtable.com/v0/appGaCUgPOUhUvQyM/Table%201"+ "/" + id, {headers: this.getHeader()})
  }

  updateStudent(data: any,id: any){
    console.log(data)
    let t = {
      "records": [
        {
          "fields": {
            "First_Name":  data.get("fname").value,
            "Last_Name": data.get("lname").value,
            "Genter": data.get("gender").value,
            "Address":  data.get("address").value,
            "Email": data.get("email").value,
            "Password":  data.get("password").value,
            "City":  data.get("city").value,
            "State": data.get("state").value
          }
        },
      ]
    }
    return this.http.patch<any>("https://api.airtable.com/v0/appGaCUgPOUhUvQyM/Table%201", t, {headers: this.getHeader()})
  }

  getStudent(id:any){
    return this.http.get<any>("https://api.airtable.com/v0/appGaCUgPOUhUvQyM/Table%201"+ "/"+ id,{headers:this.getHeader()} )
  }

  getPost(id: any){
    return this.http.get<any>("https://api.airtable.com/v0/appGaCUgPOUhUvQyM/Table%201"+ "/"+ id,{headers:this.getHeader()} )
  }

  isUser(){
    return localStorage.getItem("role")=="admin"? true: false
  }



}
