import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Warning } from '../model/Warning';
import { WarningsService } from '../service/warnings.service';

@Component({
  selector: 'app-warning-details',
  templateUrl: './warning-details.component.html',
  styleUrls: ['./warning-details.component.css'],
})
export class WarningDetailsComponent implements OnInit {
  currentWarning: Warning = {
    title: '',
    description: '',
    published: false,
    postDate: undefined,
    viewedDate: new Date(),
  };
  message = '';
  dateArrival: Date;

  constructor(
    private warningsService: WarningsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getWarningById(this.route.snapshot.params.id);
  }

  getWarningById(id: string): void {
    this.warningsService.getWarningById(id).subscribe(
      (data) => {
        this.currentWarning = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentWarning.title,
      description: this.currentWarning.description,
      published: status,
    };

    this.message = '';

    this.warningsService.putWarning(this.currentWarning.id, data).subscribe(
      (response) => {
        this.currentWarning.viewedDate = new Date();
        this.currentWarning.published = status;
        console.log(response);
        this.message = response.message
          ? response.message
          : 'Message marked as read successfully!';
      },
      (error) => {
        console.log(error);
      }
    );
  }


  updateWarning(): void {
    this.message = '';
    
    this.warningsService.putWarning(this.currentWarning.id, this.currentWarning)
      .subscribe(
        
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteWarning(): void {
    this.warningsService.deleteWarning(this.currentWarning.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }
}
