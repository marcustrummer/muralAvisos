import { Component, OnInit } from '@angular/core';
import { Warning } from '../model/Warning';
import { WarningsService } from '../service/warnings.service';

@Component({
  selector: 'app-add-warnings',
  templateUrl: './add-warnings.component.html',
  styleUrls: ['./add-warnings.component.css']
})
export class AddWarningsComponent implements OnInit {

  warning: Warning = {
    title: '',
    description: '',
    published: false,
    postDate: undefined,
    viewedDate: undefined
  };
  submitted = false;



  constructor(
    private warningService: WarningsService
  ) { }

  ngOnInit(): void {
  }


  saveWarning(): void {
    const data = {
      title: this.warning.title,
      description: this.warning.description,
      postDate: this.warning.postDate
    };

    this.warningService.postWarning(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newWarning(): void {
    this.submitted = false;
    this.warning = {
      title: '',
      description: '',
      published: false
    };
  }

}
