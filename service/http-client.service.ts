import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee{
  constructor(
    public id:string,
    public start:string,
    public  end:string,
    public  email:string,
    
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getEmployees()
  {
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://192.168.99.100:8082/persons/all');
  }
}
