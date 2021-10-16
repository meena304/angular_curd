import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  meena:any ;
  constructor(private student:StudentService) { }

  ngOnInit(): void {

    this.meena= new FormGroup({

      name:new FormControl(''),
      email: new FormControl('',[Validators.required, Validators.minLength(3)] ),
      address:new FormControl(''),
      phn_num:new FormControl(''),
      gender:new FormControl(''),
      course:new FormControl(''),
      college:new FormControl(''),
      qualification:new FormControl(''),
      branch:new FormControl(''),
      semester:new FormControl('')

    });

  }
  get f(){
    return this.meena.controls;
  }
  itm() {
    // console.log(this.meena.value);
    this.student.addStudent(this.meena.value).subscribe((result)=>{
      console.log(result)
    })
    this.meena.reset({})
  }

}
