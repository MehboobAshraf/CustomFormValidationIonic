import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LibInputPage } from './lib-input.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: LibInputPage
//   }
// ];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [LibInputPage],
  exports: [LibInputPage]
})
export class LibInputPageModule {}
