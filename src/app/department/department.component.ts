import { Component } from '@angular/core';
import { DepartmentServiceService } from '../department-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  public dept = {
    dept_id:'',
    dept_shortName:'',
    dept_name:''
  };

  constructor(private departmentService:DepartmentServiceService){}
   //function for adding skills:

  
   formSubmit(){
    console.log(this.dept);
  
      //call addSkill() : skillmasterService
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
}
