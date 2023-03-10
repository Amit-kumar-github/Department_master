
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  constructor(private http:HttpClient) { }

  addDept(dept:any){
    return this.http.post(`http://localhost:8080/apiSave`,dept);
  }

  deleteData(dept_id:any)
  {
    return this.http.delete("http://localhost:8080/apiDelete/"+dept_id);
  }

  }

