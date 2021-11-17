import { Component, OnInit } from '@angular/core';
import { Warning } from '../model/Warning';
import { WarningsService } from '../service/warnings.service';

@Component({
  selector: 'app-mural-avisos',
  templateUrl: './mural-avisos.component.html',
  styleUrls: ['./mural-avisos.component.css']
})
export class MuralAvisosComponent implements OnInit {
  
  warnings: Warning[] = [];
  currentWarning: Warning = {};
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  date: Date;
  datepipe: any;

  constructor(
    private warningService: WarningsService
  ) { }

  ngOnInit(){
    this.retrieveWarnings();
  }

  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveWarnings(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.warningService.getAllWarnings(params)
    .subscribe(
      response => {
        const { warnings, totalItems } = response;
        this.warnings = warnings;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveWarnings();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveWarnings();
  }

  refreshList(): void {
    this.retrieveWarnings();
    this.currentWarning = {};
    this.currentIndex = -1;
  }

  setActiveWarning(warning: Warning, index: number): void {
    this.currentWarning = warning;
    this.currentIndex = index;
  }

  removeAllWarnings(): void {
    this.warningService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.page = 1;
    this.retrieveWarnings();
  }
}