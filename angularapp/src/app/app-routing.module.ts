import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForexConverterComponent } from './forex-converter/forex-converter.component';

const routes: Routes = [
  { path: '', redirectTo: '/forex-converter', pathMatch: 'full' },
  { path: 'forex-converter', component: ForexConverterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
