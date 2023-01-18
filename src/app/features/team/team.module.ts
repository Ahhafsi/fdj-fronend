import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [TeamListComponent, TeamDetailComponent],
  imports: [CommonModule, SharedModule],
})
export class TeamModule {}
