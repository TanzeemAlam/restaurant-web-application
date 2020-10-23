import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../../services/service.component';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  public title: String = "Menu Bar";
  public snackItems: any [] = ['One','Two','Three'];
  public mainCourseItems: any [] = ['One','Two','Three'];
  public sweetItems: any [] = ['One','Two','Three'];

  constructor(private httpService: ServiceComponent) { }

  ngOnInit(): void {
    this.httpService.getMenuData();
  }

}
