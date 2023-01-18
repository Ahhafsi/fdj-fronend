import { Component } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent {
  player = {
    name: 'Pierre-Emerick Aubameyang',
    position: 'Forward',
    thumbnail:
      'https://www.thesportsdb.com/images/media/player/thumb/fnk3u51520755737.jpg',
    signin: {
      amount: 63750000,
      currency: 'eur',
    },
    born: '614223439198',
  };
}
