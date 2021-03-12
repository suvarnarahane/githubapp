import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  constructor() { }
  mydata = "hello from parent student"
  ngOnInit(): void {  
  }
  getData(e:any){
    console.log(e);    
  }


}
