import { Injectable } from '@angular/core';
import { Player} from './player';
import { HEROES} from './playableCharacter';
import { Observable, of} from 'rxjs';
import { MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private messageService: MessageService) { }

  playerVal: string;

  getHeroes(): Observable<Player[]> {
    this.messageService.add('Heroes fetched');
    return of(HEROES);
  }

  setPlayer(player: string) {
    this.playerVal = player;
  }

  getPlayer() {
    return this.playerVal;
  }
}
