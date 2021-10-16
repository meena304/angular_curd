import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id:any;
view:any;
b:any;
meena:any;
  constructor(private active:ActivatedRoute, private student:StudentService, private router:Router) { }

  ngOnInit(): void {

    this.meena= new FormGroup({

      name:new FormControl(''),
      email:new FormControl(''),
      address:new FormControl(''),
      phn_num:new FormControl(''),
      gender:new FormControl(''),
      course:new FormControl(''),
      college:new FormControl(''),
      qualification:new FormControl(''),
      branch:new FormControl(''),
      semester:new FormControl('')

    });

    this.id = this.active.snapshot.paramMap.get('id');
    // console.log(this.id);

    this.student.viewStudent(+this.id).subscribe(
      result => {

      this.view = result;
      this.b = this.view.api;  // to get data in array

      // console.log(this.b);
        // console.log(result);
        this.meena.patchValue({

          name:this.b.name,
          email:this.b.email,
          phn_num:this.b.phn_num,
          address:this.b.address,
          gender:this.b.gender,
          course:this.b.course,
          qualification:this.b.qualification,
          college:this.b.college,
          branch:this.b.branch,
          semester:this.b.semester

        });

      }
    )




  }

  edit() {
    // console.log(this.meena.value);
    this.student.updateStudent(this.meena.value,this.active.snapshot.paramMap.get('id')).subscribe(
      result=>{
        // console.log(result);
        this.router.navigate(['/display-student']);
    });

  }


}
