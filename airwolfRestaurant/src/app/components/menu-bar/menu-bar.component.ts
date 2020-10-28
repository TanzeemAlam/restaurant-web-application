import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../../services/service.component';
import { MenuSections, SectionMenuList, Item } from 'src/app/models/menu-bar.model';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  public isLoading: boolean = true;
  public title: String = "Menu Bar";
  public snackItems: Item [];
  public mainCourseItems: Item [];
  public dessertItems: Item [];
  public beverageItems: Item [];
  public menuResult: MenuSections;

  constructor(private httpService: ServiceComponent) { }

  ngOnInit(): void {
    this.httpService.getMenuSections().subscribe((response: MenuSections) => {
      this.menuResult = response;
      this.loadMenuSections();
    });
  }

  private loadMenuSections(){
    console.log("Menu Sections: ", this.menuResult);
    this.loadSnackItems();
    this.loadMainCourseItems();
    this.loadDessertItems();
    this.loadBeverageItems();
    setTimeout(() => { this.isLoading = false }, 4000);
  }

  private loadSnackItems(){
    this.httpService.getSectionMenuList(0).subscribe((response: SectionMenuList) => {
      console.log("Snacks", response);
      this.snackItems = response.items;
    });
  }

  private loadMainCourseItems(){
    this.httpService.getSectionMenuList(1).subscribe((response: SectionMenuList) => {
      console.log("Main Course", response);
      this.mainCourseItems = response.items;
    });
  }

  private loadDessertItems(){
    this.httpService.getSectionMenuList(2).subscribe((response: SectionMenuList) => {
      console.log("Desserts", response);
      this.dessertItems = response.items;
    });
  }

  private loadBeverageItems(){
    this.httpService.getSectionMenuList(3).subscribe((response: SectionMenuList) => {
      console.log("Beverages", response);
      this.beverageItems = response.items;
    });
  }

}
