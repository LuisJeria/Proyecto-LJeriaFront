import { Component, OnInit } from '@angular/core';
import { Table } from '../../domain/tables';
import { GetAllTablesService } from '../service/get-all-tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  public table: Array<Table>
  constructor(private s: GetAllTablesService) {
    this.s.GetAllTables().subscribe(r=>this.table= {...r})
    this.table = []
   }

  ngOnInit(): void {
  }

}
