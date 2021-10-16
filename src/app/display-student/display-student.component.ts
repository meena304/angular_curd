
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {

  display:any;
  stu_dis:any;

  constructor(private student:StudentService, private router:Router) { }

  ngOnInit(): void {
    this.student.displayStudent().subscribe((result)=>{
      this.display = result;
      this.stu_dis = this.display.api;
      // console.log(this.stu_dis);
    });
  }

  deleteStudent(id:any)
  {
    console.log(id);
    // this.student.deleteStudent(id).subscribe((result)=>{
    //   console.log(result);
    //   // this.router.navigate(['/display-student']);
    //   this.ngOnInit();
    // });

  }

}
