import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ymca-catalog-init',
  templateUrl: './ymca-catalog-init.component.html',
  styleUrls: ['./ymca-catalog-init.component.scss']
})
export class YmcaCatalogInitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('cooper');
    window.ymcaComponent = window.ymcaComponent || {};
    window.ymcaComponent.init = this.init.bind(this);
  }


  private init(): void {

  }
}
