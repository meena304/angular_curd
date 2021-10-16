import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url:any = 'http://127.0.0.1:8000/api/' ;
  constructor(private http:HttpClient) { }

  addStudent(data:any) {
    return this.http.post(this.url+'insert',data);

  }

  displayStudent() {
    return this.http.get(this.url+'display');
  }

  viewStudent(id:any):Observable<any> {
    return this.http.get(this.url+'view/'+id);

  }

  deleteStudent(id:any) {
    return this.http.delete(this.url+'delete/'+id);

  }

  updateStudent(data:any,id:any) {
    return this.http.put(this.url+'update/'+id,data);

  }


}
