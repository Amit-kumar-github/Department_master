import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import { DepartmentServiceService } from '../department-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:any;
  public dept = {
    dept_id:'',
    dept_shortName:'',
    dept_name:''
  };
  constructor(private http:HttpClient,private departmentService:DepartmentServiceService) {}

  ngOnInit() {
    let response= this.http.get("http://localhost:8080/apiList");
    response.subscribe((data)=>this.books=data);
  }

  formSubmit(){
    console.log(this.dept);
  
      
     this.departmentService.addDept(this.dept).subscribe(
      (data:any)=>{
        console.log(data);
        alert("success");
      },
      (error:any)=>{
        console.log(error);
        alert("Error");
      }
      )  
}

searchText='';
delete(j:any)
{
 // console.log(j);
 this.departmentService.deleteData(j).subscribe((data)=>{
  console.log(data);
 });

}


  
}
