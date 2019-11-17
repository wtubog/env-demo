import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondPageComponent } from './second-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SecondPageComponent
  }
];

@NgModule({
  declarations: [SecondPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SecondPageModule {}
