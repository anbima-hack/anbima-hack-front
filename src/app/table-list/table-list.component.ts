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
  restItemsUrl = 'https://anbima-hack-back.herokuapp.com/api/v1/analiseFatos';
  httpClient: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPost();
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

  getPost() {
    this.httpClient.post(this.restItemsUrl,
      {
        "idClient": ""
      })
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      );
  }
}
