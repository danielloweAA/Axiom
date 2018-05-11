import { Component, OnInit } from '@angular/core';

import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  public tableData: any;
  public loading = true;

  constructor(
    private api: GetDataService
  ) { }

  ngOnInit() {
    this.api.getData()
      .subscribe(data => {
        this.tableData = data;
        this.loading = false;
      },
      err => console.log(err));
  }
}
