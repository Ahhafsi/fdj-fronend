import { Component, OnInit } from '@angular/core';
import { League } from '@core/models';
import { debounceTime, Observable, switchMap } from 'rxjs';
import { LeagueService } from '../services/league.service';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss'],
})
export class LeagueListComponent implements OnInit {
  league = {
    name: 'taraji',
    thumbnail:
      'https://www.thesportsdb.com/images/media/team/badge/vwpvry1467462651.png',
    teams: [],
  };

  leagueList$: Observable<League[]>;
  constructor(private service: LeagueService) {}

  ngOnInit(): void {
    // this.leagueList$ = this.service.findByName;

    this.service.leagueFilter
      .pipe(
        debounceTime(500),
        switchMap((filter) => this.service.findByName(filter))
      )
      .subscribe();
  }
}
