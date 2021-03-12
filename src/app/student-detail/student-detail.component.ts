import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() child_data:string=''
  
  @Output() myevent  = new EventEmitter()
  

  constructor() {  
    console.log(this.child_data) 
  }

  ngOnInit(): void {
    
    console.log(this.child_data)
  }
  sendData(){
    this.myevent.emit("data from child")
  }
  }
  

}
