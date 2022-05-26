import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Table } from 'src/domain/tables';

@Injectable({
  providedIn: 'root'
})
export class GetAllTablesService {

  constructor(private http: HttpClient) { }

  public GetAllTables(){
    return this.http.get<Array<Table>>("http://localhost:3000/tables");

    }
  }

