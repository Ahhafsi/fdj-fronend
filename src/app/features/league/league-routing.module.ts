import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProxyRouteComponent } from '@core/components/proxy-route/proxy-route.component';
import { LeagueDetailComponent } from './league-detail/league-detail.component';
import { LeagueListComponent } from './league-list/league-list.component';

const routes: Routes = [
  {
    path: ':id',
    component: LeagueDetailComponent,
    children: [
      {
        path: 'teams',
        component: ProxyRouteComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@features/team/team.module').then(
                (module) => module.TeamModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: '',
    component: LeagueListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagueRoutingModule {}
