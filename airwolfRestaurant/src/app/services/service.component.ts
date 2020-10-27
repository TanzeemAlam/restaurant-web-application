import { Component, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MenuSections, SectionMenuList } from '../models/menu-bar.model';

@Injectable({
    providedIn: 'root'
  })

export class ServiceComponent {

    private LOCALHOST_URL = "https://localhost:5001";
    private BASE_URL = "/api/restaurantmenu/file";
    private MENU_SECTIONS_URL = "/menu.json";
    private SECTION_URL_LIST = ["/starters.json","/maincourse.json","/desserts.json","/beverages.json"];

    constructor(private http:HttpClient){}

    public getMenuSections():Observable<MenuSections>{
        return this.http.get<MenuSections>(`${this.LOCALHOST_URL + this.BASE_URL + this.MENU_SECTIONS_URL}`);
    }

    public getSectionMenuList(input: number):Observable<SectionMenuList>{
        return this.http.get<SectionMenuList>(`${this.LOCALHOST_URL + this.BASE_URL + this.SECTION_URL_LIST[input]}`);
    }
}
