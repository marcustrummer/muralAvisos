import { HttpClientModule } from '@angular/common/http';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { MuralAvisosComponent } from './mural-avisos/mural-avisos.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddWarningsComponent } from './add-warnings/add-warnings.component';
import { WarningDetailsComponent } from './warning-details/warning-details.component';
import { AlertasComponent } from './alertas/alertas.component';

@NgModule({
  declarations: [AppComponent, MuralAvisosComponent, AddWarningsComponent, WarningDetailsComponent, AlertasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule,
    NgxPaginationModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
