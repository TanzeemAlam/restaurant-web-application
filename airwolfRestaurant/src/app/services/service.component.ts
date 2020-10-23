import { Component, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })

export class ServiceComponent {

    public data: any = [];

    constructor(private http:HttpClient){}

    getMenuData(){
        const url ="https://jsonplaceholder.typicode.com/todos/1";
        this.http.get(url).subscribe((response)=>{
            this.data = response;
            console.log(this.data);
        });
    }
}
