import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  id:any;
  view:any;
  b:any;
  constructor(private active:ActivatedRoute, private student:StudentService) { }

  ngOnInit(): void {

    this.id = this.active.snapshot.paramMap.get('id');
    console.log(this.id);

    this.student.viewStudent(+this.id).subscribe((result)=>{;

      this.view = result;
      this.b = this.view.api;

      console.log(this.b);
    });
  }


}
