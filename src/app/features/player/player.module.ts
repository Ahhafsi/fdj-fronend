import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTileComponent } from './player-tile/player-tile.component';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
  declarations: [PlayerTileComponent, PlayerListComponent],
  imports: [CommonModule],
})
export class PlayerModule {}
