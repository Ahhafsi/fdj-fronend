import { Component, Input } from '@angular/core';
import { Player } from '@core/models';

@Component({
  selector: 'app-player-tile',
  templateUrl: './player-tile.component.html',
  styleUrls: ['./player-tile.component.scss'],
})
export class PlayerTileComponent {
  @Input() player: Player;
}
