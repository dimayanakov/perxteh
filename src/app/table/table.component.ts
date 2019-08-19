import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { TableService } from '../services/table.service';
import { TableDataSource } from './datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['id', 'image', 'content', 'type', 'created', 'updated'];
  searchKey: string;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private tableService: TableService) {
  }

  ngOnInit() {
    this.dataSource = new TableDataSource(this.tableService, this.sort);
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.setFilter(this.searchKey);
  }

}
