import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BannerComponent } from './layout/banner/banner.component';
import { ProxyRouteComponent } from './components';
import { MatInputModule } from '@angular/material/input';

const EXT_MODULES = [MatInputModule, MatIconModule, MatToolbarModule];

const NG_MODULES = [CommonModule, RouterModule, HttpClientModule];

@NgModule({
  declarations: [BannerComponent, ProxyRouteComponent],
  imports: [NG_MODULES, EXT_MODULES],
  exports: [NG_MODULES, EXT_MODULES, BannerComponent, ProxyRouteComponent],
})
export class CoreModule {}
