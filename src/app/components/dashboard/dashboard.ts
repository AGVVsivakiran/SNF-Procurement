import { Component } from '@angular/core';
import { SideMenu } from '../side-menu/side-menu';

@Component({
  selector: 'app-dashboard',
  imports: [SideMenu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
