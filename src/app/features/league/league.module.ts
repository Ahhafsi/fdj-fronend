import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueSelectorComponent } from './league-selector/league-selector.component';
import { SharedModule } from '@app/shared/shared.module';
import { LeagueListComponent } from './league-list/league-list.component';
import { LeagueDetailComponent } from './league-detail/league-detail.component';
import { LeagueRoutingModule } from './league-routing.module';

@NgModule({
  declarations: [
    LeagueSelectorComponent,
    LeagueListComponent,
    LeagueDetailComponent,
  ],
  imports: [CommonModule, LeagueRoutingModule, SharedModule],
})
export class LeagueModule {}
