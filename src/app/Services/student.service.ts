import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  GetStudentData():Observable<any>
  {
    return this.http.get('https://www.jsonblob.com/api/jsonblob/4aa9e27e-88a9-11eb-bfb2-2f91b6ec7214')
  }

  GetWeatherData():Observable<any>
  {
  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=265fc33e0723f52659de2920fd96ce0d');
  }
}
