import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuralAvisosComponent } from './mural-avisos/mural-avisos.component';

const routes: Routes = [
  { path: '', redirectTo: 'mural-avisos', pathMatch: 'full'},
 
  { path: 'mural-avisos', component: MuralAvisosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
