import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../../services/service.component';
import { MenuSections, SectionMenuList } from 'src/app/models/menu-bar.model';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  public isLoading: boolean = true;
  public title: String = "Menu Bar";
  public menuItemsTitle: String[] = ['Starters', 'Main Course', 'Desserts', 'Beverages'];
  public snackItems: any [] = ['One','Two','Three'];
  public mainCourseItems: any [] = ['One','Two','Three'];
  public sweetItems: any [] = ['One','Two','Three'];
  public menuResult: MenuSections;

  constructor(private httpService: ServiceComponent) { }

  ngOnInit(): void {
    this.httpService.getMenuSections().subscribe((response: MenuSections) => {
      this.menuResult = response;
      this.loadMenuSections();
    });
    setTimeout(() => { this.isLoading = false }, 1000);
  }

  private loadMenuSections(){
    console.log("Menu Sections: ", this.menuResult);
    this.menuResult.sections.forEach(section => {
      console.log(section.name);
    });
  }

}
