import { Component, ViewEncapsulation,OnInit, Optional } from '@angular/core';
import { AppserviceService } from './appservice.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'angular';
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];
  datos: any = []
  

  constructor(  
    private router: Router,
    private servicio : AppserviceService) { }

  ngOnInit() {
    this.fetchPosts();
  }


  fetchPosts(): void {
    var swal = Swal
    swal.fire({
      title: 'Wait a moment...',
      html: 'Updating info...',// add html attribute if you want or remove
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
    });

    this.servicio.cargarDatos(this.page,this.tableSize).subscribe(
      response => {
        swal.close()
        this.datos = response.json_response;
        this.count = response.total
      // console.log(this.datos)
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

  verImage(ruta:any){
    alert(ruta)
    
    this.router.navigate(['/verimg'])
    sessionStorage.setItem("ruta",ruta)
  }
}