import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProxyRouteComponent } from '@core/components';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ProxyRouteComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@features/league/league.module').then(
                (module) => module.LeagueModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
