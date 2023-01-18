import { BehaviorSubject, find, of, ReplaySubject } from 'rxjs';
import { LeagueDataService } from '@core/servicesapi';
import { League } from '@core/models';
import { EMPTY_VAlUE } from '@core/constants';
import { isEmpty } from 'lodash';

export class LeagueService {
  private _selectedLeague = new ReplaySubject<League>(1);
  private _filterLeagueText$ = new BehaviorSubject<string>(EMPTY_VAlUE);

  constructor(private dataservice: LeagueDataService) {}

  findByIds(ids: string[]) {
    const criteria = 'ids=' + ids.join(',');
    return this.dataservice.find(criteria);
  }

  findByName(name: string) {
    if (isEmpty(name)) return of([]);
    const criteria = `name: {$regex: .*${name}.*`;
    return this.dataservice.find(criteria);
  }

  resetSearchText() {
    this._filterLeagueText$.next(EMPTY_VAlUE);
  }

  setSearchText(searchText: string) {
    this._filterLeagueText$.next(searchText);
  }

  get leagueFilter() {
    return this._filterLeagueText$.asObservable();
  }
}
