import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:any;

  constructor(private http:HttpClient) {}

  ngOnInit() {
    let response= this.http.get("http://localhost:8080/apiList");
    response.subscribe((data)=>this.books=data);
  }
}
