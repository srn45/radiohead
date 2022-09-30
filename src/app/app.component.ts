import { AfterViewInit, Component, ViewChild,OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFW = new FormControl();
  frameworks: string[] = ['Angular', 'Reactjs', 'Vue'];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','position1','symbol1', 'weight1','name1'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
export interface PeriodicElement {
  name: any;
  position:any;
  weight:any;
  symbol: any;
  name1: any;
  position1:any;
  weight1:any;
  symbol1: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:'98a42e5a652', name: 's20', weight: 'android', symbol: 'SM-G770F',position1: 'Android11', name1: 1, weight1: 'user', symbol1: 'Samsung'},
  {position: 'a2:ce:c8:cc:e3', name: 'device_1', weight:'linux', symbol: 'lINUXPC',position1: 'linux 5.15.0-43-generic', name1: 1, weight1: 'user', symbol1: 'Not Available'},
 
];