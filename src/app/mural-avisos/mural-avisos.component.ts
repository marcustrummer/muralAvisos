import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mural-avisos',
  templateUrl: './mural-avisos.component.html',
  styleUrls: ['./mural-avisos.component.css']
})
export class MuralAvisosComponent implements OnInit {
  items:any = [];
  pageOfItems: Array<any>;

  constructor() { }

  ngOnInit(){
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }


  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
