import { Component, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MenuSections, SectionMenuList } from '../models/menu-bar.model';

@Injectable({
    providedIn: 'root'
  })

export class ServiceComponent {

    private BASE_URL = "http://localhost:5000/api/restaurantmenu";
    private MENU_SECTIONS_URL = "/listfiles";
    private SECTIONS_MENU_LIST_URL = "/section";
    private STARTERS_URL = "/starters";
    private MAIN_COURSE_URL = "/maincourse";
    private DESSERTS_URL = "/desserts";
    private BEVERAGES_URL = "/beverages";

    constructor(private http:HttpClient){}

    public getMenuSections():Observable<MenuSections>{
        return this.http.get<MenuSections>(`${this.BASE_URL + this.MENU_SECTIONS_URL}`);
    }

    public getSectionMenuList(input: String):Observable<SectionMenuList>{
        
        return this.http.get<SectionMenuList>(`${this.BASE_URL + this.SECTIONS_MENU_LIST_URL}`);
    }
}
