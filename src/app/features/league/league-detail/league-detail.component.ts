import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { League } from '@core/models';

@Component({
  selector: 'app-league-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueDetailComponent {
  @Input() league: League;
}
