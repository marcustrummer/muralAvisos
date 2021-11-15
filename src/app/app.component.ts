import { Component } from '@angular/core';
import { WarningsService } from './service/warnings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'muralAvisos';
  constructor(
    public auth: WarningsService
  ){}
}
