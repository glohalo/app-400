import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  private url: string = "https://apod-100.herokuapp.com/";
  
  constructor(private http: HttpClient) { }

 
  cargarDatos(pagina:number,rows:number):any {
    const url = `${this.url}Query-pagination?page_num=${pagina}&page_size=${rows}`;
    
    return this.http.get<any>(url);
  }
  

}