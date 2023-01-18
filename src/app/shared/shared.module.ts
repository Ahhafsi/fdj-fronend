import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';

const EXT_MODULES = [
  FormsModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
];

const NG_MODULES = [CommonModule, RouterModule, HttpClientModule];

@NgModule({
  declarations: [],
  imports: [NG_MODULES, EXT_MODULES, CoreModule],
  exports: [NG_MODULES, EXT_MODULES, CoreModule],
})
export class SharedModule {}
