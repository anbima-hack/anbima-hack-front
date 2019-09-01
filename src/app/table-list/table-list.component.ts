import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

export class TableListComponent implements OnInit {

  restItems: any;
  restItemsUrl = 'http://harrypoup.herokuapp.com/harrypoup/clientes';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRestItems();
  }

  getRestItems(): void {
    this.restItemsServiceGetRestItems().subscribe(
        restItems => {
          this.restItems = restItems;
        }
      )
  }

  restItemsServiceGetRestItems() {
    return this.http.get<any[]>(this.restItemsUrl).pipe(map(data => data));
  }

}
