import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWarningsComponent } from './add-warnings/add-warnings.component';
import { MuralAvisosComponent } from './mural-avisos/mural-avisos.component';
import { WarningDetailsComponent } from './warning-details/warning-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'mural-avisos', pathMatch: 'full'},
 
  { path: 'mural-avisos', component: MuralAvisosComponent },
  { path: 'add-warning', component: AddWarningsComponent },
  { path: 'warnings/:id', component: WarningDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
