import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentimage',
  templateUrl: './componentimage.component.html',
  styleUrls: ['./componentimage.component.scss']
})
export class ComponentimageComponent implements OnInit {

  image : string=""
  constructor() { }

  ngOnInit(): void {
    this.image = sessionStorage.getItem('ruta')
  }

}
