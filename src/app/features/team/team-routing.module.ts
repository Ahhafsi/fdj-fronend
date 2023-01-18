import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProxyRouteComponent } from '@core/components/proxy-route/proxy-route.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamListComponent } from './team-list/team-list.component';

const routes: Routes = [
  {
    path: ':id',
    component: TeamDetailComponent,
    children: [
      {
        path: 'players',
        component: ProxyRouteComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@features/player/player.module').then(
                (module) => module.PlayerModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: '',
    component: TeamListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
